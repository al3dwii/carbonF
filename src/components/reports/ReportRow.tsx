import { mutate } from "swr";
import { toastError } from "@/lib/toast";

async function regenerate(id: string) {
  try {
    await fetch(`/api/reports/${id}/regenerate`, { method: "POST" });
    mutate("/api/reports");
  } catch (e) {
    toastError("Could not regenerate", () => regenerate(id));
  }
}

export default function ReportRow({ report }: { report: any }) {
  return (
    <div className="flex items-center justify-between">
      <span>{report.name}</span>
      <button onClick={() => regenerate(report.id)} className="link">Regenerate</button>
    </div>
  );
}
