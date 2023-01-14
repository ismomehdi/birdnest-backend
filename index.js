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
    if (pilot === undefined) { return }

    const dbObject = new Pilot({ ...pilot })
    const savedPilot = await dbObject.save()
}

app.get('/', async (req, res) => {
    res.send('hello world!')
})

setInterval( async () => {
    const ndzPilots = await scrape()
    const savePilots = await savePilot(...ndzPilots)
    console.log('ndzPilots', ndzPilots)
}, 2000)

const PORT = process.env.PORT
app.listen(PORT)
