import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import SpaceForm from '@/components/admin/SpaceForm';

export default async function EditSpacePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: space } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (!space) notFound();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">
        Edit — {space.name}
      </h1>
      <SpaceForm
        spaceId={space.id}
        initialData={{
          name: space.name,
          category: space.category,
          description: space.description ?? '',
          images: space.images ?? [],
        }}
      />
    </div>
  );
}
