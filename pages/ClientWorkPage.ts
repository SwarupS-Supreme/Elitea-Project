import { expect, Page } from '@playwright/test';

export class ClientWorkPage {
  constructor(private readonly page: Page) {}

  async expectClientWorkVisible(): Promise<void> {
    await expect(this.page.getByText('Client Work', { exact: true })).toBeVisible();
  }

  async expectContactUsVisible(): Promise<void> {
    await expect(this.page.getByText('CONTACT US', { exact: true })).toBeVisible();
  }

  async expectPartnersVisible(): Promise<void> {
    await expect(this.page.getByText('Partners', { exact: true })).toBeVisible();
  }
}
