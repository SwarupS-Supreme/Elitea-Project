import type { Page } from '@playwright/test';

export class Header {
  constructor(private readonly page: Page) {}

  async openServicesMenu(): Promise<void> {
    await this.page.getByRole('link', { name: 'Services' }).hover();
  }

  async clickClientWork(): Promise<void> {
    await this.page.getByRole('link', { name: 'Client Work' }).click();
  }

  async clickPartners(): Promise<void> {
    await this.page.getByRole('link', { name: 'Partners' }).click();
  }
}
