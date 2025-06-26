import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/Dialog";

export function EventDrawer({ event, children }: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <pre className="text-xs overflow-auto">
          {JSON.stringify(event, null, 2)}
        </pre>
      </DialogContent>
    </Dialog>
  );
}
