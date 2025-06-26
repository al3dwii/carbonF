"use client";

import { useState, useRef } from "react";
import { useClickAway } from "react-use";

export default function DownloadDropdown({
  endpoint,
  onSelect,
}: {
  endpoint?: string;
  onSelect?: (fmt: "csv" | "xlsx" | "pdf") => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickAway(ref, () => setOpen(false));

  return (
    <div className="relative" ref={ref}>
      <button
        className="border rounded px-3 py-1 text-sm"
        onClick={() => setOpen((o) => !o)}
      >
        Download ▼
      </button>
      {open && (
        <ul className="absolute right-0 mt-1 w-28 border bg-white shadow">
          {(["csv", "xlsx", "pdf"] as const).map((fmt) => (
            <li key={fmt}>
              <button
                className="block w-full px-3 py-1 text-left text-sm hover:bg-gray-100"
                onClick={() => {
                  if (onSelect) onSelect(fmt);
                  if (endpoint) window.location.href = `${endpoint}.${fmt}`;
                  setOpen(false);
                }}
              >
                {fmt.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
