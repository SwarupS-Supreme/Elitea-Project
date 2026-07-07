import { expect, type Locator, type Page } from '@playwright/test';

export class EpamHomePage {
  readonly page: Page;
  readonly headerServices: Locator;
  readonly clientWorkLink: Locator;
  readonly partnersLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerServices = page.locator('header').getByText('Services', { exact: true }).first();
    this.clientWorkLink = page.getByRole('link', { name: 'Client Work' });
    this.partnersLink = page.getByRole('link', { name: 'Partners' });
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
    await expect(this.page).toHaveTitle(/EPAM/i);
  }

  async openServicesMenu(): Promise<void> {
    await expect(this.headerServices).toBeVisible();
    await this.headerServices.hover();
    await expect(this.clientWorkLink).toBeVisible();
    await expect(this.partnersLink).toBeVisible();
  }

  async openClientWork(): Promise<void> {
    await this.openServicesMenu();
    await this.clientWorkLink.click();
  }

  async openPartners(): Promise<void> {
    await this.openServicesMenu();
    await this.partnersLink.click();
  }
}
