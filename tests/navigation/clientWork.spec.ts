import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage.js';

test.describe('EPAM Services menu navigation', () => {
  test('TC_1 - Services → Client Work → verify Client Work', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();
    const clientWorkPage = await homePage.navigateToClientWork();
    await clientWorkPage.expectHeadingVisible();
  });
});
