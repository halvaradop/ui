# CHANGELOG - @halvaradop/ui-select

All notable changes to this project will be documented in this file.

This changelog follows the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format  
and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Updated CSS variables for Tailwind CSS v4 compatibility. Legacy variable naming was replaced by auto-generated tokens based on the `@theme` directive. This modernizes the Select component styling and configuration.  
  [#152](https://github.com/halvaradop/ui/pull/152)

### Notes

- Tailwind v4 eliminates the need to configure CSS variables in `tailwind.config.ts`. Variables are now generated automatically.
- Native variants and theming simplify the use and styling of the Select component.

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
