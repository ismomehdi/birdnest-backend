const { scrapePilot } = require('./scrapePilot')

const getNDZPilots = async (ndzDrones) => {
    const pilots = ndzDrones.map(async drone => {
        const pilot = await scrapePilot(drone.serialNumber)

        return (
            {   
                pilotId: pilot.pilotId,
                firstName: pilot.firstName,
                lastName: pilot.lastName,
                phoneNumber: pilot.phoneNumber,
                email: pilot.email,
                droneSerialNumber: drone.serialNumber, 
                droneDistance: drone.distance
            }
        )
    })

    return Promise.all(pilots)
}

module.exports = { getNDZPilots }
