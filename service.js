'use strict'

const Seneca = require('seneca')
const Mesh = require('seneca-mesh')
const Dispatcher = require('./lib/dispatcher')
const envs = process.env

const options = {
  seneca: {
    tag: envs.TFK_SENECA_SKOLESKYSS_DISPATCHER_TAG || 'tfk-seneca-skoleskyss-dispatcher'
  },
  mesh: {
    auto: true,
    listen: [
      {pin: 'role:lookup, cmd:seeiendom', model: 'consume'},
      {pin: 'role:lookup, cmd:distance', model: 'consume'}
    ]
  },
  dispatcher: {
    url: envs.TFK_SENECA_SKOLESKYSS_DISPATCHER_URL || 'https://skoleskyssdispatcher.no'
  },
  isolated: {
    host: envs.TFK_SENECA_SKOLESKYSS_DISPATCHER_HOST || 'localhost',
    port: envs.TFK_SENECA_SKOLESKYSS_DISPATCHER_PORT || 8000
  }
}

var Service = Seneca(options.seneca)

if (envs.TFK_SENECA_SKOLESKYSS_DISPATCHER_ISOLATED) {
  Service.listen(options.isolated)
} else {
  Service.use(Mesh, options.mesh)
}

Service.use(Dispatcher, options.dispatcher)
