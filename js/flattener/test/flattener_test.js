const assert = require('assert');

const  Flattener = require('../src/flattener.js')

before(function(done) {
  console.log("FOO: ", process.env.OPEN_WEATHER_MAP_KEY)
  done();
})

describe('Flattener', function() {
  describe('instantiating flattener', function() {
    it('accepts a payload', function() {
      let subject = new Flattener("foo")
      assert.equal(subject.payload, "foo")
    });
  });

  describe('flattening a payload', function() {
    it('flattens a payload', function() {
    })
  })
})
