const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
require("dotenv").config();
const baseUrl = process.env.URL;

test("Verify user can navigate to Events page", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto(baseUrl);

  // Login first if Events requires authentication
  await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);

  // Click Events link
  await page.getByTestId("nav-events").click();

  // Verify Events page
  await expect(page).toHaveURL(/\/events$/);
});
