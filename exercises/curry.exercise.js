const curry = require('./../helpers/curry');

const SEARCH_REG_EXP = /\/|&|=/g;

/*
 const applyRegularExp => We should apply curry to this function
 regExp - RegularExpresion to replace invalid characteres
 searchTerm - string to sanetize
 */
const sanetize = (regExp, searchTerm) => {
  const cleanTerm = searchTerm.replace(regExp, '');
  return cleanTerm;
}

/* 
  const getFlickrUrl => This method should construct the url based on the searchterm 
  searchTerm -  string to search for
*/
const getFlickrUrl = (searchTerm) => {
  // TO-DO: FIX
  const cleanedSearchTerm = searchTerm.trim().toLowerCase();
  const santizeSearch = null;
  const term = `https://api.flickr.com/?text=${santizeSearch(cleanedSearchTerm)}`;
  return term;
}


module.exports.getFlickrUrl = getFlickrUrl;
