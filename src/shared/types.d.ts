import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';
import type { TablerIcon } from "@tabler/icons-react"

type WrapperTagProps = {
  children: React.ReactNode;
  containerClass?: string;
};

type BackgroundProps = {
  children?: React.ReactNode;
};

type Header = {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  tagline?: string;
  position?: 'center' | 'right' | 'left';
};

type HeadlineProps = {
  header: Header;
  containerClass?: string;
  titleClass?: string;
  subtitleClass?: string;
};

type Icon = TablerIcon;

type CallToActionType = {
  text?: string;
  href: string;
  icon?: Icon;
  targetBlank?: boolean;
};

type LinkOrButton = {
  callToAction?: CallToActionType;
  containerClass?: string;
  linkClass?: string;
  iconClass?: string;
};

type Button = {
  title: string;
  type: 'button' | 'submit' | 'reset';
};

type Input = {
  type: string;
  label?: string;
  value?: string;
  name?: string;
  autocomplete?: string;
  placeholder?: string;
};

type Textarea = {
  cols?: number;
  rows?: number;
  label?: string;
  name: string;
  placeholder?: string;
};

type Checkbox = {
  label: string;
  value: string;
};

type Radio = {
  label: string;
};

type RadioBtn = {
  label?: string;
  radios: Array<Radio>;
};

type SmallForm = {
  icon?: Icon;
  input: Input;
  btn: Button;
};

type FormProps = {
  title?: string;
  description?: string;
  inputs: Array<Input>;
  radioBtns?: RadioBtn;
  textarea?: Textarea;
  checkboxes?: Array<Checkbox>;
  btn: Button;
  btnPosition?: 'center' | 'right' | 'left';
  containerClass?: string;
};

type Image = {
  link?: string;
  src: string | StaticImageData;
  alt: string;
};

type Item = {
  title?: string | boolean | number;
  description?: string | Array<string>;
  href?: string;
  form?: SmallForm;
  icon?: Icon;
  callToAction?: CallToActionType;
};

type ItemGrid = {
  id?: string;
  items?: Array<Item>;
  columns?: number;
  defaultColumns?: number;
  defaultIcon?: Icon;
  containerClass?: string;
  panelClass?: string;
  iconClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  actionClass?: string;
};

type Timeline = {
  id?: string;
  items?: Array<Item>;
  defaultIcon?: Icon;
  containerClass?: string;
  panelClass?: string;
  iconClass?: string;
  titleClass?: string;
  descriptionClass?: string;
};

type Team = {
  name: string;
  occupation: string;
  image: Image;
  items?: Array<Item>;
  containerClass?: string;
  imageClass?: string;
  panelClass?: string;
  nameClass?: string;
  occupationClass?: string;
  itemsClass?: string;
};

type Testimonial = {
  testimonial?: string;
  startSlice?: number;
  endSlice?: number;
  isTestimonialUp?: boolean;
  hasDividerLine?: boolean;
  name?: string;
  job?: string;
  image?: Image;
  href?: string;
  containerClass?: string;
  panelClass?: string;
  imageClass?: string;
  dataClass?: string;
  nameJobClass?: string;
  nameClass?: string;
  jobClass?: string;
  testimonialClass?: string;
};

type Link = {
  label?: string;
  href?: string;
  ariaLabel?: string;
  icon?: Icon;
};

type Price = {
  title?: string;
  subtitle?: string;
  description?: string;
  price?: number;
  period?: string;
  items?: Array<Item>;
  callToAction?: CallToActionType;
  hasRibbon?: boolean;
  ribbonTitle?: string;
};

type Column = {
  title: string;
  items: Array<Item>;
  callToAction?: CallToActionType;
};

type MenuLink = Link & {
  links?: Array<Link>;
};

type Links = {
  title?: string;
  links?: Array<Link>;
  texts?: Array<string>;
};

type Tab = {
  link?: Link;
  items: Array<Item>;
};

type Dropdown = {
  options: Tab[];
  activeTab: number;
  onActiveTabSelected: Function;
  iconUp?: ReactElement;
  iconDown?: ReactElement;
};

type ToggleMenuProps = {
  handleToggleMenuOnClick: MouseEventHandler<HTMLButtonElement>;
  isToggleMenuOpen: boolean;
};

type WindowSize = {
  width: number;
  height: number;
};

// WIDGETS
type HeroProps = {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  tagline?: string;
  callToAction?: CallToActionType;
  callToAction2?: CallToActionType;
  image?: Image;
};

type FAQsProps = {
  id?: string;
  header?: Header;
  items?: Array<Item>;
  columns?: number;
  tabs?: Array<Tab>;
  callToAction?: CallToActionType;
};

type CollapseProps = {
  items: Array<Item>;
  classCollapseItem?: string;
  iconUp?: ReactElement;
  iconDown?: ReactElement;
};

type CallToActionProps = {
  id?: string;
  title: string;
  subtitle: string;
  callToAction?: CallToActionType;
  items?: Array<Item>;
};

type FeaturesProps = {
  id?: string;
  header?: Header;
  items?: Array<Item>;
  columns?: 1 | 2 | 3;
  isImageDisplayed?: boolean;
  image?: Image;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
};

type ContentProps = {
  id?: string;
  header?: Header;
  content?: string;
  items?: Array<Item>;
  image?: Image;
  isReversed?: boolean;
  isAfterContent?: boolean;
};

type StepsProps = {
  id?: string;
  header?: Header;
  items: Array<Item>;
  isImageDisplayed?: boolean;
  image?: Image;
  isReversed?: boolean;
};

type TeamProps = {
  id?: string;
  header?: Header;
  teams: Array<Team>;
};

type AnnouncementProps = {
  title: string;
  callToAction?: CallToActionType;
  callToAction2?: CallToActionType;
};

type TestimonialsProps = {
  id?: string;
  header?: Header;
  testimonials: Array<Testimonial>;
  isTestimonialUp?: boolean;
  hasDividerLine?: boolean;
  startSlice?: number;
  endSlice?: number;
  callToAction?: CallToActionType;
};

type PricingProps = {
  id?: string;
  header?: Header;
  prices: Array<Price>;
};

type ComparisonProps = {
  id?: string;
  header?: Header;
  columns: Array<Column>;
};

type StatsProps = {
  id?: string;
  items: Array<Item>;
};

type SocialProofProps = {
  id?: string;
  images: Array<Image>;
};

type ContactProps = {
  id?: string;
  header?: Header;
  content?: string;
  items?: Array<Item>;
  form: FormProps;
};

type FooterProps = {
  title?: string;
  links?: Array<Link>;
  columns: Array<Links>;
  socials: Array<Link>;
  footNote?: string | ReactElement;
  theme?: string;
};

type HeaderProps = {
  links?: Array<{
    label: string;
    href?: string;
    icon?: Icon;
    links?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  actions?: Array<CallToActionType>;
  isSticky?: boolean;
  showToggleTheme?: boolean;
  showRssFeed?: boolean;
  position?: 'right' | 'left' | 'center';
  logo?: {
    src: string;
    alt: string;
  };
};

type FeaturedBusinessesProps = {
  id?: string;
  header?: Header;
  businesses: Array<{
    title: string;
    category: string;
    features: Array<{
      description: string;
    }>;
    callToAction: {
      targetBlank: boolean;
      text: string;
      href: string;
    };
    hasRibbon: boolean;
    ribbonTitle?: string;
  }>;
};

export interface FAQsProps {
  id: string;
  header: {
    title: string;
    subtitle: string;
    tagline: string;
  };
  items: Array<{
    title: string;
    description: string;
  }>;
}

export interface FeaturedBusinessesProps {
  id: string;
  header: {
    title: string;
    subtitle: string;
    tagline: string;
  };
  businesses: Array<{
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
}

export interface PricingProps {
  id: string;
  header: {
    title: string;
    subtitle: string;
    tagline: string;
  };
  prices: Array<{
    title: string;
    value: string;
    period?: string;
    description: string;
    features: Array<{
      title: string;
      value: boolean;
    }>;
    callToAction: {
      text: string;
      href: string;
    };
    hasRibbon?: boolean;
    ribbonTitle?: string;
  }>;
}

export interface TeamProps {
  id: string;
  header: {
    title: string;
    subtitle: string;
    tagline: string;
  };
  teams: Array<{
    name: string;
    occupation: string;
    image: {
      src: string;
      alt: string;
    };
    items: Array<{
      title: string;
      icon?: any;
    }>;
  }>;
}

export interface ContactProps {
  header: {
    title: string;
    subtitle: string;
    tagline: string;
  };
  content: string;
  items: Array<{
    title: string;
    description: string;
    icon?: any;
  }>;
  form: {
    title: string;
    inputs: Array<{
      type: string;
      name: string;
      label: string;
      placeholder?: string;
      autocomplete?: string;
    }>;
    textarea: {
      name: string;
      placeholder: string;
    };
    btn: {
      title: string;
      type: 'submit' | 'button' | 'reset';
    };
  };
}
