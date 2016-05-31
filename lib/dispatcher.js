'use strict'

const envs = process.env
const Distance = require('./distance')
const Seeiendom = require('./seeiendom')
const Queue = require('./queue')

module.exports = function (options) {
  const seneca = this

  seneca.add('role:lookup, cmd:distance', Distance)
  seneca.add('role:lookup, cmd:seeiendom', Seeiendom)
  seneca.add('role:info, cmd:queue, msg:add', Queue)

  return {
    name: envs.TFK_SENECA_SKOLESKYSS_DISPATCHER_TAG || 'tfk-seneca-skoleskyss-dispatcher'
  }
}
