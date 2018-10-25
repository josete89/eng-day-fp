const curry = require('../helpers/curry');
const config = require('./utils/config');
const REG_EXP = /\/|&|=/g;

const Right = x => ({
  map: (f) => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
});

const Left = x => ({
  map: (f) => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`
});

const removeSpaces = x => x.trim();
const toLowerCase = x => x.toLowerCase();
const replace = curry((regex, replacement, s) => s.replace(regex, replacement));

// checkType :: (type, value) -> Either<Left, Right>
const checkType = type => value =>
  type === typeof value
    ? Right(value)
    : Left('Type error');

// sanitizeSearchTerm :: String -> String
const sanitizeSearchTerm = searchTerm =>
  checkType('string')(searchTerm)
    .map(toLowerCase)
    .map(removeSpaces)
    .map(replace(REG_EXP, ''));

// interpolateSearchTerm :: String -> String
const interpolateSearchTerm = searchTerm =>
  Right(config({ withFailure: true }))
    .map(JSON.parse)
    .map(res => res.url)
    .map(url => url.replace('${searchTerm}', searchTerm));

// getFlickrUrl :: String -> String
const getFlickrUrl = searchTerm =>
  sanitizeSearchTerm(searchTerm)
    .map(interpolateSearchTerm)
    .fold(
      e => e,
      s => s
    );

module.exports.getFlickrUrl = getFlickrUrl;
