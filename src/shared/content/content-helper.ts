import content from './content.json';

type ContentPath = string[];

interface Section {
  id: string;
  type: string;
  title: string;
  subtitle: string;
  tagline: string;
  image?: {
    src: string;
    alt: string;
  };
  callToAction?: {
    text: string;
    href: string;
    icon: string;
  };
  callToAction2?: {
    text: string;
    href: string;
    icon: string;
  };
  prompt?: string;
  [key: string]: any;
}

type SectionKey = 'hero' | 'features' | 'contentOne' | string;

interface Content {
  pages: Record<string, any>;
  sections: {
    [K in SectionKey]: Section;
  };
  navigation: Record<string, any>;
}

// Type assertion for the content object
const typedContent = content as Content;

/**
 * Safely access nested content properties using dot notation
 * @param path - Path to the content (e.g., 'home.hero.title' or 'sections.hero')
 * @param defaultValue - Value to return if path doesn't exist
 * @returns The content value or default value
 */
export const getContent = (path: string, defaultValue: any = ''): any => {
  const keys = path.split('.');
  let current: any = typedContent;

  // Handle the nested structure
  if (keys[0] === 'home') {
    // For home page content, look in sections
    const sectionKey = keys[1] as SectionKey;
    if (sectionKey && sectionKey in typedContent.sections) {
      current = typedContent.sections[sectionKey];
      // Remove the first two keys (home and section name)
      keys.splice(0, 2);
    }
  } else if (keys[0] === 'sections') {
    // For section content, look directly in sections
    const sectionKey = keys[1] as SectionKey;
    if (sectionKey && sectionKey in typedContent.sections) {
      current = typedContent.sections[sectionKey];
      // Remove the first two keys (sections and section name)
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
  let current: any = typedContent;

  // Handle the nested structure
  if (keys[0] === 'home') {
    // For home page content, look in sections
    const sectionKey = keys[1] as SectionKey;
    if (sectionKey && sectionKey in typedContent.sections) {
      current = typedContent.sections[sectionKey];
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
  let current: any = typedContent;

  // Handle the nested structure
  if (keys[0] === 'home') {
    // For home page content, look in sections
    const sectionKey = keys[1] as SectionKey;
    if (sectionKey && sectionKey in typedContent.sections) {
      current = typedContent.sections[sectionKey];
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