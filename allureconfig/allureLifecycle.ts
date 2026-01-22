import fs from "fs";
import { execSync } from "child_process";
import { test } from "@playwright/test";

let initialized = false;

/**
 * Runs once per Playwright worker
 */
test.beforeAll(() => {
  if (initialized) return;

  initialized = true;

  console.log("🧹 [Allure] Cleaning old folders (VS Code & CLI)");

  if (fs.existsSync("allure-results")) {
    fs.rmSync("allure-results", { recursive: true, force: true });
  }

  if (fs.existsSync("allure-report")) {
    fs.rmSync("allure-report", { recursive: true, force: true });
  }
});

/**
 * Runs when this worker finishes its last test
 */
test.afterAll(() => {
  console.log("📊 [Allure] Generating report (VS Code & CLI)");

  execSync("npx allure generate ./allure-results -o allure-report --clean", {
    stdio: "inherit"
  });

  if (!process.env.CI) {
    execSync("npx allure open ./allure-report", { stdio: "inherit" });
  }
});
