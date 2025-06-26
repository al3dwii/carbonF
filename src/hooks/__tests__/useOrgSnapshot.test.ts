import { renderHook } from "@testing-library/react";
import { useOrgSnapshot } from "../useOrgSnapshot";
import { server, rest } from "@/test/msw";

test("returns snapshot values", async () => {
  server.use(rest.get("/api/proxy/org/1/snapshot",
    (_,_res,ctx) => ctx.json({ ytd_co2_t: 12 })));
  const { result, waitFor } = renderHook(() => useOrgSnapshot("1", false));
  await waitFor(() => expect(result.current).toBeDefined());
  expect(result.current!.ytd_co2_t).toBe(12);
});
