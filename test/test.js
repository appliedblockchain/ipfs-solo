const ipfs = require('./ipfs.js')
const expect = require('chai').expect

describe('Simple test to check that ipfs is working', () => {

  it('Can store a string that we can retrieve later', async () => {
    const value = 'test1234jngskljdh22323'

    const hash = await ipfs.store(value)

    const storedValue = await ipfs.cat(hash)

    expect(storedValue).to.equal(value)
  })

})
