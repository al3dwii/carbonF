import { redirect } from "next/navigation";

export default async function ComplyIndex(
  props: { params: Promise<{ orgId: string }> },
) {
  const { orgId } = await props.params;
  redirect(`/org/${orgId}/comply/overview`);
}
