import content from './content.json';

type ContentPath = string[];

interface Section {
  id: string;
  type: string;
  title: string;
  subtitle: string;
  tagline: string;
  [key: string]: any;
}

interface Sections {
  hero: Section;
  features: Section;
  contentOne: Section;
  [key: string]: Section;
}

interface Content {
  pages: Record<string, any>;
  sections: Sections;
  navigation: Record<string, any>;
}

/**
 * Safely access nested content properties using dot notation
 * @param path - Path to the content (e.g., 'home.hero.title')
 * @param defaultValue - Value to return if path doesn't exist
 * @returns The content value or default value
 */
export const getContent = (path: string, defaultValue: string = ''): string => {
  const keys = path.split('.');
  let current: any = content as Content;

  // Handle the nested structure
  if (keys[0] === 'home') {
    // For home page content, look in sections
    if (keys[1] && content.sections[keys[1] as keyof Sections]) {
      current = content.sections[keys[1] as keyof Sections];
      // Remove the first two keys (home and section name)
      keys.splice(0, 2);
    }
  }

  for (const key of keys) {
    if (current === undefined || current === null) {
      return defaultValue;
    }
    current = current[key];
  }

  return current ?? defaultValue;
};

/**
 * Get an array of content items
 * @param path - Path to the content array
 * @returns Array of content items or empty array
 */
export const getContentArray = (path: string): any[] => {
  const keys = path.split('.');
  let current: any = content as Content;

  // Handle the nested structure
  if (keys[0] === 'home') {
    // For home page content, look in sections
    if (keys[1] && content.sections[keys[1] as keyof Sections]) {
      current = content.sections[keys[1] as keyof Sections];
      // Remove the first two keys (home and section name)
      keys.splice(0, 2);
    }
  }

  for (const key of keys) {
    if (current === undefined || current === null) {
      return [];
    }
    current = current[key];
  }

  return Array.isArray(current) ? current : [];
};

/**
 * Get an object of content items
 * @param path - Path to the content object
 * @returns Object of content items or empty object
 */
export const getContentObject = (path: string): Record<string, any> => {
  const keys = path.split('.');
  let current: any = content as Content;

  // Handle the nested structure
  if (keys[0] === 'home') {
    // For home page content, look in sections
    if (keys[1] && content.sections[keys[1] as keyof Sections]) {
      current = content.sections[keys[1] as keyof Sections];
      // Remove the first two keys (home and section name)
      keys.splice(0, 2);
    }
  }

  for (const key of keys) {
    if (current === undefined || current === null) {
      return {};
    }
    current = current[key];
  }

  return typeof current === 'object' && current !== null ? current : {};
}; 