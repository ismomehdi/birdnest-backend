require('dotenv').config()
const express = require('express')
const cors = require('cors')

const { connectDb } = require('./services/connectDb')
const Pilot = require('./models/pilot')
const ClosestDistance = require('./models/closestDistance')

const { scrapeDrones } = require('./services/scrapeDrones')
const { parseDrones } = require('./services/parseDrones')
const { filterByNDZ } = require('./services/filterByNDZ')
const { getNDZPilots } = require('./services/getNDZPilots')

const app = express()
app.use(cors())

const url = process.env.MONGODB_URI
connectDb(url)

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

const isClosestDistance = async (pilot) => {
    let doc = await ClosestDistance.findOne({})
    let closestDistance = doc ? doc.droneDistance : null

    return pilot.droneDistance < closestDistance || closestDistance === null
}

const saveClosestDistance = async (pilot) => {
    console.log('\nSaving closest distance...\n')

    const newClosestDistance = new ClosestDistance({
        droneSerialNumber: pilot.droneSerialNumber,
        droneDistance: pilot.droneDistance
    })

    await newClosestDistance.save()
    console.log('Saved closest distance')
}

app.get('/', async (req, res) => {
    res.send('hello world!')
})

setInterval( async () => {
    const ndzPilots = await scrape()

    ndzPilots.forEach(async pilot => {
        await savePilot(pilot)
        if (await isClosestDistance(pilot)) await saveClosestDistance(pilot)
    })

    console.log(ndzPilots)
}, 2000)

const PORT = process.env.PORT
app.listen(PORT)
