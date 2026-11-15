// @ts-check
import { defineConfig, devices } from "@playwright/test";
require("dotenv").config();
/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = {
  testDir: "./tests",
  timeout: 40 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: "html",
  use: {
    baseURL: "https://eventhub.rahulshettyacademy.com",
    browserName: "chromium",
    headless: false,
  },
};
module.exports = config;
