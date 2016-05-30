'use strict'

module.exports = function measureDistance (args, callback) {
  const seneca = this
  const sessionId = args.sessionId
  const key = args.key
  const origin = args.origin
  const destination = args.destination

  seneca.act({role: 'distance', cmd: 'measure', origin: origin, destination: destination}, function (error, data) {
    if (error) {
      console.error(error)
    } else {
      seneca.act({role: 'session', cmd: 'set', sessionId: sessionId, key: key, data: data})
    }
  })

  callback(null, {ok: true})
}
