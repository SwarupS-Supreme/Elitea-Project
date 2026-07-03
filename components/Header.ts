import { type Locator, type Page } from '@playwright/test';
import { PageTexts } from '../constants/urls.js';

export class Header {
  private readonly servicesMenu: Locator;
  private readonly exploreOurClientWorkLink: Locator;

  constructor(private readonly page: Page) {
    this.servicesMenu = this.page.getByRole('link', { name: PageTexts.servicesMenu });
    this.exploreOurClientWorkLink = this.page.getByRole('link', {
      name: PageTexts.exploreOurClientWork,
    });
  }

  async openServicesMenu(): Promise<void> {
    await this.servicesMenu.hover();
  }

  async navigateToClientWork(): Promise<void> {
    await this.exploreOurClientWorkLink.click();
  }
}
