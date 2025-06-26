import { test, expect } from "@playwright/test";

test("org dashboard shows KPI cards", async ({ page }) => {
  await page.goto("/org/1");
  await expect(page.locator("text=Total savings")).toBeVisible();
});
