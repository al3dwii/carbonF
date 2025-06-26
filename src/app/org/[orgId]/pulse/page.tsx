import PulseVendors from "@/components/pulse/VendorTable";
import { fetchVendors } from "@/lib/vendor-api";
import { Suspense } from 'react';
import { Loading } from '@/components/Loading';

export default async function Pulse(
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
  const vendors = await fetchVendors(orgId);
  return <PulseVendors initial={vendors} orgId={orgId} />;
}
