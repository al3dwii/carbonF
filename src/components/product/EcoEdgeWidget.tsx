import { Leaf } from "lucide-react";
import { ProductWidget } from "./ProductWidget";

export default function EcoEdgeWidget({ orgId }: { orgId: string }) {
  return (
    <ProductWidget
      orgId={orgId}
      icon={Leaf}
      title="EcoEdge Summary"
      endpoint={`/ecoedge/summary`}
      render={(d: any) => (
        <div className="text-sm">{d.message}</div>
      )}
    />
  );
}
