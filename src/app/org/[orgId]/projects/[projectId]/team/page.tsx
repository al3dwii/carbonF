import { request } from "@/lib/client";

export default async function ProjectTeam(
  props: {
  params: Promise<{ orgId: string; projectId: string }>;
  },
) {
  await Promise.resolve();
  const { orgId, projectId } = await props.params;
  const team = await request<{ id: string; name: string; role: string }[]>(
    `/org/${orgId}/projects/${projectId}/team`
  );
  const list = Array.isArray(team) ? team : [];

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Team members</h1>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th className="py-1">Name</th>
            <th className="py-1">Role</th>
          </tr>
        </thead>
        <tbody>
          {list.map((m) => (
            <tr key={m.id} className="border-b">
              <td className="py-1">{m.name}</td>
              <td className="py-1">{m.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
