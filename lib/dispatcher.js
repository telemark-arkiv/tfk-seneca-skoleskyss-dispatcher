'use strict'

const envs = process.env
const Distance = require('./distance')
const Seeiendom = require('./seeiendom')

module.exports = function (options) {
  const seneca = this

  seneca.add('role:lookup, cmd:distance', Distance)
  seneca.add('role:lookup, cmd:seeiendom', Seeiendom)

  return {
    name: envs.TFK_SENECA_SKOLESKYSS_DISPATCHER_TAG || 'tfk-seneca-skoleskyss-dispatcher'
  }
}
