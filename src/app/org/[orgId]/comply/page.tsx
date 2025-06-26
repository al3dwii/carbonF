import { redirect } from "next/navigation";

export default function ComplyIndex(
  props: { params: { orgId: string } },
) {
  const { orgId } = props.params;
  redirect(`/org/${orgId}/comply/overview`);
}
