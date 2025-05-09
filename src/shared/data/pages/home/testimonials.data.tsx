import React from 'react';
import { TestimonialsProps } from '~/shared/types';

export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: false,
  header: {
    title: 'What Our Visitors Say',
    subtitle: 'Discover why people love visiting Portland',
    tagline: 'Testimonials',
  },
  testimonials: [
    {
      name: 'Sarah Johnson',
      job: 'Food Blogger',
      testimonial: 'Portland exceeded all my expectations! The food scene is incredible, and the waterfront views are breathtaking. I can\'t wait to come back and explore more.',
      image: {
        src: '/images/testimonials/food-blogger.jpg',
        alt: 'Sarah Johnson',
      },
    },
    {
      name: 'Michael Chen',
      job: 'Travel Photographer',
      testimonial: 'The historic architecture and coastal charm make Portland a photographer\'s dream. Every corner offers a perfect shot, and the locals are incredibly welcoming.',
      image: {
        src: '/images/testimonials/photographer.jpg',
        alt: 'Michael Chen',
      },
    },
    {
      name: 'Emily Rodriguez',
      job: 'Art Enthusiast',
      testimonial: 'The arts scene in Portland is vibrant and diverse. From the Portland Museum of Art to the local galleries, there\'s always something inspiring to discover.',
      image: {
        src: '/images/testimonials/art-enthusiast.jpg',
        alt: 'Emily Rodriguez',
      },
    },
  ],
}; 