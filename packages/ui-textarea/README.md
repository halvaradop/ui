# @halvaradop/ui-textarea

`@halvaradop/ui-textarea` is an accessible, reusable, and customizable `Textarea` component from the `@halvaradop/ui` React library. Built with React and styled using TailwindCSS v4, it provides a professional textarea component with multiple variants, sizes, and resize options.

## Installation

There are two versions available: one for React 19 (stable) and one for React 18 (legacy).

### React 19 (Stable)

```bash
npm install @halvaradop/ui-textarea
yarn add @halvaradop/ui-textarea
pnpm add @halvaradop/ui-textarea
```

### React 18 (Legacy)

```bash
npm install @halvaradop/ui-textarea@legacy
yarn add @halvaradop/ui-textarea@legacy
pnpm add @halvaradop/ui-textarea@legacy
```

## Usage

The `Textarea` component offers several props for customization including variants, sizes, and resize options. Import the `Textarea` component as shown below:

```tsx
import { Textarea } from "@halvaradop/ui-textarea"

export default function App() {
  return <Textarea placeholder="Enter your message..." />
}
```

## Examples

### Basic Textarea

```tsx
<Textarea placeholder="Basic textarea" />
```

### Different Sizes

```tsx
<Textarea size="sm" placeholder="Small textarea" />
<Textarea size="base" placeholder="Base textarea" />
<Textarea size="md" placeholder="Medium textarea" />
<Textarea size="lg" placeholder="Large textarea" />
```

### Variants

```tsx
{
  /* Standard textarea with border */
}
;<Textarea variant="base" placeholder="Base variant" />

{
  /* Underline style */
}
;<Textarea variant="line" placeholder="Line variant" />

{
  /* Form validation styles */
}
;<Textarea variant="sensitive" placeholder="Sensitive variant" required />
```

### Resize Options

```tsx
<Textarea resize="none" placeholder="No resize" />
<Textarea resize="vertical" placeholder="Vertical resize only" />
<Textarea resize="horizontal" placeholder="Horizontal resize only" />
<Textarea resize="both" placeholder="Both directions" />
```

### Prop Reference

| Prop          | Type                                             | Default      | Description                          |
| ------------- | ------------------------------------------------ | ------------ | ------------------------------------ |
| `variant`     | `"base" \| "line" \| "sensitive"`                | `"base"`     | Visual style variant                 |
| `size`        | `"sm" \| "base" \| "md" \| "lg"`                 | `"base"`     | Size of the textarea                 |
| `resize`      | `"none" \| "vertical" \| "horizontal" \| "both"` | `"vertical"` | Resize behavior                      |
| `fullWidth`   | `boolean`                                        | `true`       | Whether textarea takes full width    |
| `fullRounded` | `boolean`                                        | `false`      | Whether to use fully rounded corners |

Plus all standard HTML textarea attributes (`placeholder`, `disabled`, `required`, `rows`, `cols`, etc.).

## Variants

### Base

Standard textarea with border and background, suitable for most use cases.

### Line

Minimalist style with only a bottom border, good for modern forms.

### Sensitive

Enhanced validation styling that shows error states for invalid input.

## Accessibility

- Properly handles focus management with visible focus indicators
- Supports all ARIA attributes
- Compatible with screen readers
- Keyboard navigation support

## Styling

The component uses CSS custom properties from your design system. To customize colors, use the following CSS variables. For the full theme, see [the theme file](https://github.com/halvaradop/ui/blob/master/tailwind.css).

```css
@import "tailwindcss";

@theme {
  --rounded: 0.375rem;
  --opacity-cursor: 80%;

  --color-muted: oklch(65% 0.01 260);
  --color-border: oklch(70% 0.02 260);

  --color-surface: oklch(98% 0 0);
  --color-on-surface: oklch(20% 0.02 260);

  --size-sm: 1.75rem;
  --size-base: 2.25rem;
  --size-md: 2.75rem;
  --size-lg: 3.25rem;
}
```

### Dark Theme Support

The component automatically supports dark mode when the `dark` class is applied to the HTML element:

```css
:is(html, body).dark {
  --color-surface: oklch(15% 0.005 260);
  --color-on-surface: oklch(95% 0.01 260);
  --color-border: oklch(35% 0.01 260);
}
```

## Dependencies

- `@halvaradop/ui-core`: Core utilities and types
- `class-variance-authority`: Variant management
- `react`: React library

## Contributing

Contributions are welcome! Please read our [Contributing Guide](https://github.com/halvaradop/ui/blob/master/.github/CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/halvaradop/ui/blob/master/LICENSE) file for details.
