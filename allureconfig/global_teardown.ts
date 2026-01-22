import { execSync } from "child_process";

export default async function globalTeardown() {
  console.log("────────────────────────────────────────────");
  console.log("📊 Allure Global Teardown Started");
  console.log("Time:", new Date().toLocaleString());
  console.log("────────────────────────────────────────────");

  try {
    console.log("🔍 Environment details:");
    console.log("CI =", process.env.CI);
    console.log("PLAYWRIGHT_TEST_RUNNER =", process.env.PLAYWRIGHT_TEST_RUNNER);
    console.log("");

    console.log("🛠 Step 1: Generating Allure report...");
    execSync("npx allure generate ./allure-results -o allure-report", {
      stdio: "inherit"
    });
    console.log("✅ Allure report generation completed.");

    // Avoid opening browser in CI / VSCode Test Explorer watcher mode
    if (process.env.CI || process.env.PLAYWRIGHT_TEST_RUNNER) {
      console.log("🚫 Skipping Allure UI launch (CI / VS Code runner detected).");
      console.log("📂 Allure report is available in: allure-report/");
      return;
    }

    console.log("🌐 Step 2: Opening Allure report in browser...");
    execSync("npx allure open ./allure-report", {
      stdio: "inherit"
    });

    console.log("✅ Allure report opened successfully.");
  } catch (error) {
    console.error("❌ Allure report generation or opening failed.");
    console.error(error);
  }

  console.log("────────────────────────────────────────────");
  console.log("📊 Allure Global Teardown Finished");
  console.log("────────────────────────────────────────────");
}
