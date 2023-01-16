const mongoose = require('mongoose')

const closestDistanceSchema = new mongoose.Schema(
{
    category: { type: String, default: 'closestDistance' },
    droneSerialNumber: String,
    droneDistance: Number  
}, 
{ 
    capped: { size: 1024, max: 1 } 
}
)

closestDistanceSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const ClosestDistance = mongoose.model(
    'ClosestDistance', closestDistanceSchema)

module.exports = ClosestDistance
