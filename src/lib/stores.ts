import { create } from "zustand";

type OrgStore = {
  orgId?: string;
  setOrgId: (id: string) => void;
};

export const useOrgStore = create<OrgStore>((set) => ({
  orgId: undefined,
  setOrgId: (id) => set({ orgId: id }),
}));
