import { createClient } from '@/lib/supabase/server';

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const [{ count: projectCount }, { count: productCount }] = await Promise.all([
    supabase.from('projects').select('*', { count: 'exact', head: true }),
    supabase.from('products').select('*', { count: 'exact', head: true }),
  ]);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-2">Dashboard</h1>
      <p className="text-gray-500 text-sm mb-8">Welcome back. Here's a quick overview.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
        <StatCard label="Projects" value={projectCount ?? 0} href="/admin/projects" />
        <StatCard label="Products / Spaces" value={productCount ?? 0} href="/admin/products" />
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  href,
}: {
  label: string;
  value: number;
  href: string;
}) {
  return (
    <a
      href={href}
      className="bg-white rounded-xl border border-gray-200 p-6 hover:border-gray-400 transition-colors"
    >
      <p className="text-3xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </a>
  );
}
