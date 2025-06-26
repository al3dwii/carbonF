"use client";
import { useEffect, useState } from "react";

export function Combobox({
  fetchPath,
  value,
  onChange,
  placeholder,
}: {
  fetchPath: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  const [options, setOptions] = useState<{ id: string; name: string }[]>([]);
  useEffect(() => {
    fetch(fetchPath)
      .then((r) => r.json())
      .then(setOptions)
      .catch(() => setOptions([]));
  }, [fetchPath]);
  return (
    <select
      className="border rounded px-2 py-1 text-sm"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o.id} value={o.id}>
          {o.name}
        </option>
      ))}
    </select>
  );
}

export default Combobox;
