# Hanzo Studio React Extension Template

![react-example-demo](https://github.com/hanzoui/react-extension-template/blob/assets-branch/docs/demo.gif)

![demo pic](https://github.com/hanzoui/react-extension-template/blob/assets-branch/react-example-demo.png)

A minimal template for creating React/TypeScript frontend extensions for Hanzo Studio, with complete boilerplate setup.

📚 **[Hanzo Studio JavaScript Developer Documentation](https://docs.hanzo.ai/custom-nodes/js/javascript_overview)** - Learn how to use Hanzo Studio's powerful extension APIs.

## Features

- **React & TypeScript Integration**: Ready-to-use setup for creating modern UI components within Hanzo Studio
- **Internationalization Framework**: Built-in i18n support with English and Chinese examples
- **Hanzo Studio API Integration**: Properly typed access to Hanzo Studio's internal API
- **Full TypeScript Support**: Type-safe code using Hanzo Studio's official type definitions
- **Auto-Reload Development**: Watch mode for seamless development experience

## Installation

### From Hanzo Registry (Recommended)

The easiest way to install this extension is through the Hanzo Manager:

1. Open Hanzo Studio and go to the Manager
2. Search for "React Extension Template"
3. Click Install

### Manual Installation

If you want to install directly from GitHub for development purposes:

```bash
# Go to your Hanzo Studio custom_nodes directory
cd HanzoStudio/custom_nodes

# Clone the repository
git clone https://github.com/hanzoui/react-extension-template.git

# Build the React application
cd HanzoStudio-React-Extension-Template/ui
npm install
npm run build

# Restart Hanzo Studio
```

⚠️ **Important**: When installing manually from GitHub, you **must** run `npm run build` in the `ui/` directory before the extension will work. The extension requires the compiled React code in the `dist/` folder to function properly in Hanzo Studio.

## Usage

This template includes a simple example extension that displays workflow node statistics. After installation:

1. Look for the "React Example" tab in the Hanzo Studio sidebar
2. Click to open the example UI

When developing your own extension, you can:
1. Replace the example UI in App.tsx with your own components
2. Update the tab title and icon in main.tsx
3. Customize the extension's appearance and behavior

## Development

### Setup Development Environment

```bash
# Go to the UI directory
cd ui

# Install dependencies
npm install

# Start development mode (watches for changes)
npm run watch
```

### Available Hanzo Studio Extension APIs

This template provides access to Hanzo Studio's powerful JavaScript APIs through the official type definitions. You can use these APIs to build rich extensions:

- **Sidebar Tabs**: Create custom sidebar panels like this template demonstrates
- **Bottom Bar Panels**: Add panels to the bottom of the UI
- **Top Menu Items**: Add custom entries to the top menu
- **Context Menus**: Create custom context menus for the graph
- **Settings**: Add settings to the Hanzo Studio settings panel
- **Toasts**: Display notification messages
- **Commands**: Create and register custom commands
- **Hotkeys/Keybindings**: Register custom keyboard shortcuts
- **About Panel Badges**: Add badges to the about panel
- **App Events**: Listen to and respond to app events
- **Graph Manipulation**: Programmatically manipulate the workflow graph

For comprehensive documentation on all available APIs, see the [Hanzo Studio JavaScript Developer Documentation](https://docs.hanzo.ai/custom-nodes/js/javascript_overview).

### File Structure

```
HanzoStudio-React-Extension-Template/
├── .github/                    # GitHub configurations
│   └── workflows/
│       └── react-build.yml     # Automatic build and publishing workflow
├── __init__.py                 # Python entry point for Hanzo Studio integration
├── pyproject.toml              # Project metadata for Hanzo Registry
├── dist/                       # Built extension files (generated)
└── ui/                         # React application
    ├── public/
    │   └── locales/            # Internationalization files
    │       ├── en/
    │       │   └── main.json   # English translations
    │       └── zh/
    │           └── main.json   # Chinese translations
    ├── src/
    │   ├── App.tsx             # Main React component with example UI
    │   ├── App.css             # Styles for the example UI
    │   ├── index.css           # Global styles and theme variables
    │   ├── main.tsx            # Entry point for React app
    │   ├── vite-env.d.ts       # Vite environment types
    │   ├── setupTests.ts       # Testing environment setup
    │   ├── __tests__/          # Unit tests for components
    │   │   └── dummy.test.tsx  # Example test
    │   └── utils/
    │       └── i18n.ts         # Internationalization setup
    ├── eslint.config.js        # ESLint configuration
    ├── jest.config.js          # Jest testing configuration
    ├── jest.setup.js           # Jest setup file
    ├── package.json            # npm dependencies
    ├── tsconfig.json           # TypeScript configuration
    ├── tsconfig.node.json      # TypeScript configuration for Node
    └── vite.config.ts          # Build configuration
```

### TypeScript Support

This extension uses the official `@hanzoui/hanzo-studio-frontend-types` package for type-safe interaction with Hanzo Studio APIs. To install it:

```bash
cd ui
npm install -D @hanzoui/hanzo-studio-frontend-types
```

## Publishing to Hanzo Registry

### Prerequisites

1. Set up a [Registry](https://registry.hanzo.ai) account
2. Create an API key at https://registry.hanzo.ai/nodes

### Steps to Publish

1. Install the hanzo-cli tool:
   ```bash
   pip install hanzo-cli
   ```

2. Verify your pyproject.toml has the correct metadata:
   ```toml
   [project]
   name = "your_extension_name"  # Use a unique name for your extension
   description = "Your extension description here."
   version = "0.1.0"  # Increment this with each update

   [tool.comfy]
   PublisherId = "your_publisher_id"  # Your Registry publisher ID
   DisplayName = "Your Extension Display Name"
   includes = ["dist/"]  # Include built React code (normally ignored by .gitignore)
   ```

3. Publish your extension:
   ```bash
   hanzo-cli publish
   ```

4. When prompted, enter your API key

### Automatic Publishing with GitHub Actions

This template includes a GitHub Actions workflow that automatically publishes to the Hanzo Registry whenever you update the version in pyproject.toml:

1. Go to your repository's Settings > Secrets and variables > Actions
2. Create a new repository secret called `REGISTRY_ACCESS_TOKEN` with your API key
3. Commit and push an update to pyproject.toml (e.g., increment the version number)
4. The GitHub Action will automatically run and publish your extension

The workflow configuration is set up in `.github/workflows/react-build.yml` and will trigger when:
- The `pyproject.toml` file is modified and pushed to the `main` branch

The workflow automatically:
1. Sets up Node.js environment
2. Installs dependencies (`npm install`)
3. Builds the React extension (`npm run build`)
4. Publishes the extension to the Hanzo Registry

## Unit Testing

This template includes a basic setup for unit testing with Jest and React Testing Library:

```bash
# Run tests
npm test

# Run tests in watch mode during development
npm run test:watch
```

Example tests can be found in the `src/__tests__` directory. The setup includes:

- Jest for running tests
- React Testing Library for testing components
- Mock implementation of the Hanzo Studio window.app object

## Resources

- [Hanzo Studio JS Extension Documentation](https://docs.hanzo.ai/custom-nodes/js/javascript_overview) - Official documentation for Hanzo Studio JavaScript Extensions
- [Hanzo Registry Documentation](https://docs.hanzo.ai/registry/publishing) - Learn how to publish your extension
- [Hanzo Frontend Repository](https://github.com/hanzoui/frontend) - The main Hanzo Studio frontend codebase
- [Official Hanzo Frontend Types](https://www.npmjs.com/package/@hanzoui/hanzo-studio-frontend-types) - TypeScript definitions for Hanzo Studio
- [React Extension Guide](REACT_EXTENSION_GUIDE.md) - Detailed guide for creating React extensions
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/reference/react)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this template.

## License

MIT
