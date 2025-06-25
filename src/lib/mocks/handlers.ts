import { rest } from "msw";

export const handlers = [
  /* existing … */

  // Projects
  rest.get("/api/org/:orgId/projects", (_, res, ctx) =>
    res(
      ctx.json([
        { id: "proj1", name: "GreenShop" },
        { id: "proj2", name: "EcoAPI" },
      ])
    )
  ),

  // Project ledger
  rest.get("/api/org/:orgId/projects/:projectId/ledger", (_, res, ctx) =>
    res(
      ctx.json([
        { id: 1, ts: Date.now(), plugin: "scheduler", desc: "Job moved", co2: -2.1 },
      ])
    )
  ),
  rest.get("/api/org/:orgId/projects/:projectId/ledger/stream", (_, res, ctx) =>
    res(
      ctx.delay(1000),
      ctx.json([
        { id: 2, ts: Date.now(), plugin: "router", desc: "Edge reroute", co2: -0.3 },
      ])
    )
  ),

  // Plugin toggles
  rest.get("/api/org/:orgId/projects/:projectId/plugins", (_, res, ctx) =>
    res(
      ctx.json([
        { slug: "iac-advisor", title: "IaC Advisor", enabled: true },
        { slug: "scheduler", title: "EcoShift Scheduler", enabled: false },
      ])
    )
  ),
  rest.post(
    "/api/org/:orgId/projects/:projectId/plugins/:slug",
    async (req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),

  // Team roster
  rest.get("/api/org/:orgId/projects/:projectId/team", (_, res, ctx) =>
    res(ctx.json([{ id: "u1", name: "Alice", role: "Developer" }]))
  ),
  rest.get("/api/org/:orgId/projects/:projectId/summary", (req, res, ctx) =>
    res(ctx.json({ id: req.params.projectId, name: "GreenShop" }))
  ),

  // Alerts
  rest.get("/api/org/:orgId/alerts", (_, res, ctx) =>
    res(
      ctx.json([
        {
          id: 1,
          time: Date.now(),
          source: "budget",
          msg: "Forecast overshoot",
          status: "open",
        },
      ])
    )
  ),

  // Reports
  rest.get("/api/org/:orgId/reports", (req, res, ctx) =>
    res(
      ctx.json([
        {
          id: "r1",
          period: "FY2026",
          link: "#",
          type: req.url.searchParams.get("type"),
        },
      ])
    )
  ),
];
