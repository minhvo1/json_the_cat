const request = require('request');
const query = process.argv.slice(2);
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${query}`;

request(URL, (error, response, body) => {
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("No breed found for this query");
  } else {
    console.log(data[0].description);
  }
});