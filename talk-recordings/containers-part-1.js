const compose = require('./../helpers/compose');
const curry = require('./../helpers/curry');

const Box = x => ({
  inspect: () => `Box(${x})`,
  map: (f) => Box(f(x)),
  fold: (f) => f(x)
});

const SEARCH_REG_EXP = /\/|&|=/g;

const toLowerCase = (x) => x.toLowerCase();
const removeSpaces = (x) => x.trim();

const sanetize = curry((regExp, searchTerm) => {
  const cleanTerm = searchTerm.replace(regExp, '');
  return cleanTerm;
});

const interPolize = (x) => `https://api.flickr.com/?text=${x}`;

const getFlickrUrl = searchTerm =>
  Box(searchTerm)
  .map(toLowerCase)
  .map(removeSpaces)
  .map(sanetize(SEARCH_REG_EXP))
  .fold(interPolize);

console.log(getFlickrUrl('unicorn'))
