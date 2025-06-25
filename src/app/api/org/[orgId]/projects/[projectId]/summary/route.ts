import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: { projectId: string } }
) {
  return NextResponse.json({ id: params.projectId, name: "GreenShop" });
}
