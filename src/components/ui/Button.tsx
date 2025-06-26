"use client";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

export type ButtonVariant = "default" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, ...props }, ref
) {
  return (
    <button
      ref={ref}
      className={cn("bg-green-600 hover:bg-green-500 text-white px-3 py-1 rounded", className)}
      {...props}
    />
  );
});

export default Button;
