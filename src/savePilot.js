const Pilot = require('../models/pilot')

const savePilot = async (pilot) => {
    const filter = { droneSerialNumber: pilot.droneSerialNumber }
    const update = { ...pilot }

    let doc = await Pilot.findOneAndUpdate(filter, update, {
        new: true,
        upsert: true
      }) 
}

module.exports = { savePilot }