
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./sdk-bch.cjs.production.min.js')
} else {
  module.exports = require('./sdk-bch.cjs.development.js')
}
