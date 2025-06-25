"use client";
import { useState } from "react";

export default function LiveStreamToggle({
  enabled,
  onToggle,
}: {
  enabled: boolean;
  onToggle: (v: boolean) => void;
}) {
  const [state, setState] = useState(enabled);
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={state}
        onChange={(e) => {
          setState(e.target.checked);
          onToggle(e.target.checked);
        }}
      />
      Live stream
    </label>
  );
}
