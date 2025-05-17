# @halvaradop/ui-radio

> [!WARNING]
> ⚠️ **DEPRECATED**: This package is deprecated and will no longer receive updates or bug fixes. Please migrate to [@halvaradop/ui-radio-group](https://github.com/halvaradop/ui/tree/master/packages/ui-radio-group).

## Migration Guide

Follow these steps to migrate from `@halvaradop/ui-radio` to `@halvaradop/ui-radio-group`:

### 1. Remove `@halvaradop/ui-radio` from your dependencies

```bash
pnpm un @halvaradop/ui-radio
# or
yarn un @halvaradop/ui-radio
# or
npm uninstall @halvaradop/ui-radio
```

### 2. Install `@halvaradop/ui-radio-group` (if not already installed)

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

For more details, see the [RadioGroup documentation](https://github.com/halvaradop/ui/tree/master/packages/ui-radio-group) or [migration issue #144](https://github.com/halvaradop/ui/issues/144).
