const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  const data = JSON.parse(body);

  if (error) {
    callback(error, null);
  } else {
    if (data[0] === undefined) {
      callback(null, "No breed found for this query");
    } else {
      callback(null, data[0].description);
    }
  }

});
};

module.exports = { fetchBreedDescription };