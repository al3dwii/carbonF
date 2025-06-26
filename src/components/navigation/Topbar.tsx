"use client";

import { useOrgStore } from "@/lib/stores";
import { OrgSwitcher } from "@/components/org/OrgSwitcher";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/Dialog";
import QuickActions from "@/components/dashboard/QuickActions";
import AvatarMenu from "@/components/navigation/AvatarMenu";

export default function Topbar() {
  const { orgId } = useOrgStore();

  return (
    <header className="flex items-center justify-between bg-white p-4 shadow">
      <OrgSwitcher currentId={orgId!} />
      <div className="flex items-center gap-4">
        <Dialog>
          <DialogTrigger className="btn">Create…</DialogTrigger>
          <DialogContent className="max-w-lg">
            <QuickActions />
          </DialogContent>
        </Dialog>
        <AvatarMenu />
      </div>
    </header>
  );
}
