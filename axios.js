'use_stict'

const env = require('@cosmic-plus/jsutils/env')

if (env.isBrowser) {
  module.exports = require('./stellar-sdk').axios
} else {
  module.exports = env.nodeRequire('axios')
}
