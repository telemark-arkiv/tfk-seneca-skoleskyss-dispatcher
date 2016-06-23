'use strict'

const prepareExternalLogData = require('./prepare-external-log-data')

module.exports = function queueAdded (args, callback) {
  const seneca = this
  const document = prepareExternalLogData(args)
  seneca.act({role: 'log', cmd: 'add', type: 'external', data: document})

  callback(null, {ok: true})
}
