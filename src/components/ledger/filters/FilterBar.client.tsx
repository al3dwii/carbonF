"use client";
import { Combobox } from "@/components/ui/Combobox";
import { useLedgerFilters } from "./store";

export default function FilterBar() {
  const { filters, set } = useLedgerFilters();
  return (
    <div className="flex gap-2">
      <Combobox placeholder="Project" onChange={v => set({ project: v })}/>
      <Combobox placeholder="Plugin"  onChange={v => set({ plugin: v })}/>
      <Combobox placeholder="SKU"     onChange={v => set({ sku: v })}/>
      <Combobox
        placeholder="Type"
        options={["emission","saving","offset"]}
        onChange={v => set({ type: v as any })}
      />
    </div>
  );
}
