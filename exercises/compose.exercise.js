const compose = require('./../helpers/compose');
const curry = require('./../helpers/curry');

const SEARCH_REG_EXP = /\/|&|=/g;

/* 
   const removeSpaces - Removes a trimmed string
*/
const removeSpaces = (x) => x.trim();
/* 
   const toLowerCase - return a lowercase string
*/
const toLowerCase = (x) => x.toLowerCase();

/*
 const applyRegularExp => We should apply curry to this function
 regExp - RegularExpresion to replace invalid characteres
 searchTerm - string to sanetize
 */
const sanetize = curry((regExp, searchTerm) => {
  const cleanTerm = searchTerm.replace(regExp, '');
  return cleanTerm;
});

/* 
  const interPolize => return the complete url
*/
const interPolize = (x) => `https://api.flickr.com/?text=${x}`;

/* 
  const getFlickrUrl => This method should construct the url based on the searchterm 
  searchTerm -  string to search for
*/
const getFlickrUrl = (searchTerm) => {
  // TO IMPLEMENT
  return null
}


module.exports.getFlickrUrl = getFlickrUrl;
