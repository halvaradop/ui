# @halvaradop/ui-radio

`@halvaradop/ui-radio` is a deprecated, accessible, reusable, and customizable Radio component from the `@halvaradop/ui` React library. Built with React and styled using TailwindCSS v4, it provided pre-styled components to accelerate UI development.

> [!WARNING] > **DEPRECATED:** This package is deprecated and will no longer receive updates or bug fixes. Please migrate to [@halvaradop/ui-radio-group](https://github.com/halvaradop/ui/tree/master/packages/ui-radio-group). For more information, see [issue #144](https://github.com/halvaradop/ui/issues/144).

## Migration Guide

Follow these steps to migrate from `@halvaradop/ui-radio` to `@halvaradop/ui-radio-group`:

### 1. Remove `@halvaradop/ui-radio` from your dependencies

```bash
pnpm remove @halvaradop/ui-radio
# or
yarn remove @halvaradop/ui-radio
# or
npm uninstall @halvaradop/ui-radio
```

### 2. Install `@halvaradop/ui-radio-group`

```bash
pnpm add @halvaradop/ui-radio-group
# or
yarn add @halvaradop/ui-radio-group
# or
npm install @halvaradop/ui-radio-group
```

### 3. Update your imports

**Before:**

```tsx
import { Radio } from "@halvaradop/ui-radio"
```

**After:**

```tsx
import { RadioGroup, Radio } from "@halvaradop/ui-radio-group"
```

### 4. Update your component usage

**Before:**

```tsx
<Radio name="example" value="option1" />
<Radio name="example" value="option2" />
```

**After:**

```tsx
<RadioGroup name="example">
  <Radio value="option1">Option 1</Radio>
  <Radio value="option2">Option 2</Radio>
</RadioGroup>
```

## Notes

This package is deprecated. Please migrate to `@halvaradop/ui-radio-group`. If you encounter any issues, please report them via [GitHub Issues](https://github.com/halvaradop/ui/issues).
