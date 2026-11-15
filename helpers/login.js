import { test, expect } from "@playwright/test";
export async function login(page) {
  await page.goto("/");
  // await page.goto("https://eventhub.rahulshettyacademy.com/login");
  await page.getByPlaceholder("you@email.com").fill(process.env.EMAIL);
  await page.getByPlaceholder("••••••").fill(process.env.PASSWORD);
  await page.locator("#login-btn").click();

}
