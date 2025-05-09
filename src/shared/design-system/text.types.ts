// Base types
export interface BaseItem {
  id: string;
  type: string;
}

// Page types
export interface Page extends BaseItem {
  title: string;
  subtitle: string;
  sections: string[];
}

// Section types
export interface Section extends BaseItem {
  fields: string[];
}

// Content item types
export interface Feature extends BaseItem {
  title: string;
  description: string;
  icon: string;
}

export interface Business extends BaseItem {
  title: string;
  description: string;
  category: string;
  features: string[];
  contact: {
    phone: string;
    email: string;
    address: string;
  };
}

export interface TeamMember extends BaseItem {
  name: string;
  role: string;
  bio: string;
  contact: {
    email: string;
    social: {
      twitter: string;
      instagram: string;
    };
  };
}

// UI element types
export interface Button extends BaseItem {
  text: string;
  variant: 'primary' | 'secondary';
}

export interface FormField extends BaseItem {
  label: string;
  placeholder: string;
  required: boolean;
}

// Main content structure
export interface TextContent {
  pages: {
    [key: string]: Page;
  };
  sections: {
    [key: string]: Section;
  };
  items: {
    features: {
      [key: string]: Feature;
    };
    businesses: {
      [key: string]: Business;
    };
    team: {
      [key: string]: TeamMember;
    };
  };
  ui: {
    buttons: {
      [key: string]: Button;
    };
    form: {
      [key: string]: FormField;
    };
  };
} 