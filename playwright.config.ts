import { defineConfig } from '@playwright/test';
import { AppUrls } from './constants/urls';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: [['list'], ['html']],
  use: {
    baseURL: AppUrls.home,
    trace: 'on-first-retry',
  },
});
