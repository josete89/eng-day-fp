const badUrl = '{"url":"https://flickr-backup-llgoelagqd.now.sh/?searchTerm=${searchTerm}"}a';
const goodUrl = '{"url":"https://flickr-backup-llgoelagqd.now.sh/?searchTerm=${searchTerm}"}';
module.exports = ({ withFailure = false } = {}) => withFailure ? badUrl : goodUrl;
