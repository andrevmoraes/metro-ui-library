# 🎨 Metro UI Library

Metro UI components library inspired by Windows Phone design for React/Next.js applications.

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
      
      <MetroButton variant="primary">
        Click me
      </MetroButton>
    </div>
  );
}
```

## Components

- **MetroTile**: Windows Phone style tiles (small, medium, wide, large)
- **MetroButton**: Metro style buttons (primary, secondary, ghost, danger)
- **Theme System**: Complete light/dark theme support
- **Metro Colors**: Windows Phone inspired color palette

## License

MIT
