// src/components/ui/DateRangePicker.tsx
"use client";

import { useState } from "react";

import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

import { format, subDays } from "date-fns";

// ────────────────────────────────────────────
// Types
// ────────────────────────────────────────────

export type Preset = "7d" | "30d" | "90d";
export type DateRangeValue =
  | Preset
  | {
      start: Date;
      end: Date;
    };

interface DateRangePickerProps {
  /** Current value (controlled) */
  period: DateRangeValue;
  /** Called whenever the user picks a new range or preset */
  onChange: (value: DateRangeValue) => void;
}

// ────────────────────────────────────────────
// Helper
// ────────────────────────────────────────────

const presets: Record<Preset, { label: string; start: Date }> = {
  "7d":  { label: "Last 7 days",  start: subDays(new Date(), 6) },
  "30d": { label: "Last 30 days", start: subDays(new Date(), 29) },
  "90d": { label: "Last 90 days", start: subDays(new Date(), 89) }
};

// ────────────────────────────────────────────
// Component
// ────────────────────────────────────────────

export default function DateRangePicker({
  period,
  onChange
}: DateRangePickerProps) {
  // Local UI state for custom dates
  const [custom, setCustom] = useState<{ start: string; end: string }>({
    start: "",
    end: ""
  });

  const currentLabel = (() => {
    if (typeof period === "string") return presets[period].label;
    return `${format(period.start, "yyyy-MM-dd")} → ${format(
      period.end,
      "yyyy-MM-dd"
    )}`;
  })();

  // ── Render ────────────────────────────────
  return (
    <Popover>
      <PopoverTrigger
        className="rounded border px-3 py-1 text-sm hover:bg-muted"
        aria-label="Choose date range"
      >
        {currentLabel}
      </PopoverTrigger>

      <PopoverContent
        className="w-64 rounded border bg-white p-3 shadow-md space-y-2"
        side="bottom"
        align="start"
      >
        {/* Presets */}
        {/** Note: simple buttons keep bundle light; replace with
         * shadcn Select if you already have it installed  **/}
        <div className="grid grid-cols-3 gap-1">
          {(Object.keys(presets) as Preset[]).map((k) => (
            <button
              key={k}
              onClick={() => onChange(k)}
              className="rounded px-2 py-1 text-xs hover:bg-muted"
            >
              {presets[k].label}
            </button>
          ))}
        </div>

        {/* Custom range */}
        <div className="space-y-1 pt-2 border-t">
          <label className="block text-xs">Custom</label>
          <div className="flex items-center gap-2">
            <input
              type="date"
              className="rounded border px-1 py-0.5 text-xs grow"
              value={custom.start}
              onChange={(e) => setCustom((c) => ({ ...c, start: e.target.value }))}
            />
            <span className="text-xs">→</span>
            <input
              type="date"
              className="rounded border px-1 py-0.5 text-xs grow"
              value={custom.end}
              onChange={(e) => setCustom((c) => ({ ...c, end: e.target.value }))}
            />
          </div>
          <button
            disabled={!custom.start || !custom.end}
            onClick={() =>
              onChange({
                start: new Date(custom.start),
                end: new Date(custom.end)
              })
            }
            className="mt-1 w-full rounded bg-primary px-2 py-1 text-xs text-white disabled:opacity-50"
          >
            Apply
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
