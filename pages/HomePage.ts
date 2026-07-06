import type { Page } from '@playwright/test';
import { BASE_URL } from '../constants/urls.js';
import { Header } from '../components/Header.js';

export class HomePage {
  readonly header: Header;

  constructor(private readonly page: Page) {
    this.header = new Header(page);
  }

  async open(): Promise<void> {
    await this.page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
  }

  async navigateToClientWork(): Promise<void> {
    await this.header.openServicesMenu();
    await this.header.clickClientWork();
  }

  async navigateToPartners(): Promise<void> {
    await this.header.openServicesMenu();
    await this.header.clickPartners();
  }
}
