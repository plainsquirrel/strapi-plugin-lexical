/**
 * Plugin for handling image uploads to Strapi media library
 */

import type { JSX } from 'react';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { DRAG_DROP_PASTE } from '@lexical/rich-text';
import { isMimeType, mediaFileReader } from '@lexical/utils';
import {
  COMMAND_PRIORITY_LOW,
  COMMAND_PRIORITY_HIGH,
  createCommand,
  LexicalCommand,
  PASTE_COMMAND,
} from 'lexical';
import { useEffect, useRef, useState } from 'react';
import * as React from 'react';

import { INSERT_STRAPI_IMAGE_COMMAND, InsertStrapiImagePayload } from './StrapiImagePlugin';
import {
  uploadImageToStrapi,
  uploadMultipleImagesToStrapi,
  isValidImageFile,
  UploadedImage,
} from '../utils/uploadImage';

const ACCEPTABLE_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/svg+xml',
];

export const UPLOAD_IMAGE_COMMAND: LexicalCommand<File[]> = createCommand('UPLOAD_IMAGE_COMMAND');

export interface StrapiImageUploadPluginProps {
  folder?: string;
}

export default function StrapiImageUploadPlugin({
  folder = 'post',
}: StrapiImageUploadPluginProps): JSX.Element | null {
  const [editor] = useLexicalComposerContext();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    return editor.registerCommand(
      DRAG_DROP_PASTE,
      (files) => {
        handleFileUpload(files);
        return true;
      },
      COMMAND_PRIORITY_HIGH
    );
  }, [editor, folder]);

  useEffect(() => {
    return editor.registerCommand(
      PASTE_COMMAND,
      (event: ClipboardEvent) => {
        const clipboardData = event.clipboardData;
        if (clipboardData && clipboardData.files.length > 0) {
          const files = Array.from(clipboardData.files);
          const imageFiles = files.filter(isValidImageFile);

          if (imageFiles.length > 0) {
            event.preventDefault();
            handleFileUpload(imageFiles);
            return true;
          }
        }
        return false;
      },
      COMMAND_PRIORITY_HIGH
    );
  }, [editor, folder]);

  useEffect(() => {
    return editor.registerCommand(
      UPLOAD_IMAGE_COMMAND,
      (files: File[]) => {
        handleFileUpload(files);
        return true;
      },
      COMMAND_PRIORITY_LOW
    );
  }, [editor, folder]);

  const handleFileUpload = async (files: File[] | FileList) => {
    const fileArray = Array.from(files);
    const imageFiles = fileArray.filter(isValidImageFile);

    if (imageFiles.length === 0) {
      console.warn('No valid image files found');
      return;
    }

    if (isUploading) {
      console.warn('Upload already in progress');
      return;
    }

    setIsUploading(true);

    try {
      console.log(`Uploading ${imageFiles.length} image(s)...`);

      // Show a temporary loading indicator in the editor
      // You could implement a more sophisticated loading state here

      const uploadedImages = await uploadMultipleImagesToStrapi(imageFiles, folder);

      // Insert each uploaded image into the editor
      uploadedImages.forEach((uploadedImage: UploadedImage) => {
        const imagePayload: InsertStrapiImagePayload = {
          documentId: uploadedImage.documentId,
          src: uploadedImage.url,
          caption: uploadedImage.alternativeText || uploadedImage.name.split('.')[0] || '',
        };

        editor.dispatchCommand(INSERT_STRAPI_IMAGE_COMMAND, imagePayload);
      });

      console.log(`Successfully uploaded ${uploadedImages.length} image(s)`);

      // You could show a success notification here
    } catch (error) {
      console.error('Failed to upload images:', error);

      // Show user-friendly error message
      let errorMessage = '이미지 업로드에 실패했습니다.';

      if (error instanceof Error) {
        if (error.message.includes('413')) {
          errorMessage = '파일 크기가 너무 큽니다. 더 작은 이미지를 선택해주세요.';
        } else if (error.message.includes('401') || error.message.includes('403')) {
          errorMessage = '업로드 권한이 없습니다. 관리자에게 문의하세요.';
        } else if (error.message.includes('415')) {
          errorMessage = '지원하지 않는 파일 형식입니다.';
        }
      }

      alert(errorMessage);
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files);
    }
    // Reset the input value so the same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileInput = () => {
    if (isUploading) {
      console.warn('Upload in progress, please wait...');
      return;
    }

    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Register the file input trigger function globally so it can be called from toolbar
  useEffect(() => {
    (window as any).__strapiImageUploadTrigger = triggerFileInput;

    return () => {
      delete (window as any).__strapiImageUploadTrigger;
    };
  }, [isUploading]);

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept={ACCEPTABLE_IMAGE_TYPES.join(',')}
        multiple
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
        disabled={isUploading}
      />
    </>
  );
}

// Export the trigger function for use in other components
export const triggerImageUpload = () => {
  if ((window as any).__strapiImageUploadTrigger) {
    (window as any).__strapiImageUploadTrigger();
  }
};
