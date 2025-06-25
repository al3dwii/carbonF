"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";
import { VirtualTable } from "@/components/ui/VirtualTable";

const ReportWizard = dynamic(() => import("./ReportWizard").then(m => m.ReportWizard), { ssr: false });

export default function ReportsList({ files }: { files: any[] }) {
  return (
    <VirtualTable
      items={files ?? []}
      renderRow={(f) => (
        <div className="flex justify-between px-2" key={f.id}>
          <span>{f.period}</span>
          <a href={f.link} className="underline">Download</a>
        </div>
      )}
    />
  );
}

ReportsList.GenerateButton = function({ orgId }: { orgId: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Generate</Button>
      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/50" onClick={() => setOpen(false)}>
          <div className="bg-white p-4" onClick={e => e.stopPropagation()}>
            <ReportWizard />
          </div>
        </div>
      )}
    </>
  );
};
