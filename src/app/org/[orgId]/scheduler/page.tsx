import SchedulerView from "@/components/scheduler/SchedulerView";
import { request } from "@/lib/client";
import { Suspense } from 'react';
import { Loading } from '@/components/Loading';

export default async function SchedulerPage(
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
  const data = await request("/org/{orgId}/jobs", "get", { orgId });
  return <SchedulerView initial={data as any} orgId={orgId} />;
}
