/**
 * Simple Tailwind/utility-class joiner.
 * Usage: cn("px-4", condition && "bg-emerald-600")
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
