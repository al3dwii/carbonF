import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    total: 18423,
    totalTrend: Array.from({ length: 30 }, () => Math.random() * 20000),
    co2: 32.4,
    co2Trend: Array.from({ length: 30 }, () => Math.random() * 40),
    topProject: {
      name: "frontend-refactor",
      trend: Array.from({ length: 30 }, () => Math.random() * 5000),
    },
  });
}
