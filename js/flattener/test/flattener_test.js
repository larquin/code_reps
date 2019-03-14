const assert = require('assert');
const  Flattener = require('../src/flattener.js')

describe('instantiating flattener', function() {
  it('accepts a payload', function() { 
    let subject = new Flattener("foo")
    assert.equal(subject.payload, "foo")
  })
})
