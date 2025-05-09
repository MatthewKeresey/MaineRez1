export interface ImageItem {
  src: string;
  alt: string;
}

export interface GalleryItem extends ImageItem {}

export interface MainImage {
  main: string;
  mainAlt: string;
  thumbnail?: string;
  thumbnailAlt?: string;
}

export interface BusinessImages extends MainImage {
  food?: GalleryItem[];
  gallery?: GalleryItem[];
  activities?: GalleryItem[];
}

export interface Images {
  logo: {
    main: string;
    alt: string;
    icon: string;
    iconAlt: string;
  };
  hero: {
    main: string;
    mainAlt: string;
    background: string;
    backgroundAlt: string;
  };
  features: {
    food: MainImage;
    culture: MainImage;
    outdoors: MainImage;
  };
  content: {
    waterfront: MainImage & {
      gallery: GalleryItem[];
    };
    history: MainImage & {
      gallery: GalleryItem[];
    };
  };
  businesses: {
    eventide: BusinessImages;
    pma: BusinessImages;
    kayak: BusinessImages;
  };
  team: {
    sarah: MainImage;
    michael: MainImage;
    emily: MainImage;
  };
  socialProof: {
    harbor: ImageItem;
    food: ImageItem;
    arts: ImageItem;
    outdoors: ImageItem;
  };
  ui: {
    icons: {
      arrow: string;
      arrowAlt: string;
      menu: string;
      menuAlt: string;
      close: string;
      closeAlt: string;
      search: string;
      searchAlt: string;
    };
    backgrounds: {
      pattern: string;
      patternAlt: string;
      gradient: string;
      gradientAlt: string;
    };
  };
} 