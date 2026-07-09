import { expect, Locator, Page } from '@playwright/test';

export class EpamHomePage {
  readonly page: Page;
  readonly servicesMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.servicesMenu = page.getByRole('link', { name: 'Services' });
  }

  async open() {
    await this.page.goto('/');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async openServicesMenu() {
    await this.servicesMenu.hover();
  }

  async openClientWork() {
    await this.openServicesMenu();
    await this.page.getByRole('link', { name: 'Client Work' }).click();
  }

  async openPartners() {
    await this.openServicesMenu();
    await this.page.getByRole('link', { name: 'Partners' }).click();
  }

  async expectTextVisible(text: string) {
    await expect(this.page.getByText(text, { exact: true })).toBeVisible();
  }
}