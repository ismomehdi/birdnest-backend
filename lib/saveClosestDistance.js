const ClosestDistance = require('../models/closestDistance')

const saveClosestDistance = async (pilot) => {
    const newClosestDistance = new ClosestDistance({
        droneSerialNumber: pilot.droneSerialNumber,
        droneDistance: pilot.droneDistance
    })

    await newClosestDistance.save()
}

module.exports = { saveClosestDistance }