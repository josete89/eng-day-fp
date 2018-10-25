const compose = require('../helpers/compose');
const curry = require('../helpers/curry');

const toLowerCase = s => s.toLowerCase();
const trim = s => s.trim();
const replace = curry((regex, replacing, s) => s.replace(regex, replacing));

const sanitizeSearchTermComp = compose(
  replace(/\/|&|=|¿/g, ''),
  trim,
  toLowerCase
);

const interpolateSearchTermComp = searchTerm =>
  `https://api.flickr.com/?text=${searchTerm}`;

const getFlickrUrlComp = compose(
  interpolateSearchTermComp,
  sanitizeSearchTermComp
);

console.log(getFlickrUrlComp('&/=UniCoRn=/&'));
