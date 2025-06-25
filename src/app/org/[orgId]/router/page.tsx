import RouterView from "@/components/router/RouterView";
import { request }  from "@/lib/client";
import { Suspense } from 'react';
import { Loading } from '@/components/Loading';

export default function RouterPage({ params }: { params: { orgId: string } }) {
  const { orgId } = params;
  return (
    <Suspense fallback={<Loading />}>
      <Content orgId={orgId} />
    </Suspense>
  );
}

async function Content({ orgId }: { orgId: string }) {
  const data = await request("/org/{orgId}/router", "get", { orgId });
  return <RouterView initial={data} orgId={orgId} />;
}
