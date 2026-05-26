'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import ImageUploader from './ImageUploader';

type ProjectCategory = 'commercial' | 'hospitality' | 'residential';

type ProjectFormData = {
  name: string;
  category: ProjectCategory;
  type: string;
  year: string;
  location: string;
  description: string;
  cover_image: string[];
  gallery: string[];
};

type Props = {
  projectId?: string;
  initialData?: Partial<ProjectFormData>;
};

const defaultData: ProjectFormData = {
  name: '',
  category: 'commercial',
  type: '',
  year: '',
  location: '',
  description: '',
  cover_image: [],
  gallery: [],
};

export default function ProjectForm({ projectId, initialData }: Props) {
  const router = useRouter();
  const isEdit = !!projectId;

  const [form, setForm] = useState<ProjectFormData>({
    ...defaultData,
    ...initialData,
    cover_image: initialData?.cover_image ?? [],
    gallery: initialData?.gallery ?? [],
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  function set(field: keyof ProjectFormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) {
      setError('Project name is required.');
      return;
    }

    setSaving(true);
    setError('');

    const supabase = createClient();

    const payload = {
      name: form.name.trim(),
      category: form.category,
      type: form.type.trim() || null,
      year: form.year.trim() || null,
      location: form.location.trim() || null,
      description: form.description.trim() || null,
      cover_image: form.cover_image[0] ?? null,
      gallery: form.gallery,
    };

    if (isEdit) {
      const { error: err } = await supabase
        .from('projects')
        .update(payload)
        .eq('id', projectId);
      if (err) {
        setError(err.message);
        setSaving(false);
        return;
      }
    } else {
      const { error: err } = await supabase.from('projects').insert(payload);
      if (err) {
        setError(err.message);
        setSaving(false);
        return;
      }
    }

    router.push('/admin/projects');
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">

      {/* Name */}
      <Field label="Project name *">
        <input
          type="text"
          value={form.name}
          onChange={(e) => set('name', e.target.value)}
          className={inputClass}
          placeholder="e.g. Hotel Radream"
        />
      </Field>

      {/* Category */}
      <Field label="Category *">
        <select
          value={form.category}
          onChange={(e) => set('category', e.target.value as ProjectCategory)}
          className={inputClass}
        >
          <option value="commercial">Commercial</option>
          <option value="hospitality">Hospitality</option>
          <option value="residential">Residential</option>
        </select>
      </Field>

      {/* Type */}
      <Field label="Type">
        <input
          type="text"
          value={form.type}
          onChange={(e) => set('type', e.target.value)}
          className={inputClass}
          placeholder="e.g. Hospitality — Full Fit-Out"
        />
      </Field>

      {/* Year + Location */}
      <div className="grid grid-cols-2 gap-4">
        <Field label="Year">
          <input
            type="text"
            value={form.year}
            onChange={(e) => set('year', e.target.value)}
            className={inputClass}
            placeholder="2024"
          />
        </Field>
        <Field label="Location">
          <input
            type="text"
            value={form.location}
            onChange={(e) => set('location', e.target.value)}
            className={inputClass}
            placeholder="Vlorë, Albania"
          />
        </Field>
      </div>

      {/* Description */}
      <Field label="Description">
        <textarea
          value={form.description}
          onChange={(e) => set('description', e.target.value)}
          rows={4}
          className={inputClass}
          placeholder="Describe the project…"
        />
      </Field>

      {/* Cover image */}
      <ImageUploader
        bucket="Projects"
        folder={projectId ?? 'new'}
        label="Cover image"
        value={form.cover_image}
        onChange={(urls) => setForm((p) => ({ ...p, cover_image: urls }))}
        multiple={false}
      />

      {/* Gallery */}
      <ImageUploader
        bucket="Projects"
        folder={projectId ?? 'new'}
        label="Gallery images"
        value={form.gallery}
        onChange={(urls) => setForm((p) => ({ ...p, gallery: urls }))}
        multiple={true}
      />

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <div className="flex items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="bg-[#1C1410] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#2a1e14] transition-colors disabled:opacity-60"
        >
          {saving ? 'Saving…' : isEdit ? 'Save changes' : 'Create project'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/projects')}
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
