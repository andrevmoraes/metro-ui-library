/**
 * 🎨 METRO DESIGN SYSTEM
 * Sistema de design inspirado no Windows Phone / Metro UI
 * Mantém suporte total a temas claro e escuro
 */

// ============================================
// CORES PRIMÁRIAS (Metro Colors)
// ============================================

export const MetroColors = {
  // Cores de acento (inspiradas no Windows Phone)
  blue: '#0078D7',
  teal: '#00B7C3',
  red: '#E81123',
  green: '#107C10',
  orange: '#F09609',
  purple: '#8E5AA5',
  pink: '#E3008C',
  lime: '#8CBD18',
  
  // Cores de treino (vibrantes)
  workout: {
    blue: '#0066FF',
    purple: '#6B46C1',
    green: '#059669',
    orange: '#EA580C',
    pink: '#DB2777',
    teal: '#0891B2',
  },
} as const;

// ============================================
// PALETA DE CORES POR TEMA
// ============================================

export const ThemeColors = {
  light: {
    background: '#FFFFFF',
    backgroundSecondary: '#F5F5F5',
    backgroundTertiary: '#E8E8E8',
    surface: '#FFFFFF',
    surfaceElevated: '#FAFAFA',
    text: '#1A1A1A',
    textSecondary: '#666666',
    textTertiary: '#999999',
    textInverted: '#FFFFFF',
    border: '#E0E0E0',
    borderStrong: '#CCCCCC',
    divider: '#F0F0F0',
    hover: '#F5F5F5',
    active: '#EBEBEB',
    disabled: '#CCCCCC',
    overlay: 'rgba(0, 0, 0, 0.4)',
  },
  
  dark: {
    background: '#000000',
    backgroundSecondary: '#111111',
    backgroundTertiary: '#1A1A1A',
    surface: '#0A0A0A',
    surfaceElevated: '#151515',
    text: '#FFFFFF',
    textSecondary: '#B3B3B3',
    textTertiary: '#808080',
    textInverted: '#000000',
    border: '#2A2A2A',
    borderStrong: '#404040',
    divider: '#1A1A1A',
    hover: '#1A1A1A',
    active: '#262626',
    disabled: '#404040',
    overlay: 'rgba(0, 0, 0, 0.7)',
  },
} as const;

// ============================================
// TIPOGRAFIA
// ============================================

export const Typography = {
  fontFamily: {
    primary: '"Segoe UI", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    mono: '"Consolas", "Courier New", monospace',
  },
  
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '32px',
    '4xl': '42px',
    '5xl': '56px',
    '6xl': '72px',
  },
  
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
  
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.05em',
    wider: '0.1em',
  },
} as const;

// ============================================
// ESPAÇAMENTO
// ============================================

export const Spacing = {
  0: '0',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
} as const;

// ============================================
// BORDER RADIUS
// ============================================

export const BorderRadius = {
  none: '0',
  sm: '2px',
  base: '4px',
  lg: '6px',
  full: '9999px',
} as const;

// ============================================
// SOMBRAS
// ============================================

export const Shadows = {
  none: 'none',
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  base: '0 2px 4px rgba(0, 0, 0, 0.08)',
  md: '0 4px 8px rgba(0, 0, 0, 0.12)',
  lg: '0 8px 16px rgba(0, 0, 0, 0.15)',
  xl: '0 12px 24px rgba(0, 0, 0, 0.18)',
} as const;

// ============================================
// TRANSIÇÕES
// ============================================

export const Transitions = {
  duration: {
    fast: '100ms',
    base: '200ms',
    slow: '300ms',
  },
  timing: {
    ease: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0.0, 1, 1)',
    easeOut: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    linear: 'linear',
  },
} as const;

// ============================================
// Z-INDEX
// ============================================

export const ZIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  overlay: 1200,
  modal: 1300,
  popover: 1400,
  toast: 1500,
} as const;

// ============================================
// BREAKPOINTS
// ============================================

export const Breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ============================================
// UTILITÁRIOS
// ============================================

export const getThemeColors = (isDark: boolean) => 
  isDark ? ThemeColors.dark : ThemeColors.light;

export const getAccentColor = (color: keyof typeof MetroColors) => 
  MetroColors[color];

// ============================================
// TYPES
// ============================================

export type MetroColorKey = keyof typeof MetroColors;
export type ThemeColorKey = keyof typeof ThemeColors.light;
export type TypographySizeKey = keyof typeof Typography.fontSize;
export type SpacingKey = keyof typeof Spacing;
