import SettingsView from "@/components/settings/SettingsView";
import { request } from "@/lib/client";
import { Suspense } from 'react';
import { Loading } from '@/components/Loading';

export default async function SettingsPage(
  props: { params: Promise<{ orgId: string }> },
) {
  const { orgId } = await props.params;
  return (
    <Suspense fallback={<Loading />}>
      <Content orgId={orgId} />
    </Suspense>
  );
}

async function Content({ orgId }: { orgId: string }) {
  const data = await request("/org/{orgId}/settings", "get", { orgId });
  return <SettingsView initial={data as any} />;
}
