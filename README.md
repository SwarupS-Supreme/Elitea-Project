# Elitea-Project
This project is to test Elitea Integration with GitHub.

## Reference Source
- **Confluence Page:** Getting started in Confluence
- **Page ID:** 131168
- **URL:** https://agenticautomation.atlassian.net/wiki/rest/api/content/131168

## Architectural Note
This repository will be used to capture SDET-ready artifacts and validation notes derived from the source documentation. The linked Confluence page highlights introductory guidance around Confluence pages, including page header images and making page titles more memorable.

## Playwright Coverage
- Navigate to https://www.epam.com/
- Open the **Services** menu from the header
- Click **Explore Our Client Work**
- Verify **Client Work** is visible on the destination page

## Run
```bash
npm install
npx playwright install
npm run test:e2e
```
