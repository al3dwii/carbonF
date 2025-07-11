import { PluginCards } from "@/components/dashboard/PluginCards.client";

export const revalidate = 60;

export default async function PluginsHome(
  props: { params: Promise<{ orgId: string }> },
) {
  const { orgId } = await props.params;
  return (
    <div className="p-6">
      <h1 className="text-2xl mb-6">Available Plugins</h1>
      <PluginCards orgId={orgId} showAll />
    </div>
  );
}
