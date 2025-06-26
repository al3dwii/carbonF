import { test, expect } from "@playwright/test";

test("dashboard shows KPI cards & ledger filter", async ({ page }) => {
  await page.goto("/org/1/dashboard");
  await expect(page.locator("text=Total savings")).toBeVisible();
  await page.locator("text=Project").click();
  await page.locator("text=backend-api").click();
  await expect(page.url()).toContain("project=backend-api");
});

test("quick actions modal opens", async ({ page }) => {
  await page.goto("/org/1/dashboard");
  await page.getByText("Create budget").click();
  await expect(page.getByRole("button", { name: "Create" })).toBeVisible();
});
