import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import DeleteProjectButton from './DeleteProjectButton';

export default async function AdminProjectsPage() {
  const supabase = await createClient();
  const { data: projects } = await supabase
    .from('projects')
    .select('id, name, category, year, location, cover_image')
    .order('created_at', { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900">Projects</h1>
          <p className="text-sm text-gray-500 mt-0.5">{projects?.length ?? 0} total</p>
        </div>
        <Link
          href="/admin/projects/new"
          className="bg-[#1C1410] text-white px-3 py-2 md:px-4 rounded-lg text-sm font-medium hover:bg-[#2a1e14] transition-colors"
        >
          + New project
        </Link>
      </div>

      {!projects || projects.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg">No projects yet.</p>
          <p className="text-sm mt-1">Click "New project" to add your first one.</p>
        </div>
      ) : (
        <>
          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="flex items-center gap-3 mb-3">
                  {project.cover_image ? (
                    <img src={project.cover_image} alt="" className="w-12 h-12 rounded-lg object-cover shrink-0" />
                  ) : (
                    <div className="w-12 h-12 rounded-lg bg-gray-100 shrink-0" />
                  )}
                  <div className="min-w-0">
                    <p className="font-medium text-gray-900 truncate">{project.name}</p>
                    <p className="text-sm text-gray-500 capitalize">{project.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  {project.year && <span>{project.year}</span>}
                  {project.location && <span>{project.location}</span>}
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <Link href={`/admin/projects/${project.id}/edit`} className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors">
                    Edit
                  </Link>
                  <DeleteProjectButton id={project.id} name={project.name} />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop table */}
          <div className="hidden md:block bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-5 py-3 font-medium text-gray-600">Project</th>
                  <th className="text-left px-5 py-3 font-medium text-gray-600">Category</th>
                  <th className="text-left px-5 py-3 font-medium text-gray-600">Year</th>
                  <th className="text-left px-5 py-3 font-medium text-gray-600">Location</th>
                  <th className="px-5 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        {project.cover_image ? (
                          <img src={project.cover_image} alt="" className="w-10 h-10 rounded object-cover shrink-0" />
                        ) : (
                          <div className="w-10 h-10 rounded bg-gray-100 shrink-0" />
                        )}
                        <span className="font-medium text-gray-900">{project.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4"><span className="capitalize text-gray-600">{project.category}</span></td>
                    <td className="px-5 py-4 text-gray-600">{project.year ?? '—'}</td>
                    <td className="px-5 py-4 text-gray-600">{project.location ?? '—'}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-3">
                        <Link href={`/admin/projects/${project.id}/edit`} className="text-gray-500 hover:text-gray-900 transition-colors">Edit</Link>
                        <DeleteProjectButton id={project.id} name={project.name} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
