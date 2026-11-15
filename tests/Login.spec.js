const { test, expect, request } = require("@playwright/test");
const baseUrl = process.env.URL;
test("login", async ({ page }) => {
  await page.goto(baseUrl);
});
