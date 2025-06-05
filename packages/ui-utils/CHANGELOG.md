# CHANGELOG - @halvaradop/ui-utils

> [!NOTE]
> This CHANGELOG.md file does not include versioning information, as this package is used internally and does not have published versions. However, it documents changes made to this package, which is used by all packages in the @halvaradop/ui library for configuration with tsup, TypeScript, and Storybook stories. All configurations and files exported by this package are excluded from the bundle size, so you do not need to worry about their impact on other packages.

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),  
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.0] - 2025-02-03

### Added

- Added `tsupConfig` for building packages with tsup. [#107](https://github.com/halvaradop/ui/pull/107)
- Added the `decorator` component for use as a Storybook stories decorator. [#107](https://github.com/halvaradop/ui/pull/107)
- Added a parameter to the `decorator` component to allow skipping the decorator in stories that set this parameter to `true`. Useful for base or default stories to avoid unnecessary content. [#108](https://github.com/halvaradop/ui/pull/108)
- Added the `DocsPage` component, which implements Docs Blocks as a default/template documentation for stories. [#109](https://github.com/halvaradop/ui/pull/109)
- Set the `sourcemap` field to `true` in the `tsup` configuration when not in production. [#123](https://github.com/halvaradop/ui/pull/123)
- Added the `Palette` story to display the library's color palette. [#125](https://github.com/halvaradop/ui/pull/125)
- Set the `minify` and `bundle` fields to `true` in the `tsup` configuration when in production. [#123](https://github.com/halvaradop/ui/pull/123)
- Added `react` and `react-dom` as external dependencies in the `tsup` configuration. [#88](https://github.com/halvaradop/ui/pull/88)
- Added `"use client"` as a banner for all components using the `tsup` configuration.
