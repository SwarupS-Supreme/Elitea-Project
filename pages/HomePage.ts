import { type Page } from '@playwright/test';
import { AppUrls } from '../constants/urls.js';
import { Header } from '../components/Header.js';

export class HomePage {
  readonly header: Header;

  constructor(private readonly page: Page) {
    this.header = new Header(this.page);
  }

  async goto(): Promise<void> {
    await this.page.goto(AppUrls.home);
  }
}
