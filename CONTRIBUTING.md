# Contributing to @halvaradop/ui

Thank you for your interest in contributing to our component library! This guide will help you contribute effectively and follow the structure and conventions of the monorepo.

---

## 📚 Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Branching Strategy](#branching-strategy)
5. [Component Development](#component-development)
6. [Testing](#testing)
7. [Documentation](#documentation)
8. [Commit Guidelines](#commit-guidelines)
9. [Pull Request Process](#pull-request-process)
10. [Release Process](#release-process)
11. [Maintainer Guidelines](#maintainer-guidelines)
12. [Project Structure](#project-structure)

---

## 📜 Code of Conduct

All contributors must adhere to our [Code of Conduct](https://github.com/halvaradop/.github/blob/master/.github/CODE_OF_CONDUCT.md). Please read it before participating.

---

## 🛠 Getting Started

### Prerequisites

- Node.js v18+
- pnpm v8+
- Git

### Installation

```bash
corepack enable
git clone git@github.com:halvaradop/ui.git
cd ui
pnpm install
```

---

## ⚙️ Development Workflow

```bash
pnpm storybook        # Start Storybook
pnpm test             # Run Playwright tests
pnpm format           # Format code
pnpm build            # Build all packages
pnpm clean            # Clean the project
```

---

## 🌿 Branching Strategy

- `master`: Current stable branch (React 18, will become legacy)
- `beta`: React 19 development branch (will become new `main`)

Use `[SYNC]` prefix to indicate synchronization PRs between branches.

---

## 📦 Component Development

Use the official template:

```bash
cd packages
cp -r ui-template ui-new-component
cd ui-new-component
pnpm install
```

### Update the Package Name

Update `package.json` and `README.md` with the new component name and description.

### Naming Conventions

- Folders must begin with `ui-` (e.g., `ui-button`, `ui-select`)
- Components must use PascalCase
- Props types must end with `Props` (e.g., `ButtonProps`)
- Variants must follow the format `componentNameVariants` (e.g., `buttonVariants`)

### Implement and Document

Follow these standards:

- Written in **TypeScript**
- Styled with **TailwindCSS v4** and **CSS Variables**
- Documented using **Storybook**
- Tested using **Playwright**

---

## ✅ Testing

```bash
pnpm test
```

We use **Storybook `play` functions** for simulating user interactions as part of our component testing strategy.

Use `pnpm storybook` to preview changes visually.

---

## 🧾 Documentation

### Changelogs

Follow the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format.  
Each package has its own `CHANGELOG.md` file.

```md
## [Unreleased]

### Added

- New feature description [#123](https://github.com/halvaradop/ui/pull/123)
```

---

## 📝 Commit Guidelines

Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):

```bash
feat: add new button component
fix: correct checkbox styling
docs: update select usage example
chore: upgrade dependencies
```

---

## 🚀 Pull Request Process

1. Use a descriptive title and body
2. Reference any related issues or PRs
3. Add screenshots for UI changes
4. Ensure all tests and builds pass
5. Label PRs appropriately:
   - `breaking`
   - `accessibility`
   - `[SYNC]`
6. Get approval from a code owner

Only maintainers listed in the [CODEOWNERS](https://github.com/halvaradop/ui/blob/master/.github/CODEOWNERS) file can approve PRs related to their assigned areas.

---

## 🔖 Release Process

### Versioning

Each package follows [Semantic Versioning](https://semver.org/) independently:

- MAJOR: Breaking changes
- MINOR: New features
- PATCH: Fixes

> Note: We do **not** use Changesets. All changelogs are manually written before each release.

### Publishing (maintainers only)

1. Update `CHANGELOG.md` for each modified package
2. Bump `version` in `package.json`
3. Create a GitHub release
4. Publish to npm manually or via script

---

## 🛡 Maintainer Guidelines

Responsibilities:

- Review and merge PRs only in assigned scope (see `CODEOWNERS`)
- Maintain consistency across versions and branches
- Ensure all packages follow naming and changelog conventions
- Coordinate `[SYNC]` PRs between `master`, `beta`, and `react-18`

---

## 🗂 Project Structure

```txt
ui/
├── .github/              # GitHub workflows and contributor files
├── .storybook/           # Storybook config
├── packages/             # Component packages
│   ├── ui-button/        # Component example
│   ├── ui-core/          # Shared logic and types
│   ├── ui-utils/         # Internal tooling (tsup, config)
│   ├── ui-slot/          # Slot logic
│   └── ui-template/      # Boilerplate for new components
├── tests/                # Playwright tests
├── tailwind.css          # Global theme tokens
├── CHANGELOG.md          # Monorepo-level changelog
└── turbo.json            # Turborepo config
```

---

Happy contributing! 🎉
