import { createClient } from '@/lib/supabase/server';

export type SpaceCategory =
  | 'kitchens'
  | 'bathrooms'
  | 'bedroom-wardrobes'
  | 'living-room'
  | 'others';

export type SupabaseSpace = {
  id: string;
  name: string;
  category: SpaceCategory;
  description: string;
  images: string[];
};

export async function getSpaceByCategory(
  category: SpaceCategory
): Promise<SupabaseSpace | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from('products')
    .select('*')
    .eq('category', category)
    .order('created_at', { ascending: true });

  if (!data || data.length === 0) return null;

  return {
    ...data[0],
    images: data.flatMap((s) => s.images ?? []),
  };
}
