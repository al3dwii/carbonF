import dynamic from "next/dynamic";
const ReportWizard = dynamic(() => import("@/components/comply/ReportWizard").then(m => m.ReportWizard), { ssr: false });
import { Suspense } from 'react';
import { Loading } from '@/components/Loading';

export default function ReportsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <section>
        <h1 className="mb-6 text-2xl font-bold">CarbonComply Report Wizard</h1>
        <ReportWizard />
      </section>
    </Suspense>
  );
}
