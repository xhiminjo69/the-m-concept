import imageCompression from 'browser-image-compression';

const MAX_FILE_SIZE_MB = 50;
const MAX_WIDTH_PX = 1920;
const TARGET_SIZE_MB = 0.8;

export function validateFile(file: File): string | null {
  if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
    return `File "${file.name}" is too large (max ${MAX_FILE_SIZE_MB}MB).`;
  }
  if (!file.type.startsWith('image/')) {
    return `File "${file.name}" is not an image.`;
  }
  return null;
}

export async function optimizeImage(file: File): Promise<File> {
  const compressed = await imageCompression(file, {
    maxSizeMB: TARGET_SIZE_MB,
    maxWidthOrHeight: MAX_WIDTH_PX,
    useWebWorker: true,
    fileType: 'image/webp',
  });

  // Return as a proper File with .webp extension
  const name = file.name.replace(/\.[^.]+$/, '') + '.webp';
  return new File([compressed], name, { type: 'image/webp' });
}
