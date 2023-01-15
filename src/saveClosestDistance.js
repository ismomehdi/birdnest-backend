const ClosestDistance = require('../models/closestDistance')

const saveClosestDistance = async (pilot) => {
    console.log('\nSaving closest distance...\n')

    const newClosestDistance = new ClosestDistance({
        droneSerialNumber: pilot.droneSerialNumber,
        droneDistance: pilot.droneDistance
    })

    await newClosestDistance.save()
    console.log('Saved closest distance')
}

module.exports = { saveClosestDistance }