import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: "r1", period: "FY2026", link: "#" }
  ]);
}
