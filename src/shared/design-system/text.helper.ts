import { text } from './text';
import type { TextContent, Page, Section, Feature, Business, TeamMember, Button, FormField } from './text.types';

/**
 * Get a text value from the design system
 * @param path - The path to the text (e.g., 'header.title', 'home.hero.subtitle')
 */
export const getText = (path: string): string => {
  const parts = path.split('.');
  let value: any = text;
  
  for (const part of parts) {
    if (value[part] === undefined) {
      console.warn(`Text not found: ${path}`);
      return ''; // Fallback empty string
    }
    value = value[part];
  }
  
  return value;
};

/**
 * Get a nested text object from the design system
 * @param path - The path to the text object (e.g., 'home.features.items.food')
 */
export const getTextObject = (path: string): any => {
  const parts = path.split('.');
  let value: any = text;
  
  for (const part of parts) {
    if (value[part] === undefined) {
      console.warn(`Text object not found: ${path}`);
      return null; // Fallback null
    }
    value = value[part];
  }
  
  return value;
};

/**
 * Get a list of text values from the design system
 * @param path - The path to the text list (e.g., 'home.featuredBusinesses.items.eventide.features')
 */
export const getTextList = (path: string): string[] => {
  const parts = path.split('.');
  let value: any = text;
  
  for (const part of parts) {
    if (value[part] === undefined) {
      console.warn(`Text list not found: ${path}`);
      return []; // Fallback empty array
    }
    value = value[part];
  }
  
  return Array.isArray(value) ? value : [];
};

// Helper to get nested content with type safety
function getNestedContent<T>(path: string, content: any): T | null {
  const keys = path.split('.');
  let current = content;

  for (const key of keys) {
    if (current === undefined || current === null) {
      console.warn(`Path not found: ${path}`);
      return null;
    }
    current = current[key];
  }

  return current as T;
}

// Page helpers
export function getPage(id: string): Page | null {
  return getNestedContent<Page>(`pages.${id}`, text);
}

export function getPageSection(pageId: string, sectionId: string): Section | null {
  const page = getPage(pageId);
  if (!page || !page.sections.includes(sectionId)) {
    console.warn(`Section ${sectionId} not found in page ${pageId}`);
    return null;
  }
  return getNestedContent<Section>(`sections.${sectionId}`, text);
}

// Content item helpers
export function getFeature(id: string): Feature | null {
  return getNestedContent<Feature>(`items.features.${id}`, text);
}

export function getBusiness(id: string): Business | null {
  return getNestedContent<Business>(`items.businesses.${id}`, text);
}

export function getTeamMember(id: string): TeamMember | null {
  return getNestedContent<TeamMember>(`items.team.${id}`, text);
}

// UI element helpers
export function getButton(id: string): Button | null {
  return getNestedContent<Button>(`ui.buttons.${id}`, text);
}

export function getFormField(id: string): FormField | null {
  return getNestedContent<FormField>(`ui.form.${id}`, text);
}

// Generic content access
export function getContent<T>(path: string): T | null {
  return getNestedContent<T>(path, text);
}

// Edit helpers
export function editPage(id: string, updates: Partial<Page>): boolean {
  const pages = text.pages as unknown as Record<string, Page>;
  if (!pages[id]) {
    console.warn(`Page not found: ${id}`);
    return false;
  }
  pages[id] = { ...pages[id], ...updates };
  return true;
}

export function editSection(id: string, updates: Partial<Section>): boolean {
  const sections = text.sections as unknown as Record<string, Section>;
  if (!sections[id]) {
    console.warn(`Section not found: ${id}`);
    return false;
  }
  sections[id] = { ...sections[id], ...updates };
  return true;
}

export function editFeature(id: string, updates: Partial<Feature>): boolean {
  const features = text.items.features as unknown as Record<string, Feature>;
  if (!features[id]) {
    console.warn(`Feature not found: ${id}`);
    return false;
  }
  features[id] = { ...features[id], ...updates };
  return true;
}

export function editBusiness(id: string, updates: Partial<Business>): boolean {
  const businesses = text.items.businesses as unknown as Record<string, Business>;
  if (!businesses[id]) {
    console.warn(`Business not found: ${id}`);
    return false;
  }
  businesses[id] = { ...businesses[id], ...updates };
  return true;
}

export function editTeamMember(id: string, updates: Partial<TeamMember>): boolean {
  const team = text.items.team as unknown as Record<string, TeamMember>;
  if (!team[id]) {
    console.warn(`Team member not found: ${id}`);
    return false;
  }
  team[id] = { ...team[id], ...updates };
  return true;
}

export function editButton(id: string, updates: Partial<Button>): boolean {
  const buttons = text.ui.buttons as unknown as Record<string, Button>;
  if (!buttons[id]) {
    console.warn(`Button not found: ${id}`);
    return false;
  }
  buttons[id] = { ...buttons[id], ...updates };
  return true;
}

export function editFormField(id: string, updates: Partial<FormField>): boolean {
  const form = text.ui.form as unknown as Record<string, FormField>;
  if (!form[id]) {
    console.warn(`Form field not found: ${id}`);
    return false;
  }
  form[id] = { ...form[id], ...updates };
  return true;
}

// Generic edit function
export function editContent<T>(path: string, updates: Partial<T>): boolean {
  const keys = path.split('.');
  let current: any = text;
  
  // Navigate to the parent object
  for (let i = 0; i < keys.length - 1; i++) {
    if (current[keys[i]] === undefined) {
      console.warn(`Path not found: ${path}`);
      return false;
    }
    current = current[keys[i]];
  }
  
  const lastKey = keys[keys.length - 1];
  if (current[lastKey] === undefined) {
    console.warn(`Item not found: ${path}`);
    return false;
  }
  
  current[lastKey] = { ...current[lastKey], ...updates };
  return true;
}

// Example usage:
// const homePage = getPage('home');
// const heroSection = getPageSection('home', 'hero');
// const foodFeature = getFeature('food');
// const eventideBusiness = getBusiness('eventide');
// const sarahTeamMember = getTeamMember('sarah');
// const learnMoreButton = getButton('learnMore');
// const nameField = getFormField('name');
// editPage('home', { title: 'New Home Title' });
// editBusiness('eventide', { title: 'New Restaurant Name' });
// editContent<Button>('ui.buttons.learnMore', { text: 'Click Here' }); 