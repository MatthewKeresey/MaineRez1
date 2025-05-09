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
  attractions: Record<string, any>;
  restaurants: Record<string, any>;
  arts: Record<string, any>;
  outdoors: Record<string, any>;
}

let contentCache: Content | null = null;

/**
 * Load content from content.json
 */
export const loadContent = async (): Promise<Content> => {
  if (contentCache) {
    return contentCache;
  }

  try {
    const response = await fetch('/content.json');
    if (!response.ok) {
      throw new Error('Failed to load content');
    }
    contentCache = await response.json();
    return contentCache;
  } catch (error) {
    console.error('Error loading content:', error);
    return {} as Content;
  }
};

/**
 * Safely access nested content properties using dot notation
 * @param path - Path to the content (e.g., 'home.hero.title')
 * @param defaultValue - Value to return if path doesn't exist
 * @returns The content value or default value
 */
export const getContent = async (path: string, defaultValue: string = ''): Promise<string> => {
  const content = await loadContent();
  const keys = path.split('.');
  let current: any = content;

  // Handle the nested structure
  if (keys[0] === 'home') {
    // For home page content, look in sections
    const sectionKey = keys[1] as SectionKey;
    if (sectionKey && sectionKey in content.sections) {
      current = content.sections[sectionKey];
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
export const getContentArray = async (path: string): Promise<any[]> => {
  const content = await loadContent();
  const keys = path.split('.');
  let current: any = content;

  // Handle the nested structure
  if (keys[0] === 'home') {
    // For home page content, look in sections
    const sectionKey = keys[1] as SectionKey;
    if (sectionKey && sectionKey in content.sections) {
      current = content.sections[sectionKey];
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
export const getContentObject = async (path: string): Promise<Record<string, any>> => {
  const content = await loadContent();
  const keys = path.split('.');
  let current: any = content;

  // Handle the nested structure
  if (keys[0] === 'home') {
    // For home page content, look in sections
    const sectionKey = keys[1] as SectionKey;
    if (sectionKey && sectionKey in content.sections) {
      current = content.sections[sectionKey];
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