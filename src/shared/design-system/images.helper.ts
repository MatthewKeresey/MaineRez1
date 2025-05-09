import { images } from './images';
import type { Images } from './images.types';

/**
 * Get a main image and its alt text
 * @param path - The path to the image (e.g., 'hero.main', 'team.sarah.main')
 */
export const getMainImage = (path: string): { src: string; alt: string } => {
  const parts = path.split('.');
  let value: any = images;
  
  for (const part of parts) {
    if (value[part] === undefined) {
      console.warn(`Image not found: ${path}`);
      return {
        src: '/images/placeholder.jpg',
        alt: 'Image not found',
      };
    }
    value = value[part];
  }
  
  return {
    src: value,
    alt: value + 'Alt',
  };
};

/**
 * Get a gallery of images
 * @param path - The path to the gallery (e.g., 'content.waterfront.gallery')
 */
export const getGallery = (path: string): Array<{ src: string; alt: string }> => {
  const parts = path.split('.');
  let value: any = images;
  
  for (const part of parts) {
    if (value[part] === undefined) {
      console.warn(`Gallery not found: ${path}`);
      return [];
    }
    value = value[part];
  }
  
  return value;
};

/**
 * Get a thumbnail image and its alt text
 * @param path - The path to the image (e.g., 'features.food.thumbnail')
 */
export const getThumbnail = (path: string): { src: string; alt: string } => {
  const parts = path.split('.');
  let value: any = images;
  
  for (const part of parts) {
    if (value[part] === undefined) {
      console.warn(`Thumbnail not found: ${path}`);
      return {
        src: '/images/placeholder-thumb.jpg',
        alt: 'Thumbnail not found',
      };
    }
    value = value[part];
  }
  
  return {
    src: value,
    alt: value + 'Alt',
  };
};

/**
 * Get a UI icon
 * @param path - The path to the icon (e.g., 'ui.icons.arrow')
 */
export const getIcon = (path: string): { src: string; alt: string } => {
  const parts = path.split('.');
  let value: any = images;
  
  for (const part of parts) {
    if (value[part] === undefined) {
      console.warn(`Icon not found: ${path}`);
      return {
        src: '/images/ui/icons/placeholder.svg',
        alt: 'Icon not found',
      };
    }
    value = value[part];
  }
  
  return {
    src: value,
    alt: value + 'Alt',
  };
};

/**
 * Get a background image
 * @param path - The path to the background (e.g., 'ui.backgrounds.pattern')
 */
export const getBackground = (path: string): { src: string; alt: string } => {
  const parts = path.split('.');
  let value: any = images;
  
  for (const part of parts) {
    if (value[part] === undefined) {
      console.warn(`Background not found: ${path}`);
      return {
        src: '/images/ui/backgrounds/placeholder.svg',
        alt: 'Background not found',
      };
    }
    value = value[part];
  }
  
  return {
    src: value,
    alt: value + 'Alt',
  };
}; 