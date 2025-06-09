# CHANGELOG - @halvaradop/ui-slot

All notable changes to this project will be documented in this file.

This changelog follows the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format  
and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0-next.1] - 2025-06-08 (Version @next for React 19)

> **Pre-release for React 19:** This `next` version is published for testing and validation with **React 19** as the base. It allows evaluation in real-world environments before being promoted to a stable release. The previous `rc` version was based on React 18.  
> [More details about the release strategy: #160](https://github.com/halvaradop/ui/pull/160)

### Notes

- This `@next` version acts as a **candidate for the upcoming stable `1.0.0` release**.
- Versioning and publishing are automated via the `release.bash` script.
- The main goal is to test the release workflow and gather feedback from real-world environments.

> The stable `1.0.0` version will be published after successful validation of this `next` version.  
> This release was initiated in response to [#169](https://github.com/halvaradop/ui/issues/169), which details the rationale for moving to a major stable version.

---

## [0.1.0-beta.1] - 2025-05-07

> **Beta release for React 19 development:** This version targets early adopters who want to test the library with React 19. It is not intended for production use.

### Added

- Initial release of the `Slot` component, a reusable utility for enabling component composition and flexibility across packages.  
  [#151](https://github.com/halvaradop/ui/pull/151)

- This component was previously bundled inside `@halvaradop/ui-core` and has now been separated into its own package to reduce the bundle size for packages that don’t use it.

### Notes

- This decoupling allows better control over dependencies and reduces overhead in components that don't rely on slot behavior.
- All components using `Slot` have been updated to import it from `@halvaradop/ui-slot` instead of `@halvaradop/ui-core`.
- See related discussion in [issue #148](https://github.com/halvaradop/ui/issues/148).

### Notes

- This beta is for development and feedback purposes only. Breaking changes may occur in future releases.
- Please report any issues encountered when using this version with React 19.
