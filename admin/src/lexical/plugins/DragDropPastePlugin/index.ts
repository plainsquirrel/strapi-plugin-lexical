/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { DRAG_DROP_PASTE } from '@lexical/rich-text';
import { isMimeType, mediaFileReader } from '@lexical/utils';
import { COMMAND_PRIORITY_LOW } from 'lexical';
import { useEffect } from 'react';

// Import Strapi image upload functionality instead of regular image plugin
import { UPLOAD_IMAGE_COMMAND } from '../StrapiImageUploadPlugin';
import { isValidImageFile } from '../../utils/uploadImage';

const ACCEPTABLE_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/svg+xml',
];

export default function DragDropPaste(): null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerCommand(
      DRAG_DROP_PASTE,
      (files) => {
        const fileArray = Array.from(files);
        const imageFiles = fileArray.filter(isValidImageFile);

        if (imageFiles.length > 0) {
          // Use Strapi image upload command instead of regular image command
          editor.dispatchCommand(UPLOAD_IMAGE_COMMAND, imageFiles);
          return true;
        }

        return false;
      },
      COMMAND_PRIORITY_LOW
    );
  }, [editor]);

  return null;
}
