const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: [['list']],
  use: {
    baseURL: 'http://127.0.0.1:4173',
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'python3 -m http.server 4173 --directory compliance-grid --bind 127.0.0.1',
    port: 4173,
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 7'] },
    },
    {
      name: 'mobile-safari-viewport',
      // Real WebKit isn't available on this OS (macOS 12); approximate an iPhone
      // viewport/UA under Chromium instead of the unsupported webkit engine.
      use: {
        ...devices['iPhone 13'],
        defaultBrowserType: undefined,
        browserName: 'chromium',
      },
    },
    {
      name: 'desktop-chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
