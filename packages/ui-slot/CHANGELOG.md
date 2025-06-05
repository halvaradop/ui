# CHANGELOG - @halvaradop/ui-slot

All notable changes to this project will be documented in this file.

This changelog follows the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format  
and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2025-05-07

### Added

- Initial release of the `Slot` component, a reusable utility for enabling component composition and flexibility across packages.  
  [#151](https://github.com/halvaradop/ui/pull/151)

- This component was previously bundled inside `@halvaradop/ui-core` and has now been separated into its own package to reduce the bundle size for packages that don’t use it.

### Notes

- This decoupling allows better control over dependencies and reduces overhead in components that don't rely on slot behavior.
- All components using `Slot` have been updated to import it from `@halvaradop/ui-slot` instead of `@halvaradop/ui-core`.
- See related discussion in [issue #148](https://github.com/halvaradop/ui/issues/148).
