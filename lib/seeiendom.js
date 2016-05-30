'use strict'

module.exports = function lookupSeeiendom (args, callback) {
  const seneca = this
  const sessionId = args.sessionId
  const key = args.key
  const address = args.address

  seneca.act({role: 'seeiendom', cmd: 'lookup', address: address}, function (error, data) {
    if (error) {
      console.error(error)
    } else {
      seneca.act({role: 'session', cmd: 'set', sessionId: sessionId, key: key, data: data})
    }
  })

  callback(null, {ok: true})
}
