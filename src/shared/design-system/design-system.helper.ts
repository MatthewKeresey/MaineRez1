import { designSystem } from './design-system';
import type { DesignSystem } from './design-system.types';

type SpacingKey = keyof typeof designSystem.spacing;
type BorderRadiusKey = keyof typeof designSystem.borderRadius;
type ShadowKey = keyof typeof designSystem.shadows;
type BreakpointKey = keyof typeof designSystem.breakpoints;
type ZIndexKey = keyof typeof designSystem.zIndex;
type TransitionDurationKey = keyof typeof designSystem.transitions.duration;
type TransitionTimingKey = keyof typeof designSystem.transitions.timing;

/**
 * Get a color value from the design system
 * @param path - The path to the color (e.g., 'primary.main', 'neutral.gray500')
 */
export const getColor = (path: string): string => {
  const parts = path.split('.');
  let value: any = designSystem.colors;
  
  for (const part of parts) {
    if (value[part] === undefined) {
      console.warn(`Color not found: ${path}`);
      return designSystem.colors.neutral.gray500; // Fallback color
    }
    value = value[part];
  }
  
  return value;
};

/**
 * Get a typography value from the design system
 * @param path - The path to the typography value (e.g., 'fontSize.16', 'fontWeight.600')
 */
export const getTypography = (path: string): string | number => {
  const parts = path.split('.');
  let value: any = designSystem.typography;
  
  for (const part of parts) {
    if (value[part] === undefined) {
      console.warn(`Typography value not found: ${path}`);
      return designSystem.typography.fontSize[16]; // Fallback value
    }
    value = value[part];
  }
  
  return value;
};

/**
 * Get a spacing value from the design system
 * @param key - The spacing key (e.g., 4, 8, 16)
 */
export const getSpacing = (key: SpacingKey): string => {
  const value = designSystem.spacing[key];
  if (value === undefined) {
    console.warn(`Spacing value not found: ${key}`);
    return designSystem.spacing[16]; // Fallback spacing
  }
  return value;
};

/**
 * Get a border radius value from the design system
 * @param key - The border radius key (e.g., 2, 4, 8)
 */
export const getBorderRadius = (key: BorderRadiusKey): string => {
  const value = designSystem.borderRadius[key];
  if (value === undefined) {
    console.warn(`Border radius value not found: ${key}`);
    return designSystem.borderRadius[4]; // Fallback border radius
  }
  return value;
};

/**
 * Get a shadow value from the design system
 * @param key - The shadow key (e.g., 1, 2, 3)
 */
export const getShadow = (key: ShadowKey): string => {
  const value = designSystem.shadows[key];
  if (value === undefined) {
    console.warn(`Shadow value not found: ${key}`);
    return designSystem.shadows[2]; // Fallback shadow
  }
  return value;
};

/**
 * Get a breakpoint value from the design system
 * @param key - The breakpoint key (e.g., 640, 768, 1024)
 */
export const getBreakpoint = (key: BreakpointKey): string => {
  const value = designSystem.breakpoints[key];
  if (value === undefined) {
    console.warn(`Breakpoint value not found: ${key}`);
    return designSystem.breakpoints[768]; // Fallback breakpoint
  }
  return value;
};

/**
 * Get a z-index value from the design system
 * @param key - The z-index key (e.g., 10, 20, 30)
 */
export const getZIndex = (key: ZIndexKey): number | string => {
  if (key === 'auto') {
    return designSystem.zIndex.auto;
  }
  const value = designSystem.zIndex[key];
  if (value === undefined) {
    console.warn(`Z-index value not found: ${key}`);
    return designSystem.zIndex[10]; // Fallback z-index
  }
  return value;
};

/**
 * Get a transition duration value from the design system
 * @param key - The duration key (e.g., 150, 300, 500)
 */
export const getTransitionDuration = (key: TransitionDurationKey): string => {
  const value = designSystem.transitions.duration[key];
  if (value === undefined) {
    console.warn(`Transition duration value not found: ${key}`);
    return designSystem.transitions.duration[300]; // Fallback duration
  }
  return value;
};

/**
 * Get a transition timing value from the design system
 * @param key - The timing key (e.g., 1, 2, 3, 4)
 */
export const getTransitionTiming = (key: TransitionTimingKey): string => {
  const value = designSystem.transitions.timing[key];
  if (value === undefined) {
    console.warn(`Transition timing value not found: ${key}`);
    return designSystem.transitions.timing[4]; // Fallback timing
  }
  return value;
};

/**
 * Get a content value from the design system
 * @param path - The path to the content (e.g., 'header.title', 'home.hero.subtitle')
 */
export const getContent = (path: string): string => {
  const parts = path.split('.');
  let value: any = designSystem.content;
  
  for (const part of parts) {
    if (value[part] === undefined) {
      console.warn(`Content value not found: ${path}`);
      return ''; // Fallback empty string
    }
    value = value[part];
  }
  
  return value;
};

/**
 * Get a nested content value from the design system
 * @param path - The path to the content (e.g., 'home.features.items.food.title')
 */
export const getNestedContent = (path: string): any => {
  const parts = path.split('.');
  let value: any = designSystem.content;
  
  for (const part of parts) {
    if (value[part] === undefined) {
      console.warn(`Nested content value not found: ${path}`);
      return null; // Fallback null
    }
    value = value[part];
  }
  
  return value;
}; 