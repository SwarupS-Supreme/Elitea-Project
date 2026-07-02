import { expect, test } from '@playwright/test';
import { NavigationTestData } from '../fixtures/testData.js';
import { HomePage } from '../pages/HomePage.js';

test('navigate from Services menu to Client Work page', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await homePage.header.openServicesMenu();
  await homePage.header.selectExploreOurClientWork();

  await expect(page.getByRole('heading', { name: NavigationTestData.clientWorkHeading })).toBeVisible();
});
