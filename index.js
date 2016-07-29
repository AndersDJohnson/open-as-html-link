var fs = require('fs')
var opn = require('opn')
var tempfile = require('tempfile')
var htmlLink = require('html-link')

module.exports = function (uri, name) {
  name = name || uri
  var f = tempfile('.html')
  var html = htmlLink(uri, name)
  fs.writeFileSync(f, html)
  opn(f, {
    wait: false
  })
}
