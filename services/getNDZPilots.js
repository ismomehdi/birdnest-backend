const { scrapePilot } = require('./scrapePilot')

const getNDZPilots = async (ndzDrones) => {
    const pilots = ndzDrones.map(async drone => {
        const pilot = await scrapePilot(drone.serialNumber)
        
        return { ...pilot, droneSerialNumber: drone.serialNumber, 
            droneDistance: drone.distance }
    })

    return Promise.all(pilots)
}

module.exports = { getNDZPilots }
