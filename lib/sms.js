'use strict'

function createReceivers (phone) {
  const compactNumber = parseInt(phone.toString().replace(/\s/g, ''), 10)
  if (compactNumber.toString().startsWith('47')) {
    return [compactNumber]
  } else {
    return ['47' + compactNumber.toString()]
  }
}

module.exports = function sendSMS (args, callback) {
  const seneca = this
  const phone = args.phone

  const payload = {
    role: 'sms',
    cmd: 'send',
    sender: 'Skoleskyss',
    receivers: createReceivers(phone),
    message: '270D27130020005300F8006B006E006100640020006D006F007400740061007400740020263A270C',
    operation: 9
  }

  seneca.act(payload, function (error, data) {
    if (error) {
      console.error(error)
    } else {
      console.log(data)
    }
  })

  callback(null, {ok: true})
}
