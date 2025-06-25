import { request } from "@/lib/client";

export default async function ProjectPlugins({
  params,
}: {
  params: { orgId: string; projectId: string };
}) {
  const { orgId, projectId } = params;
  const plugins = await request<
    { slug: string; title: string; enabled: boolean }[]
  >(`/org/${orgId}/projects/${projectId}/plugins`);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl mb-4">Enabled plugins</h1>
      <ul className="space-y-2">
        {plugins.map((p) => (
          <li key={p.slug} className="flex items-center gap-4">
            <span className="w-40">{p.title}</span>
            <form
              action={`/api/org/${orgId}/projects/${projectId}/plugins/${p.slug}`}
              method="POST"
            >
              <input type="hidden" name="enabled" value={(!p.enabled).toString()} />
              <button className="border px-3 py-1 text-sm">
                {p.enabled ? "Disable" : "Enable"}
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
