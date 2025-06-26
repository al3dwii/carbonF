"use client";
import { useState } from "react";
import { toastError } from "@/lib/toast";

export default function TemplateManager({ orgId }: { orgId: string }) {
  const [file, setFile] = useState<File | null>(null);
  const upload = async () => {
    if (!file) return;
    try {
      const fd = new FormData();
      fd.append("file", file);
      await fetch(`/api/org/${orgId}/comply/templates`, { method: "POST", body: fd });
    } catch (e) { toastError("Upload failed"); }
  };
  return (
    <div>
      <input type="file" accept=".xlsx" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
      <button onClick={upload} className="btn-primary">Upload</button>
    </div>
  );
}
