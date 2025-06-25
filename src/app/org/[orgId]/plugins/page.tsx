import { PluginCards } from "@/components/dashboard/PluginCards.client";

export const revalidate = 60;

export default function PluginsHome({ params }: { params:{orgId:string} }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl mb-6">Available Plugins</h1>
      <PluginCards orgId={params.orgId} showAll />
    </div>
  );
}
