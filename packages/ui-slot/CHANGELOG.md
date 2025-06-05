# CHANGELOG - @halvaradop/ui-slot

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2025-05-07

### Added

- Initial release: Introduced the `Slot` component, a reusable component designed to enhance flexibility in React applications. The decision to separate the `Slot` component into its own file was discussed in [issue #148](https://github.com/halvaradop/ui/issues/148). This change reduces the size of the components, as previously the `Slot` component was exported by the `@halvaradop/ui-core` package, even when not used. Now, only components that require the `Slot` component import it from `@halvaradop/ui-slot`. Components previously using `Slot` from `@halvaradop/ui-core` have been updated to use the new package. See [pull request #151](https://github.com/halvaradop/ui/pull/151) for details.
