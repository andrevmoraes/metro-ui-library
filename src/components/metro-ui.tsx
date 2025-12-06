/**
 * 🎨 METRO UI - COMPONENTES BASE
 * Componentes reutilizáveis no estilo Windows Phone / Metro
 */

import React, { ReactNode, forwardRef } from 'react';
import { MetroColors } from '../constants/metro-design-system';
import styles from './metro-ui.module.css';

// ============================================
// METRO BUTTON
// ============================================

interface MetroButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'base' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  accentColor?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function MetroButton({
  children,
  onClick,
  variant = 'primary',
  size = 'base',
  disabled = false,
  fullWidth = false,
  accentColor = MetroColors.blue,
  className = '',
  type = 'button',
}: MetroButtonProps) {
  const sizeClass = {
    sm: styles.buttonSm,
    base: styles.buttonBase,
    lg: styles.buttonLg,
  }[size];

  const variantClass = {
    primary: styles.buttonPrimary,
    secondary: styles.buttonSecondary,
    ghost: styles.buttonGhost,
    danger: styles.buttonDanger,
  }[variant];

  const widthClass = fullWidth ? styles.buttonFullWidth : '';

  const style: React.CSSProperties = {};
  if (variant === 'primary' || variant === 'danger') {
    style.backgroundColor = variant === 'danger' ? MetroColors.red : accentColor;
  }
  if (variant === 'secondary' || variant === 'ghost') {
    style.color = accentColor;
    if (variant === 'secondary') {
      style.borderColor = accentColor;
    }
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.metroButton} ${sizeClass} ${variantClass} ${widthClass} ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}

// ============================================
// METRO TILE (Card quadrado/retangular)
// Sistema de Tiles do Windows Phone
// ============================================

interface MetroTileProps {
  children: ReactNode;
  color?: string;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large' | 'wide';
  className?: string;
  hoverable?: boolean;
}

export function MetroTile({
  children,
  color = MetroColors.blue,
  onClick,
  size = 'medium',
  className = '',
  hoverable = true,
}: MetroTileProps) {
  const sizeClass = {
    small: styles.tileSmall,
    medium: styles.tileMedium,
    wide: styles.tileWide,
    large: styles.tileLarge,
  }[size];

  const hoverClass = hoverable ? styles.tileHoverable : '';

  return (
    <div
      onClick={onClick}
      className={`${styles.metroTile} ${sizeClass} ${hoverClass} ${className}`}
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );
}

// ============================================
// METRO INPUT
// ============================================

interface MetroInputProps {
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  accentColor?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
  autoComplete?: string;
}

export const MetroInput = forwardRef<HTMLInputElement, MetroInputProps>(function MetroInput({
  type = 'text',
  value,
  onChange,
  placeholder,
  disabled = false,
  error = false,
  fullWidth = false,
  accentColor = MetroColors.blue,
  bgColor = '#FFFFFF',
  textColor = '#1A1A1A',
  className = '',
  autoComplete,
}, ref) {
  const widthClass = fullWidth ? styles.inputFullWidth : '';
  const errorClass = error ? styles.inputError : '';

  return (
    <input
      ref={ref}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      autoComplete={autoComplete}
      className={`${styles.metroInput} ${errorClass} ${widthClass} ${className}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderColor: error ? MetroColors.red : '#666666',
      }}
      onFocus={(e) => {
        e.target.style.borderColor = accentColor;
      }}
      onBlur={(e) => {
        if (!error) {
          e.target.style.borderColor = '#666666';
        }
      }}
    />
  );
});

// ============================================
// METRO HEADER
// ============================================

interface MetroHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  onBack?: () => void;
  accentColor?: string;
  textColor?: string;
  className?: string;
}

export function MetroHeader({
  title,
  subtitle,
  action,
  actionLabel,
  onAction,
  onBack,
  accentColor = MetroColors.blue,
  textColor = '#FFFFFF',
  className = '',
}: MetroHeaderProps) {
  return (
    <header className={`${styles.metroHeader} ${className}`}>
      <div className={styles.headerContainer}>
        <div>
          {onBack && (
            <button
              onClick={onBack}
              className={styles.headerBack}
              style={{ color: accentColor }}
            >
              ← voltar
            </button>
          )}
          <h1
            className={styles.headerTitle}
            style={{ color: textColor }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className={styles.headerSubtitle} style={{ color: textColor }}>
              {subtitle}
            </p>
          )}
        </div>
        {action && <div>{action}</div>}
        {actionLabel && onAction && (
          <button
            onClick={onAction}
            className={styles.headerAction}
            style={{ color: accentColor }}
          >
            {actionLabel}
          </button>
        )}
      </div>
    </header>
  );
}

// ============================================
// METRO LOADING
// ============================================

interface MetroLoadingProps {
  size?: 'sm' | 'base' | 'lg';
  color?: string;
  text?: string;
  fullScreen?: boolean;
}

export function MetroLoading({
  size = 'base',
  color = MetroColors.blue,
  text,
  fullScreen = false,
}: MetroLoadingProps) {
  const sizeMap = {
    sm: { container: 32, dot: 4 },
    base: { container: 48, dot: 6 },
    lg: { container: 64, dot: 8 },
  };

  const { container, dot } = sizeMap[size];

  const content = (
    <div className={styles.metroLoading}>
      <div 
        className={styles.loadingContainer}
        style={{ width: container, height: container }}
      >
        {[0, 1, 2, 3, 4, 5].map((index) => {
          const angle = (index * 60 * Math.PI) / 180;
          const radius = container / 2 - dot;
          const x = container / 2 + radius * Math.cos(angle - Math.PI / 2);
          const y = container / 2 + radius * Math.sin(angle - Math.PI / 2);

          return (
            <div
              key={index}
              className={styles.loadingDot}
              style={{
                width: dot,
                height: dot,
                left: x - dot / 2,
                top: y - dot / 2,
                backgroundColor: color,
                animationDelay: `${index * 0.1}s`,
              }}
            />
          );
        })}
      </div>
      {text && (
        <p className={styles.loadingText} style={{ color }}>
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className={styles.loadingFullScreen}>
        {content}
      </div>
    );
  }

  return content;
}

// ============================================
// METRO MODAL
// ============================================

interface MetroModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
}

export function MetroModal({
  isOpen,
  onClose,
  children,
  maxWidth = 'md',
}: MetroModalProps) {
  if (!isOpen) return null;

  const maxWidthClass = {
    sm: styles.modalSm,
    md: styles.modalMd,
    lg: styles.modalLg,
    xl: styles.modalXl,
  }[maxWidth];

  return (
    <div
      className={styles.metroModal}
      onClick={onClose}
    >
      <div
        className={`${styles.modalContent} ${maxWidthClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

// ============================================
// METRO STATS CARD
// ============================================

interface MetroStatsCardProps {
  value: string | number;
  label: string;
  color?: string;
  bgColor?: string;
  icon?: ReactNode;
  className?: string;
}

export function MetroStatsCard({
  value,
  label,
  color = '#FFFFFF',
  bgColor = '#1A1A1A',
  icon,
  className = '',
}: MetroStatsCardProps) {
  return (
    <div
      className={`${styles.metroStatsCard} ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className={styles.statsCardContent}>
        <div>
          <p className={styles.statsValue} style={{ color }}>
            {value}
          </p>
          <p className={styles.statsLabel} style={{ color }}>
            {label}
          </p>
        </div>
        {icon && <div style={{ color }}>{icon}</div>}
      </div>
    </div>
  );
}
