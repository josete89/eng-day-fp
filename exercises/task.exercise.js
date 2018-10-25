const curry = require('../helpers/curry');
const config = require('./utils/config');
const { Right, Left, tryCatch } = require('../types/Either');
const Task = require('../types/Task');
const fetch = require('node-fetch');

const REG_EXP = /\/|&|=/g;

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
  Right(config())
    .chain(json => tryCatch(() => JSON.parse(json)))
    .map(res => res.url)
    .map(url => url.replace('${searchTerm}', searchTerm));

// getFlickrUrl :: String -> Right(String)
const getFlickrUrl = searchTerm =>
  sanitizeSearchTerm(searchTerm)
    .map(interpolateSearchTerm)
    .fold(
      f => f,
      g => g
    );

// Fetch the image

const taskyFetch = Task.taskify(fetch);
const getFirstElement = array => Task((reject, resolve) => array[0] ? resolve(array[0]) : reject('No element'));
const formatUrlForPhoto = ({ farm, server, id, secret }) =>
  `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;

const fetchTheImage = url => taskyFetch(url, { json: true });
const parseJson = response => Task.fromPromise(response.json());

// getImages :: String -> Task
const getImages = (searchTerm) => {
  // TO IMPLEMENT
}

// Now we can run the side effects (This is not needed for the test case) 
// const app = getImages('unicorn');
// app
//   .fork(
//     console.error,
//     console.log
//   );

module.exports.getImages = getImages;
