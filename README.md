<!-- Badges -->
<p align="left">
  <a href="https://www.npmjs.com/package/ortoni-report" target="_blank">
    <img src="https://img.shields.io/npm/v/ortoni-report.svg?style=flat-square" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.com/package/@playwright/test" target="_blank">
    <img src="https://img.shields.io/npm/v/@playwright/test.svg?style=flat-square" alt="Playwright NPM Version" />
  </a>
  <a href="https://github.com/piy07/PlaywrightMCP" target="_blank">
    <img src="https://img.shields.io/github/stars/piy07/PlaywrightMCP?style=flat-square" alt="GitHub Stars" />
  </a>
  <a href="https://github.com/piy07/PlaywrightMCP/actions" target="_blank">
    <img src="https://github.com/piy07/PlaywrightMCP/actions/workflows/main.yml/badge.svg" alt="Build Status" />
  </a>
  <a href="https://github.com/piy07/PlaywrightMCP/issues" target="_blank">
    <img src="https://img.shields.io/github/issues/piy07/PlaywrightMCP?style=flat-square" alt="Issues" />
  </a>
  <a href="https://github.com/piy07/PlaywrightMCP/network/members" target="_blank">
    <img src="https://img.shields.io/github/forks/piy07/PlaywrightMCP?style=flat-square" alt="Forks" />
  </a>
  <img src="https://img.shields.io/github/license/piy07/PlaywrightMCP?style=flat-square" alt="License" />
  <img src="https://img.shields.io/github/last-commit/piy07/PlaywrightMCP?style=flat-square" alt="Last Commit" />
  <img src="https://img.shields.io/github/contributors/piy07/PlaywrightMCP?style=flat-square" alt="Contributors" />
  <!-- Uncomment below if you add code coverage integration -->
  <!-- <img src="https://img.shields.io/codecov/c/github/piy07/PlaywrightMCP?style=flat-square" alt="Coverage" /> -->
</p>

# PlaywrightMCP Framework

This is a Playwright-based end-to-end testing framework with Ortoni reporting integration.

## Features
- Cross-browser testing (Chromium, Firefox, WebKit)
- Parallel test execution
- Retry and worker configuration for CI
- HTML and Ortoni test reports
- Easy configuration and extension

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd PlaywrightMCP
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## GitHub Copilot Setup

To enable AI-powered code suggestions and completions:

1. Install the [GitHub Copilot extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) in Visual Studio Code.
2. Sign in with your GitHub account and ensure you have a Copilot subscription or access.
3. Enable Copilot for your workspace (check the status icon in the VS Code status bar).
4. Start coding—Copilot will provide suggestions automatically. You can accept, reject, or cycle through suggestions using Tab or arrow keys.
5. For more details, see the [Copilot documentation](https://docs.github.com/en/copilot).

## Playwright MCP Setup

This framework is ready to use with Playwright MCP. To configure and extend:

1. Ensure all dependencies are installed:
   ```sh
   npm install
   ```
2. Main configuration is in `playwright.config.js`:
   - Add/remove browsers in the `projects` array.
   - Customize reporters in the `reporter` array.
   - Set base URL and other options in the `use` block.
3. Add your tests in the `tests/` folder.
4. Add page objects or context in `testContext/`.
5. To run all tests and generate reports:
   ```sh
   npx playwright test
   ```
6. View reports:
   - HTML report: `playwright-report/index.html`
   - Ortoni report: `ortoni-report/`
7. For advanced Playwright MCP usage, refer to the [Playwright documentation](https://playwright.dev/docs/intro)

### Running Tests
To run all tests and generate reports:
```sh
npx playwright test
```

- HTML report: `playwright-report/index.html`
- Ortoni report: `ortoni-report/`

### Configuration
Main configuration is in `playwright.config.js`:
- Add/remove browsers in the `projects` array
- Customize reporters in the `reporter` array
- Set base URL and other options in the `use` block

### Folder Structure
```
PlaywrightMCP/
├── playwright.config.js      # Main Playwright configuration
├── package.json             # Project dependencies
├── tests/                   # Test specs
│   ├── shoppingCart.spec.js
│   └── api/
│       └── product.spec.js
├── testContext/             # Test context and page objects
│   └── ShoppingCartPage.js
├── playwright-report/       # HTML report output
├── ortoni-report/           # Ortoni report output
```

### Customization
- Add new tests in the `tests/` folder
- Add page objects or context in `testContext/`
- Update `playwright.config.js` for custom settings

### Troubleshooting
- Ensure all dependencies are installed (`npm install`)
- For issues with Ortoni reporting, check the `ortoni-report` folder for output
- For Playwright issues, refer to [Playwright documentation](https://playwright.dev/docs/intro)

## License
MIT

## Author
Piyush Verma
