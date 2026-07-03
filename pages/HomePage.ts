import { type Page } from '@playwright/test';
import { AppUrls } from '../constants/urls.js';
import { Header } from '../components/Header.js';

export class HomePage {
  private readonly header: Header;

  constructor(private readonly page: Page) {
    this.header = new Header(page);
  }

  async open(): Promise<void> {
    await this.page.goto(AppUrls.epamHome, { waitUntil: 'domcontentloaded' });
  }

  async openServicesMenu(): Promise<void> {
    await this.header.openServicesMenu();
  }

  async navigateToClientWork(): Promise<void> {
    await this.header.navigateToClientWork();
  }
}
