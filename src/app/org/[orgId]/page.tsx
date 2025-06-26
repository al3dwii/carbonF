import { redirect } from "next/navigation";

export default function OrgIndexPage(
  props: { params: { orgId: string } },
) {
  redirect(`/org/${props.params.orgId}/dashboard`);
}
