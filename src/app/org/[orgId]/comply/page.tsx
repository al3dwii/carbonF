import { redirect } from "next/navigation";

export default function ComplyIndex({ params:{orgId} }:{params:{orgId:string}}) {
  redirect(`/org/${orgId}/comply/overview`);
}
