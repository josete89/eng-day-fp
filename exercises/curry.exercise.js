const curry = require('./../helpers/curry')

const REG_EXP = /\/|&|=/g;

// We should apply curry to this function
const applyRegularExp = (regExp,searchTerm) => {
  const cleanTerm = searchTerm.replace(regExp, '');
  return cleanTerm;
}

// This method should construct the url based on the searchterm
const getFlickrUrl = searchTerm => {
  const cleanedSearchTerm = searchTerm.trim().toLowerCase()
  const santizeTermRemovingAndChar = curry(applyRegularExp)(REG_EXP)
  const term = `https://api.flickr.com/?text=${santizeTermRemovingAndChar(cleanedSearchTerm)}`
  return term

}





module.exports.getFlickrUrl = getFlickrUrl