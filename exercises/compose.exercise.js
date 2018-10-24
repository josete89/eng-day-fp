const compose = require('./../helpers/compose')
const curry = require('./../helpers/curry')

const REG_EXP = /\/|&|=/g;

const removeSpaces = (x) => x.trim() 
const toLowerCase = (x) => x.toLowerCase()
const applyRegularExp = curry((regExp,searchTerm) => {
    const cleanTerm = searchTerm.replace(regExp, '');
    return cleanTerm;
})
const interPolize = (x) => `https://api.flickr.com/?text=${x}`


const getFlickrUrl = compose(removeSpaces,toLowerCase,applyRegularExp(REG_EXP),interPolize)


module.exports.getFlickrUrl = getFlickrUrl