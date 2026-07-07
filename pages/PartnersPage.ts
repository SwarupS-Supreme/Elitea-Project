import { type Locator, type Page, expect } from '@playwright/test';
import { TEST_DATA } from '../fixtures/testData.js';

export class PartnersPage {
  readonly heading: Locator;

  constructor(private readonly page: Page) {
    this.heading = this.page.getByRole('heading', {
      name: TEST_DATA.partnersPage.headingName,
      exact: true,
    });
  }

  async expectHeadingVisible(): Promise<void> {
    await expect(this.heading).toBeVisible();
  }
}
