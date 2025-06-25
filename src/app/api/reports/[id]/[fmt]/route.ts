import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET(
  _: Request,
  { params }: { params: { id: string; fmt: string } }
) {
  /* for demo always return the same dummy file */
  const file = await readFile(
    join(process.cwd(), "public/dummy-report." + params.fmt)
  );

  return new NextResponse(file, {
    headers: {
      "Content-Type":
        params.fmt === "pdf"
          ? "application/pdf"
          : params.fmt === "xbrl"
          ? "application/xml"
          : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": `attachment; filename=${params.id}.${params.fmt}`,
    },
  });
}

