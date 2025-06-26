import { request } from "@/lib/client";
import LedgerTable from "@/components/ledger/Table";
import { Suspense } from 'react';
import { Loading } from '@/components/Loading';

export default function LedgerPage(
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
  const events = await request(
    "/org/{orgId}/ledger",
    "get",
    { orgId }
  );
  return <LedgerTable initial={events as any} orgId={orgId} />;
}
