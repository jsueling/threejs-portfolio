/**
 * credits to: https://ohdoylerules.com/snippets/tailwind-screens-in-js/
 * 
 * Find out if a tailwind screen value matches the current window
 *
 * @param {string} screen
 *
 * @return {Object|Boolean}
 */
 export const screenIs = (screen = '') => {

  // "Theme" is an alias to where you keep your tailwind.config.js - most likely your project root
  const screens = require('../tailwind.config.js').theme.screens;

  // create a keyed object of screens that match
  const matches = Object.entries(screens).reduce((results, [name, size]) => {
    const mediaQuery = typeof size === 'string' ? `(min-width: ${size})` : `(max-width: ${size.max})`;

    if (typeof window !== "undefined") {
      results[name] = window.matchMedia(mediaQuery).matches;
    }

    return results;
  }, {});

  // show all matches when there is no screen choice
  if (screen === '') {
    return matches;
  }

  // invalid screen choice
  if (!screens[screen]) {
    console.error(`No match for "${screen}"`);

    return false;
  }

  return matches[screen];
};