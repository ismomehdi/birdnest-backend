const ClosestDistance = require('../models/closestDistance')

const isClosestDistance = async (pilot) => {
    let doc = await ClosestDistance.findOne({})
    let closestDistance = doc ? doc.droneDistance : null

    return pilot.droneDistance < closestDistance || closestDistance === null
}

module.exports = { isClosestDistance }