// Base types
export interface BaseItem {
  id: string;
  type: string;
  status?: 'draft' | 'published' | 'archived';
}

// Page types
export interface Page extends BaseItem {
  title: string;
  subtitle: string;
  metaDescription: string;
  slug: string;
  sections: string[];
  seo?: {
    title: string;
    keywords: string[];
  };
}

// Section types
export interface Section extends BaseItem {
  title?: string;
  subtitle?: string;
  tagline?: string;
  content?: string;
  items?: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  image?: {
    src: string;
    alt: string;
  };
  images?: Array<{
    src: string;
    alt: string;
    link: string;
  }>;
  header?: {
    title: string;
    subtitle: string;
    tagline: string;
  };
  callToAction?: {
    text: string;
    href: string;
    icon?: string;
  };
  callToAction2?: {
    text: string;
    href: string;
    icon?: string;
  };
  hasBackground?: boolean;
  isReversed?: boolean;
  isAfterContent?: boolean;
  isImageDisplayed?: boolean;
  businesses?: Array<{
    title: string;
    category: string;
    features: Array<{
      description: string;
    }>;
    callToAction: {
      text: string;
      href: string;
    };
    hasRibbon: boolean;
    ribbonTitle?: string;
  }>;
  prompt?: string;
}

// Location types
export interface Location {
  address: string;
  latitude: number;
  longitude: number;
}

// Contact types
export interface Contact {
  phone?: string;
  email?: string;
  website?: string;
}

// Attraction types
export interface Attraction extends BaseItem, Location, Contact {
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  features: string[];
  priceRange: '$' | '$$' | '$$$';
  hours: string;
}

// Restaurant types
export interface Restaurant extends BaseItem, Location, Contact {
  title: string;
  description: string;
  cuisine: string[];
  priceRange: '$' | '$$' | '$$$';
  features: string[];
  hours: string;
}

// Shop types
export interface Shop extends BaseItem, Location, Contact {
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  priceRange: '$' | '$$' | '$$$';
  features: string[];
  hours: string;
}

// Event types
export interface Event extends BaseItem, Location {
  title: string;
  description: string;
  category: string;
  startDate: string;
  endDate: string;
  time: string;
  price?: number;
  website?: string;
}

// Team types
export interface TeamMember extends BaseItem {
  name: string;
  role: string;
  bio: string;
  email: string;
  social: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

// UI types
export interface Button extends BaseItem {
  text: string;
  variant: 'primary' | 'secondary';
}

export interface FormField extends BaseItem {
  label: string;
  placeholder: string;
  required: boolean;
}

// Settings types
export interface Setting extends BaseItem {
  key: string;
  value: any;
}

// Main content structure
export interface Content {
  pages: {
    [key: string]: Page;
  };
  sections: {
    [key: string]: Section;
  };
  attractions: {
    [key: string]: Attraction;
  };
  restaurants: {
    [key: string]: Restaurant;
  };
  shops: {
    [key: string]: Shop;
  };
  events: {
    [key: string]: Event;
  };
  team: {
    [key: string]: TeamMember;
  };
  ui: {
    buttons: {
      [key: string]: Button;
    };
    form: {
      [key: string]: FormField;
    };
  };
  settings: {
    [key: string]: Setting;
  };
} 