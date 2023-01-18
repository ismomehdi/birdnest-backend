const Pilot = require('../models/pilot')

const savePilot = async (pilot) => {
    const filter = { droneSerialNumber: pilot.droneSerialNumber }
    
    var getPilotData =
      Pilot.findOne(filter)
            .then((oldPilot) => {

              if (oldPilot && oldPilot.droneDistance < pilot.droneDistance) {
                // Reset old pilot to update the expiration date.
                resetOldPilot =
                  {   
                    pilotId: oldPilot.pilotId,
                    firstName: oldPilot.firstName,
                    lastName: oldPilot.lastName,
                    phoneNumber: oldPilot.phoneNumber,
                    email: oldPilot.email,
                    droneSerialNumber: oldPilot.droneSerialNumber, 
                    droneDistance: oldPilot.droneDistance
                  }

                return resetOldPilot

              } else return pilot
            })

    let pilotData = await getPilotData
    let savePilotToDb = await Pilot.findOneAndUpdate(filter, pilotData, {
        new: true,
        upsert: true
      }) 
}

module.exports = { savePilot }