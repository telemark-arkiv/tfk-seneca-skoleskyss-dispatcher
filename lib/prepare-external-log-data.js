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
  if (data.skoleData && data.skoleData.name) {
    document.schoolName = data.skoleData.name
  }

  if (data.skoleadresse && data.skoleadresse.skoleNavn) {
    document.schoolName = data.skoleadresse.skoleNavn
  }

  return document
}
