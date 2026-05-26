'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import ImageUploader from './ImageUploader';

type SpaceCategory =
  | 'kitchens'
  | 'bathrooms'
  | 'bedroom-wardrobes'
  | 'living-room'
  | 'others';

type SpaceFormData = {
  name: string;
  category: SpaceCategory;
  description: string;
  images: string[];
};

type Props = {
  spaceId?: string;
  initialData?: Partial<SpaceFormData>;
};

const defaultData: SpaceFormData = {
  name: '',
  category: 'living-room',
  description: '',
  images: [],
};

const categoryOptions: { value: SpaceCategory; label: string }[] = [
  { value: 'living-room',       label: 'Living Room' },
  { value: 'bedroom-wardrobes', label: 'Bedroom & Wardrobes' },
  { value: 'kitchens',          label: 'Kitchens' },
  { value: 'bathrooms',         label: 'Bathrooms' },
  { value: 'others',            label: 'Others' },
];

export default function SpaceForm({ spaceId, initialData }: Props) {
  const router = useRouter();
  const isEdit = !!spaceId;

  const [form, setForm] = useState<SpaceFormData>({
    ...defaultData,
    ...initialData,
    images: initialData?.images ?? [],
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  function set(field: keyof SpaceFormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) {
      setError('Space name is required.');
      return;
    }

    setSaving(true);
    setError('');

    const supabase = createClient();

    const payload = {
      name: form.name.trim(),
      category: form.category,
      description: form.description.trim() || null,
      images: form.images,
    };

    if (isEdit) {
      const { error: err } = await supabase
        .from('products')
        .update(payload)
        .eq('id', spaceId);
      if (err) {
        setError(err.message);
        setSaving(false);
        return;
      }
    } else {
      const { error: err } = await supabase.from('products').insert(payload);
      if (err) {
        setError(err.message);
        setSaving(false);
        return;
      }
    }

    router.push('/admin/products');
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">

      {/* Name */}
      <Field label="Space name *">
        <input
          type="text"
          value={form.name}
          onChange={(e) => set('name', e.target.value)}
          className={inputClass}
          placeholder="e.g. Living Room Collection"
        />
      </Field>

      {/* Category */}
      <Field label="Category *">
        <select
          value={form.category}
          onChange={(e) => set('category', e.target.value as SpaceCategory)}
          className={inputClass}
        >
          {categoryOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </Field>

      {/* Description */}
      <Field label="Description">
        <textarea
          value={form.description}
          onChange={(e) => set('description', e.target.value)}
          rows={4}
          className={inputClass}
          placeholder="Describe this space or product…"
        />
      </Field>

      {/* Images */}
      <ImageUploader
        bucket="Spaces"
        folder={spaceId ?? 'new'}
        label="Images"
        value={form.images}
        onChange={(urls) => setForm((p) => ({ ...p, images: urls }))}
        multiple={true}
      />

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <div className="flex items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="bg-[#1C1410] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#2a1e14] transition-colors disabled:opacity-60"
        >
          {saving ? 'Saving…' : isEdit ? 'Save changes' : 'Create space'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/products')}
          className="text-gray-500 hover:text-gray-800 text-sm transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

const inputClass =
  'w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1C1410] focus:border-transparent';

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}
