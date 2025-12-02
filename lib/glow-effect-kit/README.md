# 🎨 Glow Effect Kit

A reusable, performant mouse-tracking glow effect for React + Tailwind CSS projects. Creates beautiful "rainbow sandwich" gradient borders that follow your cursor with smooth animations.

## ✨ Features

- **🎨 5 Built-in Gradients**: rainbow, ocean, sunset, white, teddy
- **⚡ Optimized Performance**: Uses requestAnimationFrame + React.memo
- **🎯 Smooth Mouse Tracking**: Animated angle transitions following cursor position
- **📦 Drop-in Components**: GlowCard and GlowButton ready to use
- **🔧 Fully Customizable**: 9 configurable props for fine-tuning
- **🌍 Cross-browser Support**: Chrome, Safari, Firefox with graceful fallbacks
- **📱 Mobile Responsive**: Works great on all screen sizes
- **⚛️ React 18+**: Built with latest React patterns and hooks

## 🚀 Quick Start

### 1. Copy Package to Your Project

```bash
cp -r /path/to/glow-effect-kit ./lib/glow-effect-kit
```

### 2. Install Peer Dependencies

```bash
npm install clsx tailwind-merge motion
```

> **Note**: If you already have `tailwind-merge` or `motion` (via framer-motion), no need to install again.

### 3. Import and Use

```tsx
import { GlowCard } from '@/lib/glow-effect-kit';

export default function MyComponent() {
  return (
    <GlowCard variant="teddy">
      <h3>Your content here</h3>
      <p>Amazing card with glowing border!</p>
    </GlowCard>
  );
}
```

## 📦 Components

### GlowCard

Pre-configured card wrapper with configurable glow border. Perfect for cards, feature boxes, and content sections.

**Props:**
- `variant`: `"rainbow"` | `"ocean"` | `"sunset"` | `"white"` | `"teddy"` (default: `"teddy"`)
- `glow`: `boolean` (default: `true`)
- `borderWidth`: `number` in pixels (default: `1`)
- `spread`: `number` in degrees (default: `20`)
- `proximity`: `number` in pixels (default: `0`)
- `inactiveZone`: `number` as fraction (default: `0.7`)
- `innerClassName`: `string` for custom content styling
- `children`: React elements to wrap

**Example:**

```tsx
<GlowCard
  variant="ocean"
  spread={25}
  borderWidth={2}
  innerClassName="bg-gradient-to-br from-blue-50 to-cyan-50"
>
  <h2>Ocean Vibes</h2>
  <p>Professional blue-teal glow effect</p>
</GlowCard>
```

### ColorHoverEffect

Low-level core component for maximum control. Use this when you need to customize beyond GlowCard capabilities.

**Props:** All GlowCard props plus:
- `blur`: `number` in pixels (default: `0`)
- `movementDuration`: `number` in seconds (default: `2`)
- `customGradient`: `string` CSS gradient (overrides `variant`)
- `disabled`: `boolean` to disable the effect
- `className`: Additional Tailwind classes

**Example:**

```tsx
import { ColorHoverEffect } from '@/lib/glow-effect-kit';

<div className="relative w-64 h-64 rounded-lg overflow-hidden">
  <ColorHoverEffect
    variant="sunset"
    glow={true}
    spread={30}
    customGradient="radial-gradient(circle, #ff0000, transparent)"
  />
  <YourContent />
</div>
```

### GlowButton

Button component with built-in glow effect. Great for CTAs and prominent actions.

**Props:** Extends `ButtonHTMLAttributes<HTMLButtonElement>` plus:
- All ColorHoverEffect props
- Default variant: `"sunset"`
- Default blur: `10`

**Example:**

```tsx
import { GlowButton } from '@/lib/glow-effect-kit';

<GlowButton variant="rainbow" onClick={handleClick}>
  Click Me!
</GlowButton>
```

## 🎨 Gradient Variants

| Variant | Colors | Best For |
|---------|--------|----------|
| **rainbow** | Pink → Orange → Green → Blue | Playful, diverse, energetic content |
| **ocean** | Sky Blue → Cyan → Blue | Professional, tech, calm vibes |
| **sunset** | Orange → Red → Amber | Energetic, creative, warm content |
| **white** | Gray → White → Gray | Minimal, elegant, clean design |
| **teddy** | Gold → Amber → Chocolate | Luxury, premium, brand colors |

## 🎯 Prop Guide

### `variant`

Selects which gradient preset to use. Choose based on the mood you want to create:

```tsx
// Playful and colorful
<GlowCard variant="rainbow" />

// Professional and tech
<GlowCard variant="ocean" />

// Energetic and warm
<GlowCard variant="sunset" />

// Minimal and clean
<GlowCard variant="white" />

// Luxury and premium
<GlowCard variant="teddy" />
```

### `spread`

Controls the angle width of the glow spotlight in degrees. Higher = wider glow cone.

```tsx
<GlowCard spread={15} />  {/* Narrow spotlight */}
<GlowCard spread={20} />  {/* Default */}
<GlowCard spread={45} />  {/* Wide spotlight */}
```

### `glow`

Toggle between full glow effect and subtle border-only mode.

```tsx
<GlowCard glow={true} />   {/* Full gradient glow */}
<GlowCard glow={false} />  {/* Border only, no glow */}
```

### `proximity`

Distance in pixels from element edge where the effect activates. Useful for large elements.

```tsx
<GlowCard proximity={0} />    {/* Must hover directly on element */}
<GlowCard proximity={100} />  {/* Activates 100px away */}
```

### `inactiveZone`

Dead zone in the center of the element. Glow fades when cursor is too close to center.

```tsx
<GlowCard inactiveZone={0.3} />  {/* Small dead zone */}
<GlowCard inactiveZone={0.7} />  {/* Default, medium dead zone */}
<GlowCard inactiveZone={0} />    {/* No dead zone, always glowing */}
```

### `borderWidth`

Thickness of the border in pixels.

```tsx
<GlowCard borderWidth={1} />  {/* Thin border (default) */}
<GlowCard borderWidth={2} />  {/* Thick border */}
<GlowCard borderWidth={3} />  {/* Very thick border */}
```

### `innerClassName`

Tailwind classes for the inner content area. Allows custom backgrounds and text colors.

```tsx
{/* White background */}
<GlowCard innerClassName="bg-white text-black" />

{/* Dark background */}
<GlowCard innerClassName="bg-slate-900 text-white" />

{/* Gradient background */}
<GlowCard innerClassName="bg-gradient-to-br from-blue-50 to-cyan-50" />

{/* Transparent background */}
<GlowCard innerClassName="bg-transparent" />
```

## 📱 Responsive Usage

The glow effect works perfectly on all screen sizes. Here's a responsive example:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <GlowCard variant="ocean" spread={20}>
    <h3 className="text-xl font-bold mb-2">Card 1</h3>
    <p>Content</p>
  </GlowCard>

  <GlowCard variant="sunset" spread={25}>
    <h3 className="text-xl font-bold mb-2">Card 2</h3>
    <p>Content</p>
  </GlowCard>

  <GlowCard variant="rainbow" spread={30}>
    <h3 className="text-xl font-bold mb-2">Card 3</h3>
    <p>Content</p>
  </GlowCard>
</div>
```

## 🛠️ Advanced: Custom Gradients

Need a color not in the presets? Use `customGradient`:

```tsx
<GlowCard
  variant="custom"
  customGradient="radial-gradient(circle, #ff1493, transparent 20%)"
>
  Custom Pink Glow
</GlowCard>
```

## 🔧 TypeScript Support

Full TypeScript support with exported types:

```tsx
import { GlowCard, ColorHoverEffectProps, GradientVariant } from '@/lib/glow-effect-kit';

const MyComponent: React.FC = () => {
  const variant: GradientVariant = 'ocean';

  return (
    <GlowCard variant={variant} spread={25}>
      Fully typed!
    </GlowCard>
  );
};
```

## 🌍 Browser Support

- **Chrome/Edge**: 88+
- **Firefox**: 87+
- **Safari**: 14+
- **Mobile**: All modern browsers

## ⚡ Performance

- Uses `React.memo` to prevent unnecessary re-renders
- `requestAnimationFrame` for smooth 60fps animations
- CSS-based transformations (transforms use GPU acceleration)
- Passive event listeners for scroll/mouse events
- No external image assets

## 🎓 How It Works

The glow effect uses a clever CSS technique:

1. **Mouse Tracking**: JavaScript tracks cursor position relative to the element
2. **Angle Calculation**: Calculates the angle from element center to cursor
3. **Smooth Animation**: Uses motion library to animate angle changes smoothly
4. **CSS Mask**: A conic-gradient mask creates the "spotlight" effect
5. **Gradient Background**: The gradient rotates with the spotlight

Result: A gradient "sandwich" in the border gap that follows your cursor!

## 🚀 Integration Examples

See `EXAMPLES.md` for copy-paste ready examples:
- Basic card usage
- Pricing cards with highlighted tier
- Custom gradient setup
- Multiple cards in grid
- Button integration
- Conditional rendering

## 📝 License

MIT - Feel free to use in any project!

## 🤝 Contributing

Found a bug or want to improve? Feel free to fork and create a PR!

---

**Made with ❤️ for beautiful, interactive UIs**
