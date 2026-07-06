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
npm run test
```

## Troubleshooting

### Error: `browserBackend.callTool: Unknown engine "ref" while parsing selector ref=f10e38`

This error typically means the selector was passed in an invalid format and the browser automation layer attempted to parse `ref=` as a selector engine.

#### Recommended fix
- Use a valid Playwright locator strategy such as `getByRole`, `getByText`, `locator("css-selector")`, or `locator("xpath=...")`
- Avoid passing raw `ref=...` values into selector APIs
- Re-check any helper or page object that dynamically builds selectors

#### SDET validation note
When this error appears in automation runs, verify that:
- The locator is semantic and stable
- The page object does not concatenate non-selector metadata into the locator string
- The test uses the intended browser automation API and not a backend reference token as a selector
