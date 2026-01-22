import fs from "fs";

export default async function globalSetup() {
  console.log("────────────────────────────────────────────");
  console.log("🧹 Allure Global Setup Started");
  console.log("Time:", new Date().toLocaleString());
  console.log("────────────────────────────────────────────");

  try {
    console.log("🔍 Checking for existing Allure folders...");

    if (fs.existsSync("allure-results")) {
      console.log("🗑 Deleting existing allure-results folder...");
      fs.rmSync("allure-results", { recursive: true, force: true });
      console.log("✅ allure-results removed.");
    } else {
      console.log("ℹ️ No existing allure-results folder found.");
    }

    if (fs.existsSync("allure-report")) {
      console.log("🗑 Deleting existing allure-report folder...");
      fs.rmSync("allure-report", { recursive: true, force: true });
      console.log("✅ allure-report removed.");
    } else {
      console.log("ℹ️ No existing allure-report folder found.");
    }

  } catch (error) {
    console.error("❌ Error while cleaning Allure folders.");
    console.error(error);
  }

  console.log("────────────────────────────────────────────");
  console.log("🧹 Allure Global Setup Finished");
  console.log("────────────────────────────────────────────");
}
