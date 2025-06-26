"use client";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/Dialog";
import GenerateReportForm from "./action-forms/GenerateReportForm";
import InviteForm from "./action-forms/InviteForm";
import BudgetForm from "./action-forms/BudgetForm";

const actions = [
  { label: "Generate report", Form: GenerateReportForm },
  { label: "Invite teammate", Form: InviteForm },
  { label: "Create budget", Form: BudgetForm },
];

export function QuickActions() {
  return (
    <div className="flex gap-2">
      {actions.map(({ label, Form }) => (
        <Dialog key={label}>
          <DialogTrigger className="btn btn-sm">{label}</DialogTrigger>
          <DialogContent className="max-w-lg">
            <Form />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
export default QuickActions;
