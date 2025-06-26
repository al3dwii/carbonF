import RouterClient from "./RouterClient";

export default function RouterPage({ params:{orgId} }:{ params:{orgId:string} }) {
  return <RouterClient orgId={orgId} />;
}
