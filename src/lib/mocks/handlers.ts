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

  // Router policy
  rest.get("/api/org/:orgId/router", (_, res, ctx) =>
    res(ctx.json({ weight: 0.5 }))
  ),

  // Vendors
  rest.get("/api/org/:orgId/vendors", (_, res, ctx) =>
    res(ctx.json([]))
  ),

  // Jobs / scheduler
  rest.get("/api/org/:orgId/jobs", (_, res, ctx) =>
    res(ctx.json([]))
  ),

  // Ledger summary
  rest.get("/api/org/:orgId/ledger", (_, res, ctx) =>
    res(ctx.json([]))
  ),

  // Org snapshot
  rest.get("/api/org/:orgId/snapshot", (_, res, ctx) =>
    res(
      ctx.json({
        total: 12000,
        totalTrend: Array.from({ length: 30 }, () => Math.random() * 100),
        co2: 42,
        co2Trend: Array.from({ length: 30 }, () => Math.random()),
        topProject: { name: "GreenShop", trend: [1,2,3,4,5] },
      })
    )
  ),

  // Balance trend
  rest.get("/api/org/:orgId/balance/trend", (_, res, ctx) =>
    res(
      ctx.json(
        Array.from({ length: 10 }, (_, i) => ({ day: `d${i}`, balance: i * 1000 }))
      )
    )
  ),

  rest.get("/api/org/:id/router/logs/stream", (_req, res, ctx) =>
    ctx.eventStream((send) =>
      setInterval(() => send({ data: JSON.stringify({ ts: Date.now(), msg: "fake log"}) }), 3000),
    ),
  ),
  rest.get("/api/org/:id/balance-trend", (_req, res, ctx) =>
    res(
      ctx.json(Array.from({ length: 30 }, (_, i) => ({
        day: i, balance: 10_000 + Math.random() * 5_000,
      })))
    ),
  ),

];
