import { notFound } from 'next/navigation';
import PageWrapper from '@/components/PageWrapper';
import ChatWindow from '@/components/greendev/ChatWindow';
import { Suspense } from 'react';
import { Loading } from '@/components/Loading';

export default async function Page(
  props: { params: Promise<{ orgId: string }> },
) {
  const { orgId } = await props.params;
  if (!orgId) notFound();
  return (
    <Suspense fallback={<Loading />}>
      <PageWrapper>
        <h1 className="mb-6 text-2xl font-bold">GreenDev Bot 🤖</h1>
        <div className="h-[60vh] rounded border">
          <ChatWindow />
        </div>
      </PageWrapper>
    </Suspense>
  );
}
