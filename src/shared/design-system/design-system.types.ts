// Color Types
export interface ColorPalette {
  main: string;
  light: string;
  dark: string;
  contrast: string;
}

export interface NeutralColors {
  white: string;
  gray50: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;
  black: string;
}

export interface SemanticColors {
  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface Colors {
  primary: ColorPalette;
  secondary: ColorPalette;
  accent: ColorPalette;
  neutral: NeutralColors;
  semantic: SemanticColors;
}

// Typography Types
export interface Typography {
  fontFamily: {
    primary: string;
    secondary: string;
  };
  fontSize: {
    12: string;
    14: string;
    16: string;
    18: string;
    20: string;
    24: string;
    30: string;
    36: string;
    48: string;
  };
  fontWeight: {
    300: number;
    400: number;
    500: number;
    600: number;
    700: number;
  };
  lineHeight: {
    100: number;
    125: number;
    137: number;
    150: number;
    162: number;
    200: number;
  };
}

// Spacing Types
export interface Spacing {
  [key: number]: string;
}

// Border Radius Types
export interface BorderRadius {
  0: string;
  2: string;
  4: string;
  6: string;
  8: string;
  12: string;
  16: string;
  24: string;
  9999: string;
}

// Shadow Types
export interface Shadows {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}

// Breakpoint Types
export interface Breakpoints {
  640: string;
  768: string;
  1024: string;
  1280: string;
  1536: string;
}

// Z-index Types
export interface ZIndex {
  [key: number]: number;
  auto: string;
}

// Transition Types
export interface Transitions {
  duration: {
    150: string;
    300: string;
    500: string;
  };
  timing: {
    1: string;
    2: string;
    3: string;
    4: string;
  };
}

// Content Types
export interface HeaderContent {
  title: string;
  subtitle: string;
}

export interface NavigationContent {
  home: string;
  attractions: string;
  restaurants: string;
  arts: string;
  outdoors: string;
  shopping: string;
  contact: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface FeaturesContent {
  title: string;
  subtitle: string;
  tagline: string;
  items: {
    food: FeatureItem;
    culture: FeatureItem;
    outdoors: FeatureItem;
  };
}

export interface ContentSection {
  title: string;
  subtitle: string;
  tagline: string;
  content: string;
}

export interface StepItem {
  title: string;
  description: string;
}

export interface StepsContent {
  title: string;
  subtitle: string;
  tagline: string;
  items: {
    dates: StepItem;
    stay: StepItem;
    activities: StepItem;
  };
}

export interface FAQItem {
  title: string;
  description: string;
}

export interface FAQsContent {
  title: string;
  subtitle: string;
  tagline: string;
  items: {
    bestTime: FAQItem;
    transportation: FAQItem;
    attractions: FAQItem;
    family: FAQItem;
  };
}

export interface BusinessFeature {
  title: string;
  description: string;
  features: string[];
}

export interface FeaturedBusinessesContent {
  title: string;
  subtitle: string;
  tagline: string;
  items: {
    eventide: BusinessFeature;
    pma: BusinessFeature;
    kayak: BusinessFeature;
  };
}

export interface TeamMember {
  name: string;
  occupation: string;
}

export interface TeamContent {
  title: string;
  subtitle: string;
  tagline: string;
  members: {
    sarah: TeamMember;
    michael: TeamMember;
    emily: TeamMember;
  };
}

export interface ContactItem {
  title: string;
  description: string[];
}

export interface ContactForm {
  title: string;
  inputs: {
    name: {
      placeholder: string;
    };
    email: {
      placeholder: string;
    };
  };
  textarea: {
    placeholder: string;
  };
  button: {
    title: string;
  };
}

export interface ContactContent {
  title: string;
  subtitle: string;
  tagline: string;
  content: string;
  items: {
    email: ContactItem;
    business: ContactItem;
    hours: ContactItem;
  };
  form: ContactForm;
}

export interface HomeContent {
  hero: HeaderContent;
  features: FeaturesContent;
  contentOne: ContentSection;
  contentTwo: ContentSection;
  steps: StepsContent;
  testimonials: HeaderContent;
  faqs: FAQsContent;
  featuredBusinesses: FeaturedBusinessesContent;
  team: TeamContent;
  contact: ContactContent;
}

export interface CommonContent {
  buttons: {
    learnMore: string;
    viewMore: string;
    contact: string;
    submit: string;
  };
  social: {
    learnMore: string;
    follow: string;
  };
}

export interface Content {
  header: HeaderContent;
  nav: NavigationContent;
  home: HomeContent;
  common: CommonContent;
}

// Main Design System Type
export interface DesignSystem {
  colors: Colors;
  typography: Typography;
  spacing: Spacing;
  borderRadius: BorderRadius;
  shadows: Shadows;
  breakpoints: Breakpoints;
  zIndex: ZIndex;
  transitions: Transitions;
  content: Content;
} 