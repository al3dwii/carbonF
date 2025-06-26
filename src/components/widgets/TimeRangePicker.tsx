"use client";

import { useState, useEffect } from "react";

export type Range = "7d" | "30d" | "custom";

export default function TimeRangePicker({
  value,
  onChange,
}: {
  value: Range;
  onChange: (r: Range, custom?: [Date, Date]) => void;
}) {
  const [range, setRange] = useState<Range>(value);
  // sync when parent changes
  useEffect(() => setRange(value), [value]);

  return (
    <div className="inline-flex border rounded overflow-hidden">
      {(["7d", "30d", "custom"] as Range[]).map((r) => (
        <button
          key={r}
          className={`px-3 py-1 text-sm ${
            range === r ? "bg-gray-200 font-medium" : ""
          }`}
          onClick={() => {
            setRange(r);
            onChange(r);
          }}
        >
          {r === "custom" ? "Custom" : r}
        </button>
      ))}
    </div>
  );
}
