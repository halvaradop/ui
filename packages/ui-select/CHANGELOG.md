# CHANGELOG - @halvaradop/ui-select

All notable changes to this project will be documented in this file.

This changelog follows the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format  
and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

---

## [0.2.0] - 2025-06-09 (Version @legacy for React 18)

> **Release: React 18 Support**
>
> Version **0.y.z** marks the official release of our component library with full **React 18** compatibility. This version is a **direct promotion of the latest pre-release (`0.y.z-rc.n`)** and has passed all stability and regression tests in real-world environments. It includes all changes, improvements, and fixes introduced during the `rc` phase.
>
> While this release contains substantial updates (such as the complete migration to Tailwind CSS v4 and accessibility enhancements) similar to those in the main (`latest`) version, its purpose is to provide a dedicated support line for projects that still rely on React 18. Active development has moved to the `master` branch, which targets React 19.
>
> **Recommended update for React 18 users!**
>
> We strongly recommend updating to this version if your project still depends on React 18 to benefit from the latest fixes and optimizations. You can install it using the `legacy` tag on npm:
>
> ```bash
> npm install @halvaradop/ui@legacy
> ```
>
> We encourage users to plan their migration to React 19 to take advantage of the latest features and optimizations available in the `master` branch.

---

## [0.1.0-rc.1] - 2025-06-07

### Changed

- Updated CSS variables for Tailwind CSS v4 compatibility. Legacy variable naming was replaced by auto-generated tokens based on the `@theme` directive. This modernizes the Select component styling and configuration.  
  [#152](https://github.com/halvaradop/ui/pull/152)

### Notes

- Tailwind v4 eliminates the need to configure CSS variables in `tailwind.config.ts`. Variables are now generated automatically.
- Native variants and theming simplify the use and styling of the Select component.
- This is a **release candidate** published under the `rc` tag to validate changes in preparation for the upcoming `1.0.0` major release.  
  See [#170](https://github.com/halvaradop/ui/pull/170)
- Versioning and publishing were automated using the `release.bash` script.  
  See [#170](https://github.com/halvaradop/ui/pull/170)
- The purpose of this release is to test the release workflow in real environments before finalizing the stable release.  
  See [#170](https://github.com/halvaradop/ui/pull/170)

> No breaking changes have been introduced in this release candidate.  
> The final release will follow after successful validation.

This release was initiated based on [#169](https://github.com/halvaradop/ui/issues/169), which outlines the reasoning for upgrading to a stable major version.

---

## [0.1.0] - 2025-04-06

### Added

- Initial release of the Select component suite using the Compound Component Pattern. Includes:

  - `Select`: Main wrapper component.
  - `SelectTrigger`: Control for toggling dropdown.
  - `SelectOption`: Represents selectable items.
  - `SelectList`: Wraps list of options.  
    [#139](https://github.com/halvaradop/ui/pull/139)

- Implemented CSS variable system for consistent styling across variants.  
  [#93](https://github.com/halvaradop/ui/pull/93), [#125](https://github.com/halvaradop/ui/pull/125)

- Added `merge` function from `@halvaradop/ui-core` for className handling.

- Included WAI-ARIA attributes for accessibility compliance.  
  [#139](https://github.com/halvaradop/ui/pull/139)
