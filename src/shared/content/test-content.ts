import { getContent, getContentArray, getContentObject } from './content-helper';

// Test hero section content
console.log('Hero Title:', getContent('home.hero.title'));
console.log('Hero Subtitle:', getContent('home.hero.subtitle'));

// Test features section
console.log('\nFeatures:', getContentArray('home.features.items'));

// Test content section
console.log('\nContent Section:', getContentObject('home.contentOne')); 