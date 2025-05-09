// Design System Configuration
export const designSystem = {
  // Colors
  colors: {
    primary: {
      main: '#1E40AF', // Deep blue
      light: '#3B82F6',
      dark: '#1E3A8A',
      contrast: '#FFFFFF',
    },
    secondary: {
      main: '#059669', // Emerald green
      light: '#10B981',
      dark: '#047857',
      contrast: '#FFFFFF',
    },
    accent: {
      main: '#D97706', // Amber
      light: '#F59E0B',
      dark: '#B45309',
      contrast: '#FFFFFF',
    },
    neutral: {
      white: '#FFFFFF',
      gray50: '#F9FAFB',
      gray100: '#F3F4F6',
      gray200: '#E5E7EB',
      gray300: '#D1D5DB',
      gray400: '#9CA3AF',
      gray500: '#6B7280',
      gray600: '#4B5563',
      gray700: '#374151',
      gray800: '#1F2937',
      gray900: '#111827',
      black: '#000000',
    },
    semantic: {
      success: '#059669',
      warning: '#D97706',
      error: '#DC2626',
      info: '#3B82F6',
    },
  },

  // Typography
  typography: {
    fontFamily: {
      primary: 'Inter, system-ui, sans-serif',
      secondary: 'Playfair Display, serif',
    },
    fontSize: {
      12: '0.75rem',    // xs
      14: '0.875rem',   // sm
      16: '1rem',       // base
      18: '1.125rem',   // lg
      20: '1.25rem',    // xl
      24: '1.5rem',     // 2xl
      30: '1.875rem',   // 3xl
      36: '2.25rem',    // 4xl
      48: '3rem',       // 5xl
    },
    fontWeight: {
      300: 300, // light
      400: 400, // normal
      500: 500, // medium
      600: 600, // semibold
      700: 700, // bold
    },
    lineHeight: {
      100: 1,      // none
      125: 1.25,   // tight
      137: 1.375,  // snug
      150: 1.5,    // normal
      162: 1.625,  // relaxed
      200: 2,      // loose
    },
  },

  // Spacing
  spacing: {
    0: '0',
    4: '0.25rem',   // 1
    8: '0.5rem',    // 2
    12: '0.75rem',  // 3
    16: '1rem',     // 4
    20: '1.25rem',  // 5
    24: '1.5rem',   // 6
    32: '2rem',     // 8
    40: '2.5rem',   // 10
    48: '3rem',     // 12
    64: '4rem',     // 16
    80: '5rem',     // 20
    96: '6rem',     // 24
    128: '8rem',    // 32
    160: '10rem',   // 40
    192: '12rem',   // 48
    224: '14rem',   // 56
    256: '16rem',   // 64
  },

  // Border Radius
  borderRadius: {
    0: '0',
    2: '0.125rem',  // sm
    4: '0.25rem',   // DEFAULT
    6: '0.375rem',  // md
    8: '0.5rem',    // lg
    12: '0.75rem',  // xl
    16: '1rem',     // 2xl
    24: '1.5rem',   // 3xl
    9999: '9999px', // full
  },

  // Shadows
  shadows: {
    1: '0 1px 2px 0 rgb(0 0 0 / 0.05)',  // sm
    2: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',  // DEFAULT
    3: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',  // md
    4: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',  // lg
    5: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',  // xl
  },

  // Breakpoints
  breakpoints: {
    640: '640px',   // sm
    768: '768px',   // md
    1024: '1024px', // lg
    1280: '1280px', // xl
    1536: '1536px', // 2xl
  },

  // Z-index
  zIndex: {
    0: 0,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    auto: 'auto',
  },

  // Transitions
  transitions: {
    duration: {
      150: '150ms',  // fast
      300: '300ms',  // normal
      500: '500ms',  // slow
    },
    timing: {
      1: 'linear',
      2: 'cubic-bezier(0.4, 0, 1, 1)',  // in
      3: 'cubic-bezier(0, 0, 0.2, 1)',  // out
      4: 'cubic-bezier(0.4, 0, 0.2, 1)', // inOut
    },
  },

  // Content
  content: {
    // Header content
    header: {
      title: 'Portland Guide',
      subtitle: 'Your Ultimate Guide to Portland, Maine',
    },

    // Navigation
    nav: {
      home: 'Home',
      attractions: 'Attractions',
      restaurants: 'Restaurants',
      arts: 'Arts & Culture',
      outdoors: 'Outdoor Activities',
      shopping: 'Shopping',
      contact: 'Contact',
    },

    // Home page sections
    home: {
      hero: {
        title: 'Welcome to Portland, Maine',
        subtitle: 'Discover the charm of New England\'s most vibrant coastal city',
        tagline: 'Your Guide to Portland',
      },
      features: {
        title: 'Why Visit Portland?',
        subtitle: 'Experience the best of Maine\'s largest city',
        tagline: 'Highlights',
        items: {
          food: {
            title: 'World-Class Dining',
            description: 'From fresh seafood to innovative cuisine',
          },
          culture: {
            title: 'Rich Culture',
            description: 'Art galleries, museums, and historic sites',
          },
          outdoors: {
            title: 'Outdoor Adventures',
            description: 'Kayaking, hiking, and coastal exploration',
          },
        },
      },
      contentOne: {
        title: 'Explore Portland\'s Waterfront',
        subtitle: 'Discover the heart of our city',
        tagline: 'Waterfront',
        content: 'Portland\'s working waterfront is a unique blend of historic charm and modern amenities.',
      },
      contentTwo: {
        title: 'Portland\'s Rich History',
        subtitle: 'A city with stories to tell',
        tagline: 'History',
        content: 'From its founding in 1632 to its role in the American Revolution, Portland has played a vital part in New England\'s history.',
      },
      steps: {
        title: 'Plan Your Visit',
        subtitle: 'Make the most of your Portland experience',
        tagline: 'Getting Started',
        items: {
          dates: {
            title: 'Choose Your Dates',
            description: 'Consider seasonal events and weather',
          },
          stay: {
            title: 'Book Your Stay',
            description: 'Find the perfect accommodation',
          },
          activities: {
            title: 'Plan Your Activities',
            description: 'Explore attractions and dining options',
          },
        },
      },
      testimonials: {
        title: 'Visitor Experiences',
        subtitle: 'What our visitors say',
        tagline: 'Testimonials',
      },
      faqs: {
        title: 'Frequently Asked Questions',
        subtitle: 'Everything you need to know',
        tagline: 'FAQs',
        items: {
          bestTime: {
            title: 'When is the best time to visit?',
            description: 'Summer and fall offer the best weather and activities.',
          },
          transportation: {
            title: 'How do I get around?',
            description: 'Portland is walkable, with public transit and rideshare options available.',
          },
          attractions: {
            title: 'What are the must-visit attractions?',
            description: 'Don\'t miss the Old Port, Portland Head Light, and the Arts District.',
          },
          family: {
            title: 'Is Portland family-friendly?',
            description: 'Yes! There are many activities and attractions suitable for all ages.',
          },
        },
      },
      featuredBusinesses: {
        title: 'Featured Local Businesses',
        subtitle: 'Discover some of Portland\'s finest establishments',
        tagline: 'Local Favorites',
        items: {
          eventide: {
            title: 'Eventide Oyster Co.',
            description: 'Award-winning seafood restaurant known for innovative takes on New England classics',
            features: ['Fresh Oysters', 'Lobster Rolls', 'Craft Cocktails'],
          },
          pma: {
            title: 'Portland Museum of Art',
            description: 'Maine\'s largest art museum featuring works from local and international artists',
            features: ['Contemporary Art', 'Historic Collection', 'Special Exhibitions'],
          },
          kayak: {
            title: 'Casco Bay Kayak Tours',
            description: 'Guided kayak tours exploring Portland\'s beautiful harbor and islands',
            features: ['Guided Tours', 'Equipment Provided', 'Scenic Routes'],
          },
        },
      },
      team: {
        title: 'Meet Our Local Experts',
        subtitle: 'Get to know the people behind Portland Guide',
        tagline: 'Our Team',
        members: {
          sarah: {
            name: 'Sarah Johnson',
            occupation: 'Food & Dining Expert',
          },
          michael: {
            name: 'Michael Chen',
            occupation: 'Arts & Culture Guide',
          },
          emily: {
            name: 'Emily Rodriguez',
            occupation: 'Outdoor Activities Specialist',
          },
        },
      },
      contact: {
        title: 'Get in Touch',
        subtitle: 'Have questions about Portland? We\'re here to help!',
        tagline: 'Contact Us',
        content: 'Whether you\'re planning a visit to Portland, looking for local business information, or have questions about our city, we\'d love to hear from you. Our team of local experts is ready to help make your Portland experience unforgettable.',
        items: {
          email: {
            title: 'Email Us',
            description: ['For visitor information', 'info@portlandguide.com'],
          },
          business: {
            title: 'Contact',
            description: ['For business inquiries', 'business@portlandguide.com'],
          },
          hours: {
            title: 'Working hours',
            description: ['Monday - Friday: 09:00 - 17:00', 'Saturday & Sunday: 10:00 - 15:00'],
          },
        },
        form: {
          title: 'Send Us a Message',
          inputs: {
            name: {
              placeholder: 'Your name',
            },
            email: {
              placeholder: 'Your email address',
            },
          },
          textarea: {
            placeholder: 'Tell us about your Portland questions or interests...',
          },
          button: {
            title: 'Send Message',
          },
        },
      },
    },

    // Common elements
    common: {
      buttons: {
        learnMore: 'Learn More',
        viewMore: 'View More',
        contact: 'Contact Us',
        submit: 'Submit',
      },
      social: {
        learnMore: 'Learn more',
        follow: 'Follow',
      },
    },
  },
}; 