'use strict'

module.exports = function prepareExternalLogData (args) {
  const data = args.data
  var document = {}
  document.documentId = data._id
  document.timeStamp = data.timeStamp
  document.documentStatus = [
    {
      timeStamp: new Date().getTime(),
      status: 'I kø'
    }
  ]
  document.fullName = data.dsfData.NAVN
  document.schoolName = data.skoleData.name

  return document
}
