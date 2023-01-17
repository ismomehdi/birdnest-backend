const axios = require("axios")

const scrapePilot = async (serialNumber) => {
    const baseUrl = 'https://assignments.reaktor.com/birdnest/pilots/'

    try {
        const request = axios.get(`${baseUrl}${serialNumber}`)    
        const response = await request
        return response.data

    } catch (error) {

        const errorPilot=
            {
            pilotId: '404: Pilot not found',
            firstName: '404: Pilot not found',
            lastName: '404: Pilot not found',
            phoneNumber: '404: Pilot not found',
            createdDt: '404: Pilot not found',
            email: '404: Pilot not found'
            }
        
        return errorPilot
    }

}

module.exports = { scrapePilot }