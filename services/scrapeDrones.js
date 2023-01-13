const axios = require("axios")

const scrapeDrones = async () => {
    const dronesUrl = 'https://assignments.reaktor.com/birdnest/drones'
    
    const request = axios.get(dronesUrl)
    const response = await request

    return response.data
}

module.exports = { scrapeDrones }