const Pilot = require('../models/pilot')
const ClosestDistance = require('../models/closestDistance')

const getAllFromDb = async () => {
    const pilots = await Pilot.find({})
    const closestDistance = await ClosestDistance.find({})
    const mergeAll = [...pilots, closestDistance[0]]
    
    return mergeAll
}

module.exports = getAllFromDb