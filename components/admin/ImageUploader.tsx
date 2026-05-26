'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { validateFile, optimizeImage } from '@/lib/image-utils';
import { createClient } from '@/lib/supabase/client';

type Props = {
  bucket: string;
  folder: string;
  value: string[];
  onChange: (urls: string[]) => void;
  multiple?: boolean;
  label?: string;
};

export default function ImageUploader({
  bucket,
  folder,
  value,
  onChange,
  multiple = false,
  label = 'Upload image',
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  async function handleFiles(files: FileList) {
    setError('');
    setUploading(true);

    const supabase = createClient();
    const uploaded: string[] = [];

    for (const file of Array.from(files)) {
      const validationError = validateFile(file);
      if (validationError) {
        setError(validationError);
        setUploading(false);
        return;
      }

      try {
        const optimized = await optimizeImage(file);
        const path = `${folder}/${Date.now()}-${optimized.name}`;

        const { error: uploadError } = await supabase.storage
          .from(bucket)
          .upload(path, optimized, { upsert: false });

        if (uploadError) throw uploadError;

        const { data } = supabase.storage.from(bucket).getPublicUrl(path);
        uploaded.push(data.publicUrl);
      } catch (err) {
        setError(`Upload failed: ${err instanceof Error ? err.message : 'Unknown error'}`);
        setUploading(false);
        return;
      }
    }

    onChange(multiple ? [...value, ...uploaded] : uploaded);
    setUploading(false);
  }

  async function removeImage(url: string) {
    const supabase = createClient();
    // Extract the path after the bucket name in the URL
    const path = url.split(`/${bucket}/`)[1];
    if (path) {
      await supabase.storage.from(bucket).remove([path]);
    }
    onChange(value.filter((u) => u !== url));
  }

  return (
    <div className="space-y-3">
      {label && (
        <p className="text-sm font-medium text-gray-700">{label}</p>
      )}

      <div className="flex flex-wrap gap-3">
        {value.map((url) => (
          <div key={url} className="relative group w-28 h-28 rounded-lg overflow-hidden border border-gray-200">
            <Image src={url} alt="" fill className="object-cover" />
            <button
              type="button"
              onClick={() => removeImage(url)}
              className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium"
            >
              Remove
            </button>
          </div>
        ))}

        {(multiple || value.length === 0) && (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="w-28 h-28 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
          >
            {uploading ? (
              <span className="text-xs text-center px-1">Uploading…</span>
            ) : (
              <>
                <span className="text-2xl leading-none">+</span>
                <span className="text-xs mt-1">Add photo</span>
              </>
            )}
          </button>
        )}
      </div>

      {error && <p className="text-red-600 text-xs">{error}</p>}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple={multiple}
        className="hidden"
        onChange={(e) => e.target.files && handleFiles(e.target.files)}
      />
    </div>
  );
}
