const tryCatchEx = require('./../exercises/tryCatch.exercise')

test('tryCatch exercise', () => {
  expect(tryCatchEx.getFlickrUrl('&/=UniCoRn=/&')).toEqual('https://flickr-backup-llgoelagqd.now.sh/?searchTerm=unicorn');
});
