import { Dialog, DialogTrigger, DialogContent } from "@radix-ui/react-dialog";

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
