import type { IconName } from "@/components/ui/Icons";

export type NavItem = {
  href: string;
  label: string;
  icon: IconName;          // ← NEW strict type
  flag?: string;
};

export const NAV_BY_ROLE: Record<string, NavItem[]> = {
  developer: [
    { href: "/dashboard", label: "Dashboard", icon: "dashboard" },
    { href: "/plugins", label: "Plugins", icon: "plug" },
    { href: "/projects", label: "Projects", icon: "stack" },
    { href: "/alerts", label: "Alerts", icon: "alert" },
    { href: "/router", label: "Router", icon: "router", flag: "router" },
    { href: "/pulse", label: "Pulse", icon: "pulse", flag: "pulse" },
    { href: "/ledger", label: "Ledger", icon: "ledger" },
    { href: "/scheduler", label: "Scheduler", icon: "scheduler", flag: "scheduler" },
    { href: "/iac-advisor", label: "IaC Advisor", icon: "advisor", flag: "iac-advisor" },
    { href: "/greendev", label: "GreenDev Bot", icon: "bot", flag: "greendev" },
    { href: "/comply", label: "Comply", icon: "report", flag: "comply" }
  ],
  finops: [
    { href: "/dashboard", label: "Dashboard", icon: "dashboard" },
    { href: "/ledger", label: "Ledger", icon: "ledger" },
    { href: "/budget", label: "Budget", icon: "budget", flag: "budget" },
    { href: "/offsets", label: "Offsets", icon: "offsets" },
    { href: "/alerts", label: "Alerts", icon: "alert" }
  ],
  sustainability: [
    { href: "/dashboard", label: "Dashboard", icon: "dashboard" },
    { href: "/ledger", label: "Ledger", icon: "ledger" },
    { href: "/reports", label: "Reports", icon: "report" },
    { href: "/ecolabel", label: "EcoLabel", icon: "ecolabel" },
    { href: "/offsets", label: "Offsets", icon: "offsets" },
    { href: "/comply", label: "Comply", icon: "report", flag: "comply" }
  ],
  admin: [{ href: "/settings", label: "Settings", icon: "settings" }]
} as const;

export type Role = keyof typeof NAV_BY_ROLE;
