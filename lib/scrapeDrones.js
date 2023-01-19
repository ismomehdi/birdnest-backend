const axios = require("axios")

const scrapeDrones = async () => {
    const dronesUrl = 'https://assignments.reaktor.com/birdnest/drones'
    
    try {
        const request = axios.get(dronesUrl)
        const response = await request

        return response.data

    } catch (error) {
        console.log('Error: Could not scrape drones.')

        return undefined
    }
}

module.exports = { scrapeDrones }