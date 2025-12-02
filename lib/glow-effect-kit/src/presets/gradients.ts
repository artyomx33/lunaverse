// Gradient presets for the glow effect
// Use these as `variant` prop values in ColorHoverEffect and GlowCard

export const GRADIENT_PRESETS = {
  rainbow: `
    radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
    radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
    radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%),
    radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
    repeating-conic-gradient(
      from 236.84deg at 50% 50%,
      #dd7bbb 0%,
      #d79f1e calc(25% / var(--repeating-conic-gradient-times)),
      #5a922c calc(50% / var(--repeating-conic-gradient-times)),
      #4c7894 calc(75% / var(--repeating-conic-gradient-times)),
      #dd7bbb calc(100% / var(--repeating-conic-gradient-times))
    )
  `,
  ocean: `
    radial-gradient(circle, #0ea5e9 10%, transparent 20%),
    radial-gradient(circle at 40% 40%, #06b6d4 5%, transparent 15%),
    repeating-conic-gradient(
      from 0deg at 50% 50%,
      #0ea5e9 0%,
      #3b82f6 50%,
      #06b6d4 100%
    )
  `,
  sunset: `
    radial-gradient(circle, #f97316 10%, transparent 20%),
    radial-gradient(circle at 40% 40%, #e11d48 5%, transparent 15%),
    repeating-conic-gradient(
      from 0deg at 50% 50%,
      #f97316 0%,
      #e11d48 50%,
      #f59e0b 100%
    )
  `,
  white: `
    repeating-conic-gradient(
      from 0deg at 50% 50%,
      #a1a1aa 0%,
      #ffffff 50%,
      #a1a1aa 100%
    )
  `,
  teddy: `
    radial-gradient(circle, #d4a019 10%, #d4a01900 20%),
    radial-gradient(circle at 40% 40%, #fbbf24 5%, #fbbf2400 15%),
    radial-gradient(circle at 60% 60%, #b8860b 10%, #b8860b00 20%),
    radial-gradient(circle at 40% 60%, #1a1a1a 10%, #1a1a1a00 20%),
    repeating-conic-gradient(
      from 236.84deg at 50% 50%,
      #d4a019 0%,
      #fbbf24 calc(25% / var(--repeating-conic-gradient-times)),
      #b8860b calc(50% / var(--repeating-conic-gradient-times)),
      #1a1a1a calc(75% / var(--repeating-conic-gradient-times)),
      #d4a019 calc(100% / var(--repeating-conic-gradient-times))
    )
  `,
} as const;

export type GradientVariant = keyof typeof GRADIENT_PRESETS;
