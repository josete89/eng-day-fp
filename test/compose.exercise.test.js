const composeEx = require('./../exercises/compose.exercise')

test('Compose exercise', () => {
    expect(composeEx.getFlickrUrl('&/=UniCoRn=/&')).toEqual("https://api.flickr.com/?text=unicorn");
});