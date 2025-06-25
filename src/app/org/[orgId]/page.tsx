import { redirect } from "next/navigation";

export default function OrgIndexPage({ params }: { params:{ orgId:string } }) {
  redirect(`/org/${params.orgId}/dashboard`);
}
