const Pilot = require('../models/pilot')

const savePilot = async (pilot) => {
    const filter = { droneSerialNumber: pilot.droneSerialNumber }
    const update = { ...pilot }

    console.log('\nSaving pilot...\n')

    let doc = await Pilot.findOneAndUpdate(filter, update, {
        new: true,
        upsert: true
      }) 
}

module.exports = { savePilot }