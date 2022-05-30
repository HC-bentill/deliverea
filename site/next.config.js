const rewriteRules = require('./config/rewrites.json')

module.exports = {
  async rewrites() {
    return rewriteRules
  },
}
