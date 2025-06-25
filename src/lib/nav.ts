export type NavItem = { href: string; label: string; icon: string; flag?: string };

export const NAV_BY_ROLE: Record<string, NavItem[]> = {
  developer: [
    { href: "/dashboard", label: "Dashboard", icon: "📊" },
    { href: "/plugins", label: "Plugins", icon: "🔌" },
    { href: "/projects", label: "Projects", icon: "🗂" },
    { href: "/router", label: "Router", icon: "🗺", flag: "router" },
    { href: "/pulse", label: "Pulse", icon: "💓", flag: "pulse" },
    { href: "/ledger", label: "Ledger", icon: "📜" },
    { href: "/scheduler", label: "Scheduler", icon: "⏱", flag: "scheduler" },
    { href: "/iac-advisor", label: "IaC Advisor", icon: "🛠", flag: "iac-advisor" },
    { href: "/greendev", label: "GreenDev Bot", icon: "🤖", flag: "greendev" }
  ],
  finops: [
    { href: "/dashboard", label: "Dashboard", icon: "📊" },
    { href: "/ledger", label: "Ledger", icon: "📜" },
    { href: "/budget", label: "Budget", icon: "💶", flag: "budget" },
    { href: "/offsets", label: "Offsets", icon: "🌿" },
    { href: "/alerts", label: "Alerts", icon: "🚨" }
  ],
  sustainability: [
    { href: "/dashboard", label: "Dashboard", icon: "📊" },
    { href: "/ledger", label: "Ledger", icon: "📜" },
    { href: "/reports", label: "Reports", icon: "📄" },
    { href: "/ecolabel", label: "EcoLabel", icon: "🏷" },
    { href: "/offsets", label: "Offsets", icon: "🌳" },
    { href: "/comply", label: "Comply", icon: "📄", flag: "comply" }
  ],
  admin: [{ href: "/settings", label: "Settings", icon: "⚙️" }]
} as const;

export type Role = keyof typeof NAV_BY_ROLE;
