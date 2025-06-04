/**
 * Utility functions for uploading images to Strapi media library
 */

export interface UploadedImage {
  documentId: string;
  url: string;
  name: string;
  alternativeText?: string;
  width?: number;
  height?: number;
}

export interface UploadImageOptions {
  file: File;
  folder?: string;
  alternativeText?: string;
}

/**
 * Generate UUID v4
 */
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Get file extension from filename or MIME type
 */
function getFileExtension(file: File): string {
  // Try to get extension from filename first
  const nameExtension = file.name.split('.').pop()?.toLowerCase();
  if (nameExtension && nameExtension !== file.name) {
    return nameExtension;
  }

  // Fallback to MIME type mapping
  const mimeTypeMap: Record<string, string> = {
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'image/png': 'png',
    'image/gif': 'gif',
    'image/webp': 'webp',
    'image/svg+xml': 'svg',
  };

  return mimeTypeMap[file.type] || 'jpg';
}

/**
 * Generate a unique filename for uploaded image
 */
function generateImageFilename(file: File): string {
  const extension = getFileExtension(file);
  const uuid = generateUUID();
  return `${uuid}.${extension}`;
}

/**
 * Get authentication headers for Strapi admin API
 */
function getAuthHeaders(): HeadersInit {
  const headers: HeadersInit = {};

  // Get CSRF token from meta tag if available
  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
  if (csrfToken) {
    headers['X-CSRF-Token'] = csrfToken;
  }

  // Get auth token from cookies (primary method for Strapi admin)
  let authToken = null;

  if (document.cookie) {
    // Parse cookies
    const cookies = document.cookie.split(';').reduce(
      (acc, cookie) => {
        const [name, value] = cookie.trim().split('=');
        if (name && value) {
          acc[name] = decodeURIComponent(value);
        }
        return acc;
      },
      {} as Record<string, string>
    );

    // Common Strapi admin cookie names
    const cookieKeys = ['jwtToken', 'strapi-jwt', 'jwt', 'token', 'authToken'];

    for (const key of cookieKeys) {
      if (cookies[key]) {
        authToken = cookies[key];
        console.log(`🍪 Found auth token in cookie: ${key}`);
        break;
      }
    }

    // If no exact match, look for JWT pattern
    if (!authToken) {
      for (const [cookieName, cookieValue] of Object.entries(cookies)) {
        if (cookieValue && cookieValue.startsWith('eyJ')) {
          authToken = cookieValue;
          console.log(`🍪 Found JWT token in cookie: ${cookieName}`);
          break;
        }
      }
    }
  }

  if (authToken) {
    authToken = authToken.replace(/^["']|["']$/g, '').trim();
    headers['Authorization'] = `Bearer ${authToken}`;
    console.log('✅ Auth header set successfully');
  } else {
    console.warn('❌ No authentication token found in cookies');
  }

  return headers;
}

/**
 * Upload an image file to Strapi media library using Admin API
 */
export async function uploadImageToStrapi(options: UploadImageOptions): Promise<UploadedImage> {
  const { file, folder = 'post', alternativeText } = options;

  try {
    // Generate unique filename for images without proper names (paste/drop)
    let uploadFile = file;
    if (
      !file.name ||
      file.name === 'image.png' ||
      file.name === 'blob' ||
      file.name.startsWith('image')
    ) {
      const newFilename = generateImageFilename(file);
      uploadFile = new File([file], newFilename, { type: file.type });
      console.log(`📝 Generated new filename: ${newFilename}`);
    }

    const formData = new FormData();
    formData.append('files', uploadFile);

    if (folder) {
      formData.append('path', folder);
    }

    if (alternativeText) {
      formData.append(
        'fileInfo',
        JSON.stringify({
          alternativeText: alternativeText,
        })
      );
    }

    // Get authentication headers
    const authHeaders = getAuthHeaders();

    // Admin API upload (Not Content API)
    const uploadUrl = '/upload'; // Admin API Endpoint

    // Debug logging
    console.log('Upload request headers:', authHeaders);
    console.log('Upload request URL:', uploadUrl);
    console.log('Upload file info:', {
      name: uploadFile.name,
      size: uploadFile.size,
      type: uploadFile.type,
    });

    const response = await fetch(uploadUrl, {
      method: 'POST',
      body: formData,
      headers: {
        // Include authentication headers
        ...authHeaders,
        // Don't set Content-Type header, let browser set it with boundary for FormData
      },
      credentials: 'include', // Include cookies for session authentication
    });

    console.log('Upload response status:', response.status);
    console.log('Upload response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Upload response error:', response.status, response.statusText, errorText);
      throw new Error(`Upload failed: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const uploadedFiles = await response.json();
    console.log('Upload successful:', uploadedFiles);

    if (!uploadedFiles || uploadedFiles.length === 0) {
      throw new Error('No files were uploaded');
    }

    const uploadedFile = uploadedFiles[0];

    return {
      documentId: uploadedFile.documentId,
      url: uploadedFile.url,
      name: uploadedFile.name,
      alternativeText: uploadedFile.alternativeText,
      width: uploadedFile.width,
      height: uploadedFile.height,
    };
  } catch (error) {
    console.error('Error uploading image to Strapi:', error);
    throw error;
  }
}

/**
 * Upload multiple images to Strapi media library
 */
export async function uploadMultipleImagesToStrapi(
  files: File[],
  folder?: string
): Promise<UploadedImage[]> {
  const uploadPromises = files.map((file) =>
    uploadImageToStrapi({
      file,
      folder,
      alternativeText: file.name.split('.')[0], // Use filename without extension as alt text
    })
  );

  return Promise.all(uploadPromises);
}

/**
 * Check if a file is a valid image type
 */
export function isValidImageFile(file: File): boolean {
  const validTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/svg+xml',
  ];

  return validTypes.includes(file.type);
}

/**
 * Get image dimensions from file
 */
export function getImageDimensions(file: File): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load image'));
    };

    img.src = url;
  });
}

/**
 * Delete an image from Strapi media library using Admin API
 */
export async function deleteImageFromStrapi(documentId: string): Promise<void> {
  try {
    const authHeaders = getAuthHeaders();

    // Admin API 삭제 엔드포인트 사용
    const deleteUrl = `/upload/files/${documentId}`;

    console.log('Delete request headers:', authHeaders);
    console.log('Delete request URL:', deleteUrl);

    const response = await fetch(deleteUrl, {
      method: 'DELETE',
      headers: {
        ...authHeaders,
      },
      credentials: 'include',
    });

    console.log('Delete response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Delete response error:', response.status, response.statusText, errorText);
      throw new Error(`Delete failed: ${response.status} ${response.statusText} - ${errorText}`);
    }

    console.log('Delete successful');
  } catch (error) {
    console.error('Error deleting image from Strapi:', error);
    throw error;
  }
}

/**
 * Simple debug function to check cookie authentication
 * Call this in browser console: window.debugStrapiAuth()
 */
export function debugStrapiAuth() {
  console.log('=== Strapi Cookie Auth Debug ===');

  let foundToken = false;

  if (document.cookie) {
    const cookies = document.cookie.split(';').reduce(
      (acc, cookie) => {
        const [name, value] = cookie.trim().split('=');
        if (name && value) {
          acc[name] = decodeURIComponent(value);
        }
        return acc;
      },
      {} as Record<string, string>
    );

    console.log('🍪 Checking for auth tokens in cookies:');

    const cookieKeys = ['jwtToken', 'strapi-jwt', 'jwt', 'token', 'authToken'];
    for (const key of cookieKeys) {
      if (cookies[key]) {
        console.log(`  ✅ ${key}: Found`);
        foundToken = true;
      } else {
        console.log(`  ❌ ${key}: Not found`);
      }
    }

    // Check for JWT pattern
    if (!foundToken) {
      for (const [name, value] of Object.entries(cookies)) {
        if (value && value.startsWith('eyJ')) {
          console.log(`  🎫 ${name}: JWT pattern found`);
          foundToken = true;
          break;
        }
      }
    }
  } else {
    console.log('❌ No cookies found');
  }

  console.log('\n📍 API Info: Using Admin API (/upload)');

  if (foundToken) {
    console.log('✅ Authentication token found - Upload should work');
  } else {
    console.log('❌ No auth token found - Please re-login to Strapi admin');
  }
}

// Make it available globally for debugging
if (typeof window !== 'undefined') {
  (window as any).debugStrapiAuth = debugStrapiAuth;
}
