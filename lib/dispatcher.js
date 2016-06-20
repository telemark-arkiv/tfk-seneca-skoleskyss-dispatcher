'use strict'

const envs = process.env
const Distance = require('./distance')
const Seeiendom = require('./seeiendom')
const Queue = require('./queue')
const Sms = require('./sms')

module.exports = function (options) {
  const seneca = this

  seneca.add('role:lookup, cmd:distance', Distance)
  seneca.add('role:lookup, cmd:seeiendom', Seeiendom)
  seneca.add('role:info, cmd:queue, msg:add', Queue)
  seneca.add('role:message, cmd:sms', Sms)

  return {
    name: envs.TFK_SENECA_SKOLESKYSS_DISPATCHER_TAG || 'tfk-seneca-skoleskyss-dispatcher'
  }
}
