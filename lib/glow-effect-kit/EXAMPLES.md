# 📚 Glow Effect Kit - Examples

Copy-paste ready examples for common use cases.

## 1. Basic Card

The simplest way to get started:

```tsx
import { GlowCard } from '@/lib/glow-effect-kit';

export default function BasicCard() {
  return (
    <GlowCard variant="teddy">
      <h3 className="text-2xl font-bold mb-3">Hello World</h3>
      <p className="text-gray-600">
        This is a basic card with a glowing border that follows your cursor.
      </p>
    </GlowCard>
  );
}
```

## 2. Pricing Cards with Highlighted Tier

Perfect for pricing pages with a featured tier:

```tsx
import { GlowCard } from '@/lib/glow-effect-kit';

export default function PricingTiers() {
  const tiers = [
    { name: 'Starter', price: '$9', features: ['Feature 1', 'Feature 2'] },
    { name: 'Pro', price: '$29', features: ['All Starter', 'Feature 3', 'Feature 4'], highlighted: true },
    { name: 'Enterprise', price: 'Custom', features: ['All Pro', 'Feature 5', 'Support'] }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {tiers.map((tier) => (
        <GlowCard
          key={tier.name}
          variant={tier.highlighted ? 'teddy' : 'white'}
          spread={tier.highlighted ? 35 : 20}
          borderWidth={tier.highlighted ? 2 : 1}
          innerClassName={tier.highlighted ? 'bg-gradient-to-br from-amber-50 to-yellow-50' : 'bg-white'}
        >
          <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
          <p className="text-3xl font-bold text-teddy mb-4">{tier.price}</p>
          <ul className="space-y-2 mb-6">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-teddy/20 flex items-center justify-center text-sm">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <button className="w-full bg-teddy text-white py-2 rounded-lg hover:bg-teddy/90 transition-colors">
            Get Started
          </button>
        </GlowCard>
      ))}
    </div>
  );
}
```

## 3. Custom Gradient

Using custom gradients beyond the presets:

```tsx
import { ColorHoverEffect } from '@/lib/glow-effect-kit';

export default function CustomGradient() {
  return (
    <div className="relative w-full max-w-md rounded-xl overflow-hidden bg-white p-6">
      <ColorHoverEffect
        variant="custom"
        glow={true}
        customGradient={`
          radial-gradient(circle, #ff00ff 10%, transparent 20%),
          radial-gradient(circle at 40% 40%, #00ffff 5%, transparent 15%),
          repeating-conic-gradient(
            from 0deg at 50% 50%,
            #ff00ff 0%,
            #00ffff 50%,
            #ff00ff 100%
          )
        `}
        spread={30}
      />
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-2">Neon Glow</h3>
        <p className="text-gray-600">
          Custom gradient with vibrant magenta and cyan colors.
        </p>
      </div>
    </div>
  );
}
```

## 4. Feature Cards Grid

Multiple cards with different variants:

```tsx
import { GlowCard } from '@/lib/glow-effect-kit';

export default function FeaturesGrid() {
  const features = [
    { icon: '⚡', title: 'Fast', variant: 'ocean' as const },
    { icon: '🎨', title: 'Beautiful', variant: 'rainbow' as const },
    { icon: '🔧', title: 'Customizable', variant: 'sunset' as const },
    { icon: '📱', title: 'Responsive', variant: 'teddy' as const },
    { icon: '🌍', title: 'Cross-browser', variant: 'white' as const },
    { icon: '⚙️', title: 'Optimized', variant: 'ocean' as const },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature) => (
        <GlowCard key={feature.title} variant={feature.variant}>
          <div className="text-4xl mb-3">{feature.icon}</div>
          <h3 className="text-xl font-bold">{feature.title}</h3>
          <p className="text-gray-600 text-sm mt-2">
            Amazing feature with a {feature.variant} glow effect.
          </p>
        </GlowCard>
      ))}
    </div>
  );
}
```

## 5. Content Card with Image

Combining glow effect with rich content:

```tsx
import { GlowCard } from '@/lib/glow-effect-kit';
import Image from 'next/image';

export default function ContentCard() {
  return (
    <GlowCard variant="sunset" innerClassName="bg-gradient-to-b from-gray-900 to-black text-white">
      <Image
        src="/hero.jpg"
        alt="Hero"
        width={400}
        height={300}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-2xl font-bold mb-2">Amazing Story</h3>
      <p className="text-gray-300 mb-4">
        This is a content card with an image and glow effect. Perfect for blog posts or case studies.
      </p>
      <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-medium transition-colors">
        Read More
      </button>
    </GlowCard>
  );
}
```

## 6. Dark Theme Card

Perfect for dark mode designs:

```tsx
import { GlowCard } from '@/lib/glow-effect-kit';

export default function DarkCard() {
  return (
    <GlowCard
      variant="ocean"
      innerClassName="bg-slate-900 text-white border-slate-700"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-2xl">
          💻
        </div>
        <h3 className="text-xl font-bold">Tech Stack</h3>
      </div>
      <p className="text-gray-300 mb-4">
        Built with React, TypeScript, and Tailwind CSS for maximum performance.
      </p>
      <div className="flex gap-2">
        <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-sm">React</span>
        <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-sm">TypeScript</span>
        <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-sm">Tailwind</span>
      </div>
    </GlowCard>
  );
}
```

## 7. Conditional Glow

Enable/disable glow based on state:

```tsx
import { GlowCard } from '@/lib/glow-effect-kit';
import { useState } from 'react';

export default function ConditionalGlow() {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="space-y-4">
      <button
        onClick={() => setIsActive(!isActive)}
        className="px-4 py-2 bg-teddy text-white rounded-lg hover:bg-teddy/90"
      >
        {isActive ? 'Disable' : 'Enable'} Glow
      </button>

      <GlowCard
        variant="rainbow"
        glow={isActive}
        spread={isActive ? 30 : 20}
      >
        <h3 className="text-2xl font-bold mb-2">Toggle Glow</h3>
        <p className="text-gray-600">
          Click the button above to toggle the glow effect on and off.
        </p>
        <p className="text-sm text-gray-500 mt-4">
          {isActive ? '✓ Glow is active' : '✗ Glow is disabled'}
        </p>
      </GlowCard>
    </div>
  );
}
```

## 8. Button with Glow

Using GlowButton for actions:

```tsx
import { GlowButton } from '@/lib/glow-effect-kit';

export default function ButtonExamples() {
  return (
    <div className="space-y-4">
      <GlowButton
        variant="teddy"
        onClick={() => alert('Clicked!')}
        className="w-full bg-red-500 hover:bg-red-600"
      >
        Primary Action
      </GlowButton>

      <GlowButton
        variant="ocean"
        onClick={() => alert('Secondary clicked!')}
        className="w-full bg-blue-500 hover:bg-blue-600"
      >
        Secondary Action
      </GlowButton>

      <GlowButton
        variant="sunset"
        onClick={() => alert('Creative clicked!')}
        className="w-full bg-orange-500 hover:bg-orange-600"
      >
        Creative Action
      </GlowButton>
    </div>
  );
}
```

## 9. Newsletter Signup Card

Practical real-world example:

```tsx
import { GlowCard } from '@/lib/glow-effect-kit';
import { FormEvent, useState } from 'react';

export default function NewsletterCard() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 2000);
  };

  return (
    <GlowCard
      variant="sunset"
      spread={25}
      innerClassName="bg-gradient-to-br from-orange-50 to-red-50"
    >
      <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
      <p className="text-gray-600 mb-4">
        Get the latest news delivered to your inbox every week.
      </p>

      {submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
          ✓ Thanks for subscribing!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
          >
            Subscribe
          </button>
        </form>
      )}
    </GlowCard>
  );
}
```

## 10. Responsive Product Card

E-commerce style card:

```tsx
import { GlowCard } from '@/lib/glow-effect-kit';
import Image from 'next/image';

export default function ProductCard() {
  return (
    <GlowCard
      variant="teddy"
      innerClassName="bg-white flex flex-col h-full"
    >
      <Image
        src="/product.jpg"
        alt="Product"
        width={300}
        height={300}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2">Premium Product</h3>
      <p className="text-gray-600 text-sm mb-4 flex-1">
        High-quality product with amazing features and specifications.
      </p>
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl font-bold text-teddy">$49.99</span>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400">★</span>
          ))}
        </div>
      </div>
      <button className="w-full bg-teddy text-white py-3 rounded-lg hover:bg-teddy/90 transition-colors font-medium">
        Add to Cart
      </button>
    </GlowCard>
  );
}
```

---

## Tips

1. **Performance**: Don't put glow effects on too many elements on one page (10+ starts affecting performance)
2. **Visibility**: Make sure there's good contrast between your content and the glow color
3. **Mobile**: Test glow effects on mobile devices - they work but may use more battery
4. **Accessibility**: Ensure button text is readable over any glow effect
5. **Loading**: Glow effects are fully loaded before render - no layout shifts

---

Need more examples? Check the main README.md for detailed prop documentation!
