"use client";
export default function LiveStreamToggle({
  enabled, onToggle,
}: { enabled: boolean; onToggle: (v: boolean) => void }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={enabled}
        onChange={(e) => onToggle(e.target.checked)}
        className="toggle"
      />
      Live
    </label>
  );
}
