import { expect, Locator, Page } from '@playwright/test';

export class EpamHomePage {
  readonly page: Page;
  readonly servicesMenu: Locator;
  readonly clientWorkLink: Locator;
  readonly clientWorkHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.servicesMenu = page.getByRole('link', { name: /^Services$/i });
    this.clientWorkLink = page.getByRole('link', { name: /Explore Our Client Work/i });
    this.clientWorkHeading = page.getByText(/Client Work/i, { exact: false });
  }

  async open(): Promise<void> {
    await this.page.goto('/');
  }

  async openClientWorkFromServices(): Promise<void> {
    await expect(this.servicesMenu).toBeVisible();
    await this.servicesMenu.hover();
    await expect(this.clientWorkLink).toBeVisible();
    await this.clientWorkLink.click();
  }

  async verifyClientWorkVisible(): Promise<void> {
    await expect(this.clientWorkHeading).toBeVisible();
  }
}
