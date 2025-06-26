import RouterClient from "./RouterClient";

export default async function RouterPage({ params }: { params: Promise<{orgId:string}> }) {
  const { orgId } = await params;
  return <RouterClient orgId={orgId} />;
}
