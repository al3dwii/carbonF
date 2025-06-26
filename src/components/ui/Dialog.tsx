"use client";
import { Dialog as UIDialog } from "@headlessui/react";
import { useState, createContext, useContext, ReactNode } from "react";
import { cn } from "./cn";

const Ctx = createContext<{ open: boolean; setOpen: (v: boolean) => void } | null>(null);

export function Dialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <Ctx.Provider value={{ open, setOpen }}>{children}</Ctx.Provider>;
}

export function DialogTrigger({ children, className }: { children: ReactNode; className?: string }) {
  const ctx = useContext(Ctx)!;
  return (
    <button className={className} onClick={() => ctx.setOpen(true)}>
      {children}
    </button>
  );
}

export function DialogContent({ children, className }: { children: ReactNode; className?: string }) {
  const ctx = useContext(Ctx)!;
  return (
    <UIDialog open={ctx.open} onClose={() => ctx.setOpen(false)} className="fixed inset-0 grid place-items-center bg-black/40">
      <UIDialog.Panel className={cn("bg-white p-6 rounded", className)}>{children}</UIDialog.Panel>
    </UIDialog>
  );
}
