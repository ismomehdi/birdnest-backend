const express = require('express')
const axios = require("axios")
const { XMLParser } = require("fast-xml-parser")

const app = express()

const scrapeDrones = async () => {
    const dronesUrl = 'https://assignments.reaktor.com/birdnest/drones'
    
    const request = axios.get(dronesUrl)
    const response = await request

    return response.data
}

const parseDrones = async (data) => {
    const parser = new XMLParser()
    const parsedData = parser.parse(data)
                        .report.capture.drone

    const allDrones = parsedData
                        .map(drone => ({
                            serialNumber: drone.serialNumber,
                            Y: parseFloat(drone.positionY),
                            X: parseFloat(drone.positionX)
                        }))

    return allDrones
}

app.get('/api/drones', async (req, res) => {
    const data = await scrapeDrones()
    const drones = await parseDrones(data)

    console.log('')
    console.log('this is the raw data:')
    console.log('')
    console.log(data)
    console.log('')

    console.log('these are the parsed drones:')
    console.log('')
    console.log(drones)
    console.log('')


    res.send('hello world!')
})

app.listen(3001)
