require('dotenv').config()
const express = require('express')
const cors = require('cors')

const Pilot = require('./models/pilot')

const { scrapeDrones } = require('./services/scrapeDrones')
const { parseDrones } = require('./services/parseDrones')
const { filterByNDZ } = require('./services/filterByNDZ')
const { getNDZPilots } = require('./services/getNDZPilots')

const app = express()
app.use(cors())

const scrape = async () => {
    const data = await scrapeDrones()
    const drones = await parseDrones(data)
    const ndzDrones = await filterByNDZ(drones)
    const ndzPilots = await getNDZPilots(ndzDrones)

    return ndzPilots
}

const savePilot = async (pilot) => {
    const filter = { droneSerialNumber: pilot.droneSerialNumber }
    const update = { ...pilot }

    console.log('\nSaving pilot...\n')

    let doc = await Pilot.findOneAndUpdate(filter, update, {
        new: true,
        upsert: true
      }) 
}

app.get('/', async (req, res) => {
    res.send('hello world!')
})

setInterval( async () => {
    const ndzPilots = await scrape()
    ndzPilots.forEach(async pilot => await savePilot(pilot))
    console.log(ndzPilots)
}, 2000)

const PORT = process.env.PORT
app.listen(PORT)
