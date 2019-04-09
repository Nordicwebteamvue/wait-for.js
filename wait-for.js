const fetch = require('cross-fetch')

let retries = -1

const waitFor = async (url, options) => {
  const {timeout, maxRetries, find} = options
  if (retries >= maxRetries) {
    throw new Error('Maximum number of retries reached')
  }
  retries += 1
  try {
    const result = await fetch(url)
    const text = await result.text()
    if (!text.includes(find)) {
      console.log('✋ Couldn\'t find string:', find) // eslint-disable-line no-console
      return setTimeout(() => {
        waitFor(url, options)
      }, timeout)
    }
  } catch (e) {
    console.log('✋ Server not reachable') // eslint-disable-line no-console
    return setTimeout(() => {
      waitFor(url, options)
    }, timeout)
  }
  if (retries > 0) {
    console.log('👍 ' + url + ' is ready. Exiting...') // eslint-disable-line no-console
  }
}

module.exports = waitFor
