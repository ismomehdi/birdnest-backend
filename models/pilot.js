const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

console.log('connecting to', url)
mongoose.connect(url)
        .then(result => {
          console.log('connected to MongoDB')
        })
        .catch((error) => {
          console.log('error connecting to MongoDB:', error.message)
        })

const pilotSchema = new mongoose.Schema({
  pilotId: String,
  firstName: String,
  lastName: String,
  phoneNumber: String,
  createdDt: Date,
  email: String,
  droneSerialNumber: String,
  droneDistance: Number
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
