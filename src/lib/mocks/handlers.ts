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
