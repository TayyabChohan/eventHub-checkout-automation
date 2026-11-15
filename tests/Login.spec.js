const { test, expect, request } = require("@playwright/test");
const baseUrl = process.env.URL;
const USER_EMAIL = process.env.USER_EMAIL;
const USER_PASSWORD = process.env.USER_PASSWORD;
test("Verify user can login successfully", async ({ page }) => {
  await page.goto(baseUrl);
  await page.locator("#email").fill(USER_EMAIL);
  await page.locator("#password").fill(USER_PASSWORD);
  await page.locator("#login-btn").click();
  // Verify successful login
  // Replace this with the actual dashboard URL or element
  await expect(page).not.toHaveURL(/login/);
  await page.pause();
});
