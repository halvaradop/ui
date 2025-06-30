# Storybook App

A Storybook application for developing and showcasing components from the `@halvaradop/ui` library. This app provides an interactive development environment where you can view, test, and document UI components in isolation.

## Overview

This Storybook instance is configured to:

- Display stories from all UI packages in the monorepo
- Use Vite as the build tool for fast development
- Integrate with Tailwind CSS for styling
- Provide interactive controls and documentation
- Support TypeScript throughout

## Features

- **Component Development**: Isolated component development and testing
- **Interactive Controls**: Modify component props in real-time
- **Documentation**: Auto-generated documentation from component stories
- **Responsive Testing**: Test components across different viewport sizes
- **Accessibility Testing**: Built-in accessibility checks
- **Visual Regression Testing**: Integration with Chromatic for visual testing

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm package manager

### Installation

The Storybook app is part of the monorepo and uses workspace dependencies. Install all dependencies from the root:

```bash
pnpm install
```

### Development

Start the Storybook development server:

```bash
pnpm dev
```

This will start Storybook on `http://localhost:6006` with hot reloading enabled.

### Building

Build the static Storybook site:

```bash
pnpm build
```

The built files will be output to the `storybook-static` directory.

## Configuration

### Storybook Configuration

The main Storybook configuration is in `.storybook/main.ts`:

- **Stories**: Automatically discovers stories from all UI packages
- **Addons**: Includes essential addons for development and testing
- **Framework**: Uses React with Vite for fast builds
- **Aliases**: Configured path aliases for easy imports

### Vite Configuration

The Vite configuration (`vite.config.ts`) includes:

- React SWC plugin for fast compilation
- Tailwind CSS integration
- Path resolution for monorepo packages

### Preview Configuration

The preview configuration (`.storybook/preview.ts`) includes:

- Tailwind CSS global styles
- Control matchers for color and date inputs
- Global parameters for all stories

## Story Structure

Stories are automatically discovered from:

- `../stories/**/*.mdx` - Documentation files
- `../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)` - Story files in the stories directory
- `../../../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)` - Story files in UI packages
- `../../../packages/**/*.mdx` - Documentation files in UI packages

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build static site
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues
- `pnpm clean` - Clean build artifacts
- `pnpm check-types` - Type check with TypeScript

## Addons

The following Storybook addons are configured:

- **@storybook/addon-essentials** - Core addons (controls, docs, etc.)
- **@storybook/addon-interactions** - Test component interactions
- **@storybook/addon-links** - Link between stories
- **@storybook/addon-onboarding** - Interactive tutorials
- **@chromatic-com/storybook** - Visual testing and review

## Development Workflow

1. **Component Development**: Create or modify components in the UI packages
2. **Story Creation**: Add stories to showcase component variations
3. **Testing**: Use Storybook to test components in isolation
4. **Documentation**: Write documentation using MDX files
5. **Review**: Use Chromatic for visual regression testing

## Integration with UI Packages

The Storybook app is configured to work seamlessly with the UI packages in the monorepo:

- Automatic story discovery from all packages
- Path aliases for easy imports (`@/ui`)
- Shared TypeScript configuration
- Integrated Tailwind CSS styling

## Deployment

The built Storybook site can be deployed to any static hosting service:

1. Run `pnpm build` to generate static files
2. Deploy the `storybook-static` directory to your hosting service
3. Configure your hosting service to serve the static files

## Contributing

When adding new components or stories:

1. Create the component in the appropriate UI package
2. Add stories to showcase the component's features
3. Include documentation using MDX files
4. Test the component in Storybook
5. Ensure accessibility compliance

## Troubleshooting

### Common Issues

- **Stories not appearing**: Ensure story files follow the naming convention `*.stories.tsx`
- **Styling issues**: Check that Tailwind CSS is properly imported
- **Build errors**: Verify all dependencies are installed and TypeScript types are correct

### Getting Help

- Check the Storybook documentation: https://storybook.js.org/
- Review the UI package documentation for specific components
- Check the monorepo's main README for general setup information
