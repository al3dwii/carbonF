"use client";
import { Dialog, DialogTrigger, DialogContent } from "@radix-ui/react-dialog";
import BudgetForm from "./BudgetForm.client";
import InviteForm from "./InviteForm.client";
import ComplianceReportForm from "./ComplianceReportForm.client";

export default function QuickActions({ orgId }: { orgId: string }) {
  return (
    <Dialog>
      <DialogTrigger className="btn-secondary">Create budget</DialogTrigger>
      <DialogContent><BudgetForm orgId={orgId}/></DialogContent>
    </Dialog>
  );
}
