'use strict'

const ipfsAPI = require('ipfs-api')

const ipfs = ipfsAPI(process.env.IPFS_HOST || 'localhost')

module.exports = {
  // ipfs cat with a 10 second timeout
  cat: (hash) => {
    return new Promise((accept, reject) => {
      let returned = false
      ipfs.files.cat(hash).then(res => {
        if (returned) {
          return
        }

        accept(res.toString('utf8'))
        returned = true
      })

      setTimeout(() => {
        if (!returned) {
          returned = true
          reject(new Error('Ipfs timeout'))
        }
      }, 10000)
    })
  },


  store: async (value) => {
    const ipfs_res = await ipfs.add(Buffer.from(value, 'utf8'))
    return ipfs_res[0].hash
  }
}
