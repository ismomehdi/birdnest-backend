const mongoose = require('mongoose')

const pilotSchema = new mongoose.Schema({
  pilotId: String,
  firstName: String,
  lastName: String,
  phoneNumber: String,
  email: String,
  droneSerialNumber: String,
  droneDistance: Number,
  expireAt: { type: Date, expires: 600, default: Date.now }
})

pilotSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Pilot = mongoose.model('Pilot', pilotSchema)
module.exports = Pilot
