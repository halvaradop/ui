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
pnpm dev:storybook        # Start Storybook
pnpm test             # Run Playwright tests
pnpm format           # Format code
pnpm build            # Build all packages
pnpm clean            # Clean the project
```

---

## 🌿 Branching Strategy

- **`master`**: The main development branch. Represents the latest stable release (currently React 19).
- **`legacy/react-18`**: Maintains support for React 18. Only accepts critical fixes, bug patches, and minimal changes required for legacy compatibility.
- Use the `[SYNC]` prefix in pull request titles to clearly indicate synchronization PRs that merge changes between branches (e.g., from `master` to `legacy/react-18`).

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

Use `pnpm dev:storybook` to preview changes visually.

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

1. Use a descriptive title and body that follow
2. Reference any related issues or PRs in the body.
3. Add screenshots or GIFs for UI changes to facilitate review.
4. Ensure all tests pass (`pnpm test`)
5. Confirm all builds pass (`pnpm build`).
6. Label PRs appropriately (e.g., `breaking`, `accessibility`).
7. Get approval from a code owner.

Only maintainers listed in the [CODEOWNERS](https://github.com/halvaradop/ui/blob/master/.github/CODEOWNERS) file can approve PRs related to their assigned areas.

> Note on [SYNC] commits:
> Historically, during the transition phase, some commits in the master branch (formerly beta) might be prefixed with [SYNC]. These indicate changes synchronized from the legacy/react-18 branch. As a contributor, you should not use this prefix for new commits; it was specific to a past internal synchronization workflow.

---

## 🔖 Release Process

### Versioning

Each package follows [Semantic Versioning](https://semver.org/) independently:

- MAJOR: Breaking changes
- MINOR: New features
- PATCH: Fixes

> [!NOTE]
> We do **not** use Changesets. All changelogs are maintained manually and must be updated before each release. Releases are managed using the `release` script located in the `scripts` folder, which provides an interactive bash workflow for publishing new versions.

### Publishing (Maintainers Only)

1. Update the `CHANGELOG.md` for each modified package.
2. Bump the `version` field in each relevant `package.json`.
3. Create a GitHub release.
4. Publish to npm by running the `release.bash` script, or use the direct scripts: `release:bump`, `release:dry-run`, or `release:version` via the package manager (`pnpm`).

---

## 🛡 Maintainer Guidelines

Responsibilities:

- Reviewing and merging PRs only within their assigned scope (see `CODEOWNERS`).
- Maintaining consistency across different versions and branches.
- Ensuring all packages adhere to naming and changelog conventions.
- Coordinating any necessary synchronizations between `master` and `legacy/react-18` (though the [SYNC] commit prefix is no longer in active use for new contributions, historical context remains).

---

## 🗂 Project Structure

```
ui/
├── .github/                    # GitHub automation: CI/CD workflows, issue templates, PR guidelines, CODEOWNERS
├── apps/                       # Application demos and development environments
│   └── storybook/              # Interactive component playground and visual documentation
├── config/                     # Shared configuration packages for consistent tooling across workspace
│   ├── eslint-config/          # Modern ESLint 9.x rules with React 19, TypeScript, and accessibility support
│   ├── tailwind-config/        # Design system tokens, theme variables, and TailwindCSS v4 configuration
│   ├── ts-config/              # TypeScript compiler configurations for different project types
│   └── tsup-config/            # Unified build configuration for fast, consistent package bundling
├── packages/                   # Independently versioned UI components and utilities (npm publishable)
│   ├── ui-core/                # Foundation library: utilities, types, and shared logic for all components
│   ├── ui-utils/               # Advanced utilities and internal helpers for component development
│   ├── ui-slot/                # Polymorphic composition component enabling flexible component APIs
│   ├── ui-template/            # Standardized boilerplate and scaffolding for creating new components
│   └── ...                     # Component library: ui-button, ui-checkbox, ui-dialog, ui-form, etc.
├── scripts/                    # Development automation: build orchestration, release management, maintenance
├── tests/                      # Quality assurance: E2E testing with Playwright, integration test suites
├── eslint.config.js            # Workspace-level ESLint configuration using flat config format
├── playwright.config.ts        # End-to-end testing configuration and browser automation setup
├── pnpm-workspace.yaml         # Workspace package definitions and dependency management rules
├── prettier.config.js          # Code formatting standards and consistency rules
└── README.md                   # Project overview, quick start guide, and contribution instructions
└── turbo.json                  # Turborepo pipeline configuration for optimized build orchestration
```

---

Happy contributing! 🎉
