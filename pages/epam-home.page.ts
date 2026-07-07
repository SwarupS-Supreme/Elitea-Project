import { expect, Locator, Page } from '@playwright/test';

export class EpamHomePage {
  readonly page: Page;
  readonly servicesMenu: Locator;
  readonly clientWorkLink: Locator;
  readonly partnersLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.servicesMenu = page.getByRole('link', { name: /services/i }).first();
    this.clientWorkLink = page.getByRole('link', { name: /client work/i }).first();
    this.partnersLink = page.getByRole('link', { name: /^partners$/i }).first();
  }

  async open() {
    await this.page.goto('/');
    await expect(this.page).toHaveURL(/epam\.com/);
  }

  async openServicesMenu() {
    await expect(this.servicesMenu).toBeVisible();
    await this.servicesMenu.hover();
  }

  async clickClientWork() {
    await expect(this.clientWorkLink).toBeVisible();
    await this.clientWorkLink.click();
  }

  async clickPartners() {
    await expect(this.partnersLink).toBeVisible();
    await this.partnersLink.click();
  }

  async verifyVisibleText(text: string) {
    await expect(this.page.getByText(text, { exact: false })).toBeVisible();
  }
}