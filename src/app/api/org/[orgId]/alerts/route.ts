import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      time: Date.now(),
      source: "budget",
      msg: "Forecast overshoot",
      status: "open",
    },
  ]);
}
