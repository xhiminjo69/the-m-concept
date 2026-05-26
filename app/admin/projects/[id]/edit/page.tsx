import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import ProjectForm from '@/components/admin/ProjectForm';

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: project } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();

  if (!project) notFound();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">
        Edit — {project.name}
      </h1>
      <ProjectForm
        projectId={project.id}
        initialData={{
          name: project.name,
          category: project.category,
          type: project.type ?? '',
          year: project.year ?? '',
          location: project.location ?? '',
          description: project.description ?? '',
          cover_image: project.cover_image ? [project.cover_image] : [],
          gallery: project.gallery ?? [],
        }}
      />
    </div>
  );
}
