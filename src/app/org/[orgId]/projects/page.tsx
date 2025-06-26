/* projects/page.tsx */
import { request } from "@/lib/client";
import Link from "next/link";

export default async function ProjectsPage(
  props: { params: { orgId: string } },
) {
  const { orgId } = props.params;
  const projects = await request(`/org/${orgId}/projects`, "get", { orgId });
  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Projects</h1>
      <ul className="space-y-2">
        {projects.map((p:{id:string;name:string}) => (
          <li key={p.id}>
            <Link href={`/org/${orgId}/projects/${p.id}`} className="underline">
              {p.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}