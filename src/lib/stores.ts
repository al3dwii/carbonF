import { create } from "zustand";

type OrgStore = {
  orgId?: string;
  setOrg: (id: string) => void;
};

export const useOrgStore = create<OrgStore>((set) => ({
  orgId: undefined,
  setOrg: (id) => set({ orgId: id }),
}));
