import { create } from "zustand";

type Filters = {
  project?: string;
  plugin?: string;
  sku?: string;
  type?: "emission" | "saving" | "offset";
};
export const useLedgerFilters = create<{
  filters: Filters;
  set: (f: Partial<Filters>) => void;
}>(set => ({
  filters: {},
  set: f => set(s => ({ filters: { ...s.filters, ...f } }))
}));
