import { type Locator, type Page } from '@playwright/test';
import { PageTexts } from '../constants/urls.js';

export class Header {
  private readonly servicesMenu: Locator;
  private readonly clientWorkLink: Locator;
  private readonly partnersLink: Locator;

  constructor(private readonly page: Page) {
    this.servicesMenu = this.page.getByRole('link', { name: PageTexts.servicesMenu });
    this.clientWorkLink = this.page.getByRole('link', {
      name: PageTexts.clientWorkLink,
    });
    this.partnersLink = this.page.getByRole('link', {
      name: PageTexts.partnersLink,
    });
  }

  async openServicesMenu(): Promise<void> {
    await this.servicesMenu.hover();
  }

  async navigateToClientWork(): Promise<void> {
    await this.clientWorkLink.click();
  }

  async navigateToPartners(): Promise<void> {
    await this.partnersLink.click();
  }
}
