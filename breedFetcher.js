const request = require('request');
const arg = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/images/search?breed_ids=${arg}`, (error, response, body) => {
  if (error) throw error;
  const data = JSON.parse(body);
  if (data[0]) {
    console.log(data[0]['breeds'][0]['description']);
  } else {
    throw new Error("This breed doesn't exist");
  }
});