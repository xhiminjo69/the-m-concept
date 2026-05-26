import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import DeleteSpaceButton from './DeleteSpaceButton';

const categoryLabels: Record<string, string> = {
  'sofas': 'Sofas',
  'beds': 'Beds',
  'kitchens': 'Kitchens',
  'bathrooms': 'Bathrooms',
  'bedroom-wardrobes': 'Bedroom & Wardrobes',
  'living-room': 'Living Room',
};

export default async function AdminSpacesPage() {
  const supabase = await createClient();
  const { data: spaces } = await supabase
    .from('products')
    .select('id, name, category, images')
    .order('created_at', { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Spaces</h1>
          <p className="text-sm text-gray-500 mt-1">{spaces?.length ?? 0} total</p>
        </div>
        <Link
          href="/admin/products/new"
          className="bg-[#1C1410] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2a1e14] transition-colors"
        >
          + New space
        </Link>
      </div>

      {!spaces || spaces.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg">No spaces yet.</p>
          <p className="text-sm mt-1">Click "New space" to add your first one.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-5 py-3 font-medium text-gray-600">Space</th>
                <th className="text-left px-5 py-3 font-medium text-gray-600">Category</th>
                <th className="text-left px-5 py-3 font-medium text-gray-600">Images</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {spaces.map((space) => (
                <tr key={space.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      {space.images?.[0] ? (
                        <img
                          src={space.images[0]}
                          alt=""
                          className="w-10 h-10 rounded object-cover shrink-0"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded bg-gray-100 shrink-0" />
                      )}
                      <span className="font-medium text-gray-900">{space.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-gray-600">
                    {categoryLabels[space.category] ?? space.category}
                  </td>
                  <td className="px-5 py-4 text-gray-600">
                    {space.images?.length ?? 0}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-3">
                      <Link
                        href={`/admin/products/${space.id}/edit`}
                        className="text-gray-500 hover:text-gray-900 transition-colors"
                      >
                        Edit
                      </Link>
                      <DeleteSpaceButton id={space.id} name={space.name} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
