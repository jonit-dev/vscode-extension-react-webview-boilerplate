import { expect, test } from "@playwright/test";

test.describe("Button Component Tests", () => {
  test("button should be visible and clickable", async ({ page }) => {
    // Start a local server to serve our demo page
    await page.goto("http://localhost:3000");

    // Wait for the button demo section to be visible
    await page.waitForSelector("vscode-button");

    // Get all buttons
    const buttons = await page.locator("vscode-button");

    // Verify we have buttons rendered
    expect(await buttons.count()).toBeGreaterThan(0);

    // Click the first button
    const firstButton = buttons.first();
    await firstButton.click();

    // Verify button is interactive (has proper attributes)
    const buttonAttributes = await firstButton.evaluate(el => {
      return {
        disabled: el.hasAttribute("disabled"),
        appearance: el.getAttribute("appearance"),
      };
    });

    expect(buttonAttributes.disabled).toBeFalsy();
    expect(buttonAttributes.appearance).toBeDefined();
  });
});
