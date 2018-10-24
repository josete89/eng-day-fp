const curryEx = require('./../exercises/curry.exercise')

test('Curry exercise', () => {
    expect(curryEx.getFlickrUrl('&/=UniCoRn=/&')).toEqual("https://api.flickr.com/?text=unicorn");
});