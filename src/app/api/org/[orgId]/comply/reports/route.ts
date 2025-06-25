import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { orgId: string } }
) {
  const { period, fmt } = await req.json();
  /* call real service here */
  return NextResponse.json(
    { id: `r-${Date.now()}`, period, fmt, created: Date.now() },
    { status: 201 }
  );
}

