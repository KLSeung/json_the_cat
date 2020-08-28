const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let breedId = breedName.slice(0,4);
  request(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (data[0]) {
      const description = data[0]['breeds'][0]['description'];
      callback(null, description);
    } else {
      callback("This breed doesn't exist", null);
    }
  });
};

module.exports = { fetchBreedDescription };