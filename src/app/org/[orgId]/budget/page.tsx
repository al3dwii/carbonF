import BudgetView from "@/components/budget/BudgetView";
import { request } from "@/lib/client";
import { Suspense } from 'react';
import { Loading } from '@/components/Loading';

export default function BudgetPage(
  props: { params: { orgId: string } },
) {
  const { orgId } = props.params;
  return (
    <Suspense fallback={<Loading />}>
      <Content orgId={orgId} />
    </Suspense>
  );
}

async function Content({ orgId }: { orgId: string }) {
  const data = await request("/org/{orgId}/budget", "get", { orgId });
  return <BudgetView initial={data as any} orgId={orgId} />;
}
