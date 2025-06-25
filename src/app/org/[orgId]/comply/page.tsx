import { redirect } from "next/navigation";

export default function ComplyIndex({ params }: { params: { orgId: string } }) {
  const { orgId } = params;
  redirect(`/org/${orgId}/comply/overview`);
}
