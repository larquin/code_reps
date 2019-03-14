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
      assert.equal(subject.payload, "foo");
    })
  })
});
