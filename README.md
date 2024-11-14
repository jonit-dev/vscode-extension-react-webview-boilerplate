# VSCode Extension React Webview Template

A template for building VSCode extensions with React webviews that optimizes the development experience by enabling rapid UI development in the browser.

## � Key Features

- **Fast Development Cycle**: Develop and debug your React UI in the browser with hot reload
- **Unified Build System**: Single esbuild configuration for both extension and webview
- **Clean Architecture**: Standardized directory structure and build outputs
- **TypeScript Support**: Full TypeScript support for both extension and React code
- **E2E Testing**: End-to-end testing with Playwright

## 🎯 Purpose

Building VSCode extensions with webviews can be slow due to the need to constantly rebuild and reload the extension to see UI changes. This template solves that by:

1. Allowing you to develop the React UI in a browser with hot reload
2. Maintaining the same build output structure for both development and production
3. Providing a seamless transition between browser development and VSCode testing

## 🛠 Installation

```bash
yarn install
```

## 🏃‍♂️ Development Workflow

### 1. Browser Development (Fast UI Development = Hot Reload!)

```bash
yarn dev
```

This will:

- Start a development server at http://localhost:3000
- Enable hot reload for React components
- Serve the webview content from the unified `dist` directory
- Perfect for rapid UI development and iterations

Make changes to your React components in `src/webview` and see them instantly in the browser!

### 2. VSCode Extension Testing

Press `F5` in VSCode to:

- Clean the dist directory
- Build both extension and webview
- Launch a new VSCode instance with your extension

Use this to test the full integration of your UI with the extension.

### 3. End-to-End Testing

```bash
yarn test:e2e
```

This will:
- Start the development server automatically
- Run Playwright tests against your components
- Generate a test report


### 4. Unit-Testing

You can run unit tests with the following command:

```bash
yarn test
```

### Development Tips

1. **Browser Development (Main Development Flow)**

   - Run `yarn dev`
   - Open http://localhost:3000 in your browser
   - Edit React components in `src/webview`
   - See changes instantly in browser
   - Use browser dev tools for debugging
   - Perfect for rapid UI development

2. **VSCode Testing (Integration Testing)**
   - Press F5 in VSCode
   - Test extension features
   - Verify UI integration
   - Debug extension logic
   - Note: Changes require extension reload

3. **E2E Testing**
   - Write tests in `src/playwright`
   - Run `yarn test:e2e` to execute tests
   - Check test reports in `playwright-report`

## 📁 Project Structure

```
.
├── src/
│   ├── extension.ts        # VSCode extension entry point
│   ├── playwright/        # E2E test files
│   └── webview/
│       ├── App.tsx        # React application
│       ├── main.tsx       # React entry point
│       └── index.html     # Webview HTML template
├── dist/                  # Build output directory
│   ├── extension.js       # Built extension
│   ├── webview.js        # Built React application
│   └── index.html        # Copied webview template
└── package.json          # Project configuration
```

## 🛠 Available Scripts

- `yarn dev`: Start development server for browser-based UI development
- `yarn build`: Build extension and webview for testing
- `yarn clean`: Clean build outputs
- `yarn compile`: Full build with type checking and linting
- `yarn package`: Build for production deployment
- `yarn test:e2e`: Run Playwright end-to-end tests

## 💡 Best Practices

1. **Development Flow**

   - Use browser development for UI work
   - Test in VSCode when integrating with extension features
   - Keep the webview logic separate from VSCode-specific code

2. **Code Organization**

   - Keep React components in `src/webview`
   - Place VSCode extension logic in `src/extension.ts`
   - Use TypeScript for better type safety
   - Keep E2E tests in `src/playwright`

3. **Testing**
   - Test UI components in the browser first
   - Use VSCode's debugger for extension logic
   - Write E2E tests for critical user flows
   - Final testing should be done in VSCode

## 🔍 Debugging

- Browser: Use your browser's dev tools while running `yarn dev`
- VSCode Extension: Use VSCode's built-in debugger (F5)
- React Components: React Dev Tools work in browser development
- E2E Tests: Use Playwright's built-in debugging tools

## 🚧 Troubleshooting

1. **Hot Reload Not Working**

   - Ensure you're running `yarn dev`
   - Check browser console for errors
   - Verify you're using http://localhost:3000

2. **VSCode Extension Not Updating**

   - Press F5 to rebuild and reload
   - Check VSCode's Developer Tools for errors
   - Ensure dist directory is clean (`yarn clean`)

3. **Build Issues**

   - Run `yarn clean` to remove old builds
   - Check TypeScript errors with `yarn check-types`
   - Verify esbuild configuration in `esbuild.js`

4. **E2E Test Issues**
   - Check if dev server is running on port 3000
   - Verify Playwright configuration in `playwright.config.ts`
   - Run tests with `--debug` flag for detailed logs

## 📦 Building for Production

1. Build the extension:

```bash
yarn build
```

2. Test the production build:

- Press F5 in VSCode to launch with production build
- Verify all features work as expected
- Run E2E tests against the production build

3. Package for distribution:

```bash
yarn package
```

## Limitations

- **No VSCode Extension Host Hot Reload**: Changes to the extension code require another build. That's why I recommend using the browser development flow for UI work and only testing in VSCode when integrating with extension features. This is a VSCode extension dev limitation (Nov 2024).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT
