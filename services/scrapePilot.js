const axios = require("axios")

const scrapePilot = async (serialNumber) => {
    const baseUrl = 'https://assignments.reaktor.com/birdnest/pilots/'

    const request = axios.get(`${baseUrl}${serialNumber}`)    
    const response = await request

    return response.data
}

module.exports = { scrapePilot }