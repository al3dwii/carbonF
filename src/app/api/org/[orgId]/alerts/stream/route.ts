import { NextResponse } from "next/server";
import { PassThrough } from "stream";

export async function GET(
  _req: Request,
  { params }: { params: { orgId: string } }
) {
  const stream = new PassThrough();
  const encoder = new TextEncoder();

  // dummy event every 3 s
  const interval = setInterval(() => {
    const event = {
      id: Date.now(),
      time: Date.now(),
      source: "scheduler",
      msg: "Job moved to green slot",
      status: "open",
    };
    stream.write(encoder.encode(`data: ${JSON.stringify(event)}\n\n`));
  }, 3000);

  _req.signal.addEventListener("abort", () => clearInterval(interval));

  return new NextResponse(stream as any, {
    headers: {
      "Content-Type": "text/event-stream",
      Connection: "keep-alive",
      "Cache-Control": "no-cache",
    },
  });
}

