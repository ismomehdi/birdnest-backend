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

    console.log('')
    console.log('this is the raw data:')
    console.log('')
    console.log(data)
    console.log('')

    console.log('these are the parsed drones:')
    console.log('')
    console.log(drones)
    console.log('')

    console.log('these are the ndz drones:')
    console.log('')
    console.log(ndzDrones)
    console.log('')

    console.log('this is the pilot data:')
    console.log('')
    console.log(ndzPilots)
    console.log('')

}

app.get('/', async (req, res) => {
    res.send('hello world!')
})

setInterval(scrape, 2000)

app.listen(3001)
