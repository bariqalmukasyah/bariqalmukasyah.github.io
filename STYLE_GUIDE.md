# Style Guide & Best Practices

## Coding Standards

### Component Structure

Every component should follow this pattern:

```typescript
'use client';  // For interactive components

import { useState, useEffect } from 'react';
import { IconName } from 'lucide-react';

interface ComponentProps {
  // Define props here
}

export default function ComponentName(props: ComponentProps) {
  // State management
  const [state, setState] = useState(false);

  // Effects
  useEffect(() => {
    // Initialization
  }, []);

  // Render
  return (
    <section className="py-24">
      {/* JSX content */}
    </section>
  );
}
```

### Naming Conventions

- **Components**: PascalCase (`HeroSection.tsx`)
- **Functions**: camelCase (`handleClick`)
- **Variables**: camelCase (`personName`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_ITEMS = 10`)
- **CSS Classes**: kebab-case (`text-blue-600`)

### File Organization

```
components/
├── Navbar.tsx                    # Navigation
├── HeroSection.tsx               # Main hero
├── ServicesSection.tsx           # Services grid
├── ExperienceSection.tsx         # Work timeline
├── SkillsSection.tsx             # Skills showcase
└── Footer.tsx                    # Footer
```

## Tailwind CSS Guidelines

### Color Palette

Primary colors used:
- **Blue**: `bg-blue-500`, `text-blue-600`, `border-blue-400`
- **Slate**: `bg-slate-900`, `text-slate-600`, `bg-slate-50`
- **White**: `bg-white`, `text-white`, `bg-white/10` (with opacity)
- **Green**: `bg-green-500` (for WhatsApp CTA)

### Spacing Scale

```
p-4      padding: 1rem       (16px)
py-24    padding-y: 6rem     (96px)
gap-8    gap: 2rem           (32px)
mt-8     margin-top: 2rem    (32px)
```

### Responsive Breakpoints

```
sm: 640px     // Small screens
md: 768px     // Medium (tablets)
lg: 1024px    // Large (desktop)
xl: 1280px    // Extra large
```

Usage:
```typescript
<div className="grid md:grid-cols-2 lg:grid-cols-3">
  {/* 1 col mobile, 2 cols tablet, 3 cols desktop */}
</div>
```

### Utility Classes Used

```typescript
// Sizing
w-full, h-16, max-w-3xl, min-h-screen

// Spacing
p-8, py-24, gap-4, mx-auto

// Typography
text-sm, text-lg, font-bold, leading-relaxed

// Colors
bg-blue-600, text-slate-900, border-white/10

// Display
flex, grid, hidden, md:flex

// Effects
rounded-lg, shadow-xl, blur-3xl, opacity-50

// Positioning
absolute, relative, z-50, translate-x-2
```

## Components Best Practices

### 1. Props Interface

Always define props with TypeScript:

```typescript
interface NavbarProps {
  onMenuOpen: (isOpen: boolean) => void;
  className?: string;
}

export default function Navbar({ onMenuOpen, className }: NavbarProps) {
  // ...
}
```

### 2. Conditional Rendering

```typescript
// Good: Ternary for simple conditions
{isMenuOpen ? <MobileMenu /> : null}

// Good: Logical AND for single condition
{isLoading && <LoadingSpinner />}

// Good: Early return in render
if (error) return <ErrorMessage />;
```

### 3. Lists and Keys

```typescript
{items.map((item, idx) => (
  <div key={idx}>{item.name}</div>
))}

// Better: Use unique ID if available
{items.map((item) => (
  <div key={item.id}>{item.name}</div>
))}
```

### 4. Event Handlers

```typescript
// Use arrow functions for binding
const handleClick = () => {
  setState(!state);
};

// In JSX
<button onClick={handleClick}>Click me</button>
```

## Styling Patterns

### Dark-to-Light Gradient
```typescript
<div className="bg-gradient-to-br from-slate-900 to-blue-900">
  {/* Dark gradient background */}
</div>
```

### Glass Morphism Effect
```typescript
<div className="bg-white/10 backdrop-blur-md border border-white/20">
  {/* Frosted glass effect */}
</div>
```

### Hover Effects
```typescript
<button className="hover:bg-blue-600 hover:scale-105 transition-all">
  {/* Smooth hover animation */}
</button>
```

### Shadow Elevation
```typescript
<div className="shadow-sm">         {/* Light shadow */}
<div className="shadow-lg">         {/* Medium shadow */}
<div className="shadow-xl">         {/* Heavy shadow */}
```

### Text Truncation
```typescript
<p className="truncate">            {/* Single line ellipsis */}
<p className="line-clamp-3">        {/* 3 lines max */}
```

## Animations

### AOS (Animate On Scroll)

Add to any element for fade-in animation:

```typescript
<div data-aos="fade-up">              {/* Fade in from bottom */}
<div data-aos="fade-right">           {/* Fade in from right */}
<div data-aos="fade-left">            {/* Fade in from left */}
<div data-aos-delay="100">            {/* Delay animation */}
<div data-aos-offset="100">           {/* Trigger offset */}
```

### Tailwind Animations

```typescript
<div className="animate-scroll">     {/* Custom scroll animation */}
<div className="animate-running-light"> {/* Custom light animation */}
```

## React Patterns

### State Management

```typescript
// Simple state
const [isOpen, setIsOpen] = useState(false);

// State with initial value
const [items, setItems] = useState<Item[]>([]);

// State with object
const [form, setForm] = useState({
  name: '',
  email: ''
});
```

### Effects

```typescript
// Run once on mount
useEffect(() => {
  initializeAOS();
}, []);

// Run when dependency changes
useEffect(() => {
  updateContent(item);
}, [item]);

// Cleanup on unmount
useEffect(() => {
  const handler = () => handleEvent();
  window.addEventListener('resize', handler);
  
  return () => window.removeEventListener('resize', handler);
}, []);
```

### Event Handling

```typescript
// Prevent default behavior
const handleNavClick = (e: Event) => {
  e.preventDefault();
  // Handle click
};

// Type casting
const target = e.target as HTMLInputElement;
const value = target.value;

// Event delegation
<div onClick={handleParentClick}>
  <button onClick={(e) => e.stopPropagation()}>
    Click me
  </button>
</div>
```

## Performance Tips

### 1. Image Optimization
```typescript
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/profile.jpg"
  alt="Profile"
  width={500}
  height={500}
/>
```

### 2. Code Splitting
```typescript
// Dynamic imports for heavy components
const HeavyComponent = dynamic(() => import('./Heavy'), {
  loading: () => <p>Loading...</p>
});
```

### 3. Memoization
```typescript
import { memo } from 'react';

const ExpensiveComponent = memo(({ data }) => {
  return <div>{data}</div>;
});
```

## Accessibility

### Semantic HTML
```typescript
// Good: Semantic HTML
<header></header>
<nav></nav>
<main></main>
<section></section>
<footer></footer>

// Alt text for images
<img src="" alt="Descriptive text" />

// ARIA labels
<button aria-label="Open menu">Menu</button>
```

### Color Contrast

- Ensure text has sufficient contrast
- Don't rely on color alone
- Use a contrast checker tool

## Error Handling

```typescript
try {
  const response = await fetch('/api/data');
  const data = await response.json();
} catch (error) {
  console.error('Error:', error);
  // Show error UI
}

// React error boundary
useEffect(() => {
  try {
    AOS.init();
  } catch (error) {
    console.warn('AOS not available');
  }
}, []);
```

## Testing

### Manual Testing Checklist

- [ ] Mobile responsive (test on 320px, 768px, 1024px)
- [ ] All links work
- [ ] Images load
- [ ] Forms submit
- [ ] Animations play smoothly
- [ ] No console errors
- [ ] Fast load time
- [ ] SEO friendly

### Browser Testing

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

## Common Mistakes to Avoid

❌ **Don't:**
```typescript
// Missing keys in lists
{items.map((item) => <div>{item}</div>)}

// Using index as key
{items.map((item, idx) => <div key={idx}>{item}</div>)}

// Large inline functions
<button onClick={() => doSomething()}>Click</button>

// Nested ternaries
{a ? b ? c : d : e ? f : g}

// Missing TypeScript types
function myFunction(data) { }

// State mutation
state.name = 'new name'; // Wrong!
setState({...state, name: 'new name'}); // Right!
```

✅ **Do:**
```typescript
// Use unique keys
{items.map((item) => <div key={item.id}>{item}</div>)}

// Extract functions
const handleClick = () => doSomething();
<button onClick={handleClick}>Click</button>

// Simple ternaries
{isOpen && <Menu />}

// Proper types
function myFunction(data: string): void { }

// Immutable updates
setState({...state, name: 'new name'});
```

## Resources

- **Tailwind CSS**: https://tailwindcss.com/docs
- **React Hooks**: https://react.dev/reference/react
- **Next.js**: https://nextjs.org/docs
- **TypeScript**: https://www.typescriptlang.org/docs/
- **Accessibility**: https://www.w3.org/WAI/

---

**Keep the code clean, organized, and maintainable!** 🎯
