import { Locator, Page } from '@playwright/test';

export class Header {
  private readonly page: Page;
  private readonly servicesMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.servicesMenu = page.getByRole('link', { name: 'Services' });
  }

  async openServicesMenu(): Promise<void> {
    await this.servicesMenu.hover();
  }

  async openServicesLink(linkName: string): Promise<void> {
    await this.openServicesMenu();
    await this.page.getByRole('link', { name: linkName }).click();
  }
}
