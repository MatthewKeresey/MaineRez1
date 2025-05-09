export const text = {
  // Core content types
  pages: {
    home: {
      id: 'home',
      title: 'Portland Guide',
      subtitle: 'Your Ultimate Guide to Portland, Maine',
      sections: ['hero', 'features', 'content1', 'content2', 'steps', 'testimonials', 'faqs', 'businesses', 'team', 'contact'],
    },
    attractions: {
      id: 'attractions',
      title: 'Attractions',
      subtitle: 'Discover Portland\'s Best Attractions',
      sections: ['hero', 'listings', 'map', 'categories'],
    },
    restaurants: {
      id: 'restaurants',
      title: 'Restaurants',
      subtitle: 'Portland\'s Culinary Scene',
      sections: ['hero', 'listings', 'map', 'categories'],
    },
    arts: {
      id: 'arts',
      title: 'Arts & Culture',
      subtitle: 'Experience Portland\'s Creative Side',
      sections: ['hero', 'listings', 'map', 'categories'],
    },
    outdoors: {
      id: 'outdoors',
      title: 'Outdoor Activities',
      subtitle: 'Explore Portland\'s Natural Beauty',
      sections: ['hero', 'listings', 'map', 'categories'],
    },
    shopping: {
      id: 'shopping',
      title: 'Shopping',
      subtitle: 'Find Unique Treasures in Portland',
      sections: ['hero', 'listings', 'map', 'categories'],
    },
    contact: {
      id: 'contact',
      title: 'Contact',
      subtitle: 'Get in Touch',
      sections: ['form', 'info', 'map'],
    },
  },

  // Reusable section templates
  sections: {
    hero: {
      id: 'hero',
      type: 'hero',
      fields: ['title', 'subtitle', 'tagline', 'cta'],
    },
    features: {
      id: 'features',
      type: 'grid',
      fields: ['title', 'subtitle', 'tagline', 'items'],
    },
    content: {
      id: 'content',
      type: 'content',
      fields: ['title', 'subtitle', 'tagline', 'content'],
    },
    steps: {
      id: 'steps',
      type: 'steps',
      fields: ['title', 'subtitle', 'tagline', 'items'],
    },
    testimonials: {
      id: 'testimonials',
      type: 'testimonials',
      fields: ['title', 'subtitle', 'tagline', 'items'],
    },
    faqs: {
      id: 'faqs',
      type: 'faqs',
      fields: ['title', 'subtitle', 'tagline', 'items'],
    },
    listings: {
      id: 'listings',
      type: 'listings',
      fields: ['title', 'subtitle', 'tagline', 'items', 'filters'],
    },
    map: {
      id: 'map',
      type: 'map',
      fields: ['title', 'subtitle', 'tagline', 'items'],
    },
    categories: {
      id: 'categories',
      type: 'categories',
      fields: ['title', 'subtitle', 'tagline', 'items'],
    },
    form: {
      id: 'form',
      type: 'form',
      fields: ['title', 'subtitle', 'tagline', 'fields', 'button'],
    },
  },

  // Content items
  items: {
    features: {
      food: {
        id: 'food',
        type: 'feature',
        title: 'World-Class Dining',
        description: 'From fresh seafood to innovative cuisine',
        icon: 'utensils',
      },
      culture: {
        id: 'culture',
        type: 'feature',
        title: 'Rich Culture',
        description: 'Art galleries, museums, and historic sites',
        icon: 'palette',
      },
      outdoors: {
        id: 'outdoors',
        type: 'feature',
        title: 'Outdoor Adventures',
        description: 'Kayaking, hiking, and coastal exploration',
        icon: 'mountain',
      },
    },
    businesses: {
      eventide: {
        id: 'eventide',
        type: 'business',
        title: 'Eventide Oyster Co.',
        description: 'Award-winning seafood restaurant known for innovative takes on New England classics',
        category: 'restaurant',
        features: ['oysters', 'lobster', 'cocktails'],
        contact: {
          phone: '207-774-8538',
          email: 'info@eventideoysterco.com',
          address: '86 Middle St, Portland, ME 04101',
        },
      },
      pma: {
        id: 'pma',
        type: 'business',
        title: 'Portland Museum of Art',
        description: 'Maine\'s largest art museum featuring works from local and international artists',
        category: 'museum',
        features: ['contemporary', 'historic', 'exhibitions'],
        contact: {
          phone: '207-775-6148',
          email: 'info@portlandmuseum.org',
          address: '7 Congress Square, Portland, ME 04101',
        },
      },
    },
    team: {
      sarah: {
        id: 'sarah',
        type: 'team',
        name: 'Sarah Johnson',
        role: 'Food & Dining Expert',
        bio: 'Local food critic and culinary expert',
        contact: {
          email: 'sarah@portlandguide.com',
          social: {
            twitter: '@sarahfoodie',
            instagram: '@sarahfoodie',
          },
        },
      },
      michael: {
        id: 'michael',
        type: 'team',
        name: 'Michael Chen',
        role: 'Arts & Culture Guide',
        bio: 'Art historian and cultural expert',
        contact: {
          email: 'michael@portlandguide.com',
          social: {
            twitter: '@michaelarts',
            instagram: '@michaelarts',
          },
        },
      },
    },
  },

  // UI elements
  ui: {
    buttons: {
      learnMore: {
        id: 'learnMore',
        type: 'button',
        text: 'Learn More',
        variant: 'primary',
      },
      viewMore: {
        id: 'viewMore',
        type: 'button',
        text: 'View More',
        variant: 'secondary',
      },
      contact: {
        id: 'contact',
        type: 'button',
        text: 'Contact Us',
        variant: 'primary',
      },
      submit: {
        id: 'submit',
        type: 'button',
        text: 'Submit',
        variant: 'primary',
      },
    },
    form: {
      name: {
        id: 'name',
        type: 'input',
        label: 'Name',
        placeholder: 'Your name',
        required: true,
      },
      email: {
        id: 'email',
        type: 'input',
        label: 'Email',
        placeholder: 'Your email address',
        required: true,
      },
      message: {
        id: 'message',
        type: 'textarea',
        label: 'Message',
        placeholder: 'Tell us about your Portland questions or interests...',
        required: true,
      },
    },
  },
}; 