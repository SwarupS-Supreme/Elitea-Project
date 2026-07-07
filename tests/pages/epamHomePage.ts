import { expect, type Locator, type Page } from '@playwright/test';

export class EpamHomePage {
  readonly page: Page;
  readonly servicesMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.servicesMenu = page.getByRole('button', { name: 'Services' });
  }

  async open() {
    await this.page.goto('/');
    await expect(this.page).toHaveURL(/epam\.com/);
  }

  async openServicesMenu() {
    await this.servicesMenu.hover();
  }

  async openClientWork() {
    await this.page.getByRole('link', { name: 'Client Work' }).click();
  }

  async openPartners() {
    await this.page.getByRole('link', { name: 'Partners' }).click();
  }
}
