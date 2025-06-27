import { CARBONCORE_URL } from "./env";
import fs from "fs/promises";
import path from "path";

export async function proxy(req: Request, upstream: string) {
  const url = `${CARBONCORE_URL}${upstream}`;
  const res = await fetch(url, { headers: { accept: "application/json" } });
  if (res.status === 404) {
    const fixturePath = path.join(process.cwd(), "src/fixtures", `${upstream}.json`);
    try {
      const data = await fs.readFile(fixturePath, "utf8");
      return new Response(data, { status: 200, headers: { "Content-Type": "application/json" } });
    } catch {
      // fallthrough
    }
  }
  return new Response(await res.text(), {
    status: res.status,
    headers: { "Content-Type": "application/json" }
  });
}

