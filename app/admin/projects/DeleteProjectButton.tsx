'use client';

import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function DeleteProjectButton({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  const router = useRouter();

  async function handleDelete() {
    if (!confirm(`Delete "${name}"? This cannot be undone.`)) return;

    const supabase = createClient();
    await supabase.from('projects').delete().eq('id', id);
    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
      className="text-red-400 hover:text-red-600 transition-colors"
    >
      Delete
    </button>
  );
}
