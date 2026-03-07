# Theme and Color Configuration Guide

## Overview
This portfolio uses a comprehensive theme system with `next-themes` for dark/light mode switching and CSS variables for color consistency across all pages. Colors automatically adjust based on the selected theme.

## Features

### 1. Theme Toggle Button
The theme toggle button appears in the navigation bar on all pages. Click the button (☀️/🌙) to switch between light and dark modes.

### 2. Light Theme Colors

#### Primary Colors
- `--color-primary`: #000000 (Black)
- `--color-secondary`: #71717A (Gray)
- `--color-background`: #FFFFFF (White)
- `--color-background-alt`: #F4F4F5 (Light Gray)
- `--color-border`: #E4E4E7 (Border Gray)
- `--color-text`: #000000 (Black)
- `--color-text-muted`: #71717A (Muted Gray)

#### Component Colors
- **Cards**: White background (#FFFFFF) with light gray border (#E4E4E7)
- **Buttons**: Black background (#000000) with white text
- **Inputs**: Light gray background (#F4F4F5) with border gray
- **Badges**: Light gray background (#F4F4F5) with black text

#### Accent Colors
- `--color-accent-blue`: #3B82F6
- `--color-accent-purple`: #A855F7
- `--color-accent-green`: #10B981
- `--color-accent-orange`: #F97316
- `--color-accent-pink`: #EC4899
- `--color-accent-teal`: #14B8A6
- `--color-accent-red`: #EF4444
- `--color-accent-yellow`: #FBBF24
- `--color-accent-indigo`: #6366F1

### 3. Dark Theme Colors

#### Primary Colors
- `--color-primary`: #FFFFFF (White)
- `--color-secondary`: #A1A1AA (Light Gray)
- `--color-background`: #09090B (Very Dark)
- `--color-background-alt`: #18181B (Dark Gray)
- `--color-border`: #27272A (Border Dark)
- `--color-text`: #FAFAFA (Off White)
- `--color-text-muted`: #A1A1AA (Muted Light Gray)

#### Component Colors
- **Cards**: Dark background (#18181B) with dark border (#27272A)
- **Buttons**: White background (#FFFFFF) with black text
- **Inputs**: Dark background (#18181B) with dark border
- **Badges**: Dark gray background (#27272A) with light text

#### Accent Colors (Brighter for Dark Mode)
- `--color-accent-blue`: #60A5FA (Brighter Blue)
- `--color-accent-purple`: #C084FC (Brighter Purple)
- `--color-accent-green`: #34D399 (Brighter Green)
- `--color-accent-orange`: #FB923C (Brighter Orange)
- `--color-accent-pink`: #F472B6 (Brighter Pink)
- `--color-accent-teal`: #2DD4BF (Brighter Teal)
- `--color-accent-red`: #F87171 (Brighter Red)
- `--color-accent-yellow`: #FCD34D (Brighter Yellow)
- `--color-accent-indigo`: #818CF8 (Brighter Indigo)

### 4. Using Colors in Components

#### In Tailwind Classes:
```jsx
<div className="bg-accent-blue text-accent-purple dark:text-dark-primary">
  Content
</div>
```

#### In CSS Variables:
```css
.my-element {
  color: var(--color-primary);
  border-color: var(--color-border);
  background-color: var(--color-background);
}
```

#### In TypeScript/JavaScript:
```tsx
import { colors } from '@/app/styles/colors';

export function MyComponent() {
  // Access theme-specific colors
  const lightBlue = colors.light.background.default;
  const darkBlue = colors.dark.background.default;
  
  return (
    <div style={{ 
      backgroundColor: 'var(--color-background)',
      color: 'var(--color-text)'
    }}>
      Theme-aware content
    </div>
  );
}
```

### 5. Using Theme Hook
For components that need to react to theme changes:

```tsx
'use client';

import { useAppTheme } from '@/app/hooks/useAppTheme';

export function MyComponent() {
  const { isDark, isLight, toggleTheme } = useAppTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current: {isDark ? 'Dark' : 'Light'} Mode
    </button>
  );
}
```

### 6. Theme Provider
The app is wrapped with `next-themes` ThemeProvider in `app/layout.tsx`. This automatically:
- Persists theme preference to localStorage
- Respects system preferences on first load
- Prevents hydration mismatch with `suppressHydrationWarning`

## Files Structure

- **`app/providers.tsx`** - Theme provider wrapper with next-themes
- **`app/components/ThemeToggle.tsx`** - Theme toggle button component
- **`app/hooks/useAppTheme.ts`** - Hook for accessing theme state and functions
- **`app/styles/colors.ts`** - Comprehensive color configuration for both themes
- **`app/globals.css`** - Global CSS variables that change with theme
- **`tailwind.config.ts`** - Tailwind configuration with theme-aware colors
- **`app/layout.tsx`** - Root layout with Providers wrapper

## Color Usage Guidelines

### Light Theme Best Practices
1. Use dark text (#000000) on light backgrounds (#FFFFFF)
2. Use borders (#E4E4E7) for subtle separation
3. Accent colors work well at full saturation
4. Hover states use background-alt (#F4F4F5)

### Dark Theme Best Practices
1. Use light text (#FAFAFA) on dark backgrounds (#09090B)
2. Use dark borders (#27272A) for subtle separation
3. Brighter accent colors for better contrast
4. Hover states use background-alt (#18181B)

### Example: Theme-Aware Component
```tsx
<div className="bg-white dark:bg-zinc-900 text-black dark:text-white border border-light dark:border-dark p-4 rounded-lg">
  <h2 className="text-accent-blue dark:text-blue-400 mb-2">Heading</h2>
  <p className="text-gray-600 dark:text-gray-400">Content</p>
</div>
```

## Customizing Colors

To modify theme colors:

1. **Update CSS Variables** in `app/globals.css`:
   - Edit `:root` for light theme
   - Edit `html.dark` for dark theme

2. **Update Color Objects** in `app/styles/colors.ts`:
   - Modify `colors.light` for light theme colors
   - Modify `colors.dark` for dark theme colors

3. **Update Tailwind Config** in `tailwind.config.ts`:
   - Add custom colors to `extend.colors`

Example of adding a new color:
```css
/* In globals.css */
:root {
  --color-accent-cyan: #06B6D4;
}

html.dark {
  --color-accent-cyan: #22D3EE;
}
```

Then use in components:
```jsx
<div className="text-cyan-500 dark:text-cyan-300">Cyan text</div>
```

## Testing Theme Colors

To verify colors are working correctly:

1. Open the app in light mode
2. Check all components display correctly
3. Toggle to dark mode
4. Verify accent colors are brighter
5. Check text contrast is sufficient
6. Refresh page to verify persistence

## Accessibility Considerations

- **Contrast Ratios**: All color combinations meet WCAG AA standards (4.5:1 for text)
- **Accent Colors**: Brighter in dark mode to maintain readability
- **Focus States**: Use accent colors for interactive element focus
- **Color Blindness**: Avoid relying solely on color to convey information
