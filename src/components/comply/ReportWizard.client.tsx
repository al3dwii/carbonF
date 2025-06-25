"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ReportWizard({ orgId }: { orgId: string }) {
  const [open, setOpen] = useState(false);
  const [period, setPeriod] = useState("FY2026");
  const [fmt, setFmt] = useState<"xlsx" | "xbrl" | "pdf">("xlsx");
  const router = useRouter();

  async function generate() {
    const res = await fetch(`/api/org/${orgId}/comply/reports`, {
      method: "POST",
      body: JSON.stringify({ period, fmt }),
    });
    if (res.ok) {
      setOpen(false);
      router.refresh();
    }
  }

  return (
    <>
      <button className="border px-3 py-1" onClick={() => setOpen(true)}>
        Generate new
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center">
          <div className="bg-white p-6 space-y-4 w-80">
            <h2 className="text-lg">New CSRD Report</h2>
            <label className="block text-sm">
              Period
              <input
                className="border w-full px-2 py-1"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
              />
            </label>

            <label className="block text-sm">
              Format
              <select
                className="border w-full px-2 py-1"
                value={fmt}
                onChange={(e) => setFmt(e.target.value as any)}
              >
                <option value="xlsx">XLSX</option>
                <option value="xbrl">XBRL</option>
                <option value="pdf">PDF</option>
              </select>
            </label>

            <div className="flex justify-end gap-2">
              <button onClick={() => setOpen(false)}>Cancel</button>
              <button className="border px-3 py-1" onClick={generate}>
                Generate
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

