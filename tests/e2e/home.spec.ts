import {expect, test} from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("home exposes its main heading and navigates to the journal", async ({page}) => {
    await page.goto("/");
    await expect(page.getByRole("main").getByRole("heading", {level: 1})).toHaveText("No manual. Still, meaning.");
    await page.getByRole("link", {name: "Browse all writing"}).click();
    await expect(page).toHaveURL(/\/posts$/);
    await expect(page.getByRole("heading", {level: 1})).toHaveText("The journal");
});

for (const colorScheme of ["light", "dark"] as const) {
    test(`home has no automatically detected WCAG A/AA violations in ${colorScheme} theme`, async ({page}) => {
        await page.emulateMedia({colorScheme});
        await page.goto("/");
        await expect(page.locator("html")).toHaveClass(new RegExp(`(?:^| )${colorScheme}(?: |$)`));
        const results = await new AxeBuilder({page})
            .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
            .analyze();
        expect(results.violations).toEqual([]);
    });
}
