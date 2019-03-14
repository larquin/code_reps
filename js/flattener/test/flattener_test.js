const assert = require('assert');
const fetch = require('node-fetch');
const  Flattener = require('../src/flattener.js')

let subject = null;
let data = null;

const getAPIData = async (url, key) => {
  try {
    let london = `${url}?q=London,uk&appid=${key}`
    const response = await fetch(london);
    const json = await response.json();
    console.log("Got weather data!");
    return json
  } catch(error) {
    throw "There was an issue getting data..."
  }
};

before(async function() {
  data = await getAPIData(process.env.OPEN_WEATHER_MAP_URL, process.env.OPEN_WEATHER_MAP_KEY);
  subject = await new Flattener(data);
})


describe('Flattener', function() {
  describe('instantiating flattener', function() {
    it('accepts a payload', async function() {
      assert.equal(subject.payload, data);
    });
  });

  describe("flattening a payload", function() {
    it('flattens a payload', async function() {
      let expected = {
        "/base": "stations",
        "/clouds/all": 90,
        "/cod": 200,
        "/coord/lat": 51.51,
        "/coord/long": -0.13,
        "/dt": 1385789600,
        "/id": 2643743,
        "/main/humidity": 81,
        "/main/pressure": 1012,
        "/main/temp": 280.32,
        "/main/temp_max": 281.15,
        "/main/temp_min": 279.15,
        "/name": "London",
        "/sys/country": "GB",
        "/sys/id": 5091,
        "/sys/message": 0.0103,
        "/sys/sunrise": 1485762037,
        "/sys/sunset": 14857984875,
        "/sys/type": 1,
        "/visibility": 10000,
      }
      assert.equal(subject.flatten(), expected);
    })
  })
});
