import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  private readonly page: Page;
  readonly servicesMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.servicesMenu = page.getByRole('link', { name: /^Services$/ });
  }

  async open(): Promise<void> {
    await this.page.goto('/');
    await expect(this.page).toHaveTitle(/EPAM/i);
  }

  async openServicesMenu(): Promise<void> {
    await this.servicesMenu.hover();
  }

  async clickClientWork(): Promise<void> {
    await this.page.getByRole('link', { name: 'Client Work' }).click();
  }

  async clickPartners(): Promise<void> {
    await this.page.getByRole('link', { name: 'Partners' }).click();
  }
}