const https = require('https')
const config = require('./config').default

const httpsPromise = path => {
  return new Promise((resolve) => {
    const getArrayFromInputString = (values) => values.split(/\n/)

    const handleResponse = (response) => {
      let list = ''

      response.on('data', data => list += data)

      response.on('end', () => {
        const normalizedArray = getArrayFromInputString(list)
        return resolve(normalizedArray)
      })
    }

    https.get(config(path), handleResponse)
      .on('error', error => console.log('something went wrong', error))
  })
}

module.exports.default = httpsPromise
