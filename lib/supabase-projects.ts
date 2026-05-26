import { createClient } from '@/lib/supabase/server';
import type { ProjectCategory } from '@/lib/projects';

// Shape that matches what the frontend components expect
export type SupabaseProject = {
  id: string;
  name: string;
  category: ProjectCategory;
  type: string;
  year: string;
  location: string;
  description: string;
  image: string;   // mapped from cover_image
  gallery: string[];
};

function mapRow(row: Record<string, unknown>): SupabaseProject {
  return {
    id: row.id as string,
    name: (row.name as string) ?? '',
    category: (row.category as ProjectCategory) ?? 'commercial',
    type: (row.type as string) ?? '',
    year: (row.year as string) ?? '',
    location: (row.location as string) ?? '',
    description: (row.description as string) ?? '',
    image: (row.cover_image as string) ?? '',
    gallery: (row.gallery as string[]) ?? [],
  };
}

export async function getSupabaseProjectsByCategory(
  category: ProjectCategory
): Promise<SupabaseProject[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from('projects')
    .select('*')
    .eq('category', category)
    .order('created_at', { ascending: false });

  return (data ?? []).map(mapRow);
}

export async function getSupabaseProject(id: string): Promise<SupabaseProject | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();

  return data ? mapRow(data) : null;
}

export async function getAllSupabaseProjects(): Promise<SupabaseProject[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  return (data ?? []).map(mapRow);
}
