import {
  LayoutDashboard, Tangent as BezierCurve, ActivitySquare, FileText,
  Plug, Layers, AlertTriangle, BarChart,
  Clock, Wrench, Bot, Wallet, Leaf, Tag, Settings,
} from "lucide-react";

export const Icons = {
  dashboard: LayoutDashboard,
  router: BezierCurve,
  pulse: ActivitySquare,
  ledger: FileText,
  plug: Plug,
  stack: Layers,
  alert: AlertTriangle,
  report: BarChart,
  scheduler: Clock,
  advisor: Wrench,
  bot: Bot,
  budget: Wallet,
  offsets: Leaf,
  ecolabel: Tag,
  settings: Settings,
};

export type IconName = keyof typeof Icons;
