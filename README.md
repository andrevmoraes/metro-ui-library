# 🎨 Metro UI Library

Metro UI components library inspired by Windows Phone design for React/Next.js applications.

**✨ Works with any React project** - No Tailwind CSS required! Styles are bundled with the components using CSS Modules.

## Installation

```bash
npm install @andrevmoraes/metro-ui
```

### GitHub Packages Configuration

Add to your project's `.npmrc`:

```
@andrevmoraes:registry=https://npm.pkg.github.com
```

## Usage

```tsx
import { MetroTile, MetroButton } from '@andrevmoraes/metro-ui';
import { ThemeColors, MetroColors } from '@andrevmoraes/metro-ui';

export default function MyComponent() {
  return (
    <div>
      <MetroTile color={MetroColors.blue} size="medium">
        <h2>My Tile</h2>
      </MetroTile>
      
      <MetroButton variant="primary" accentColor={MetroColors.purple}>
        Click me
      </MetroButton>
    </div>
  );
}
```

## Components

- **MetroTile**: Windows Phone style tiles (small, medium, wide, large)
- **MetroButton**: Metro style buttons (primary, secondary, ghost, danger)
- **MetroInput**: Metro style input with focus states
- **MetroHeader**: Metro style page headers with optional back button
- **MetroLoading**: Windows-style loading indicator
- **MetroModal**: Metro style modals
- **MetroStatsCard**: Statistical cards with Metro styling
- **Theme System**: Complete light/dark theme support
- **Metro Colors**: Windows Phone inspired color palette

## Customization

All components support customization through props and CSS classes:

```tsx
// Via props
<MetroButton 
  accentColor="#FF6B6B" 
  size="lg" 
  fullWidth
>
  Custom Button
</MetroButton>

// Via className
<MetroButton className="my-custom-class">
  Button
</MetroButton>

// Via inline styles
<MetroButton style={{ marginTop: '20px' }}>
  Button
</MetroButton>
```

## Compatibility

- ✅ React 18/19
- ✅ Next.js
- ✅ Vite
- ✅ Create React App
- ✅ Works with any CSS approach (CSS Modules, Styled Components, plain CSS)
- ✅ PWA compatible

## License

MIT
