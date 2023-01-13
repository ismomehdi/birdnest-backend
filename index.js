const express = require('express')
const { scrapeDrones } = require('./services/scrapeDrones')
const { parseDrones } = require('./services/parseDrones')
const { filterByNDZ } = require('./services/filterByNDZ')

const app = express()

app.get('/api/drones', async (req, res) => {
    const data = await scrapeDrones()
    const drones = await parseDrones(data)
    const ndzDrones = await filterByNDZ(drones)

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

    res.send('hello world!')
})

app.listen(3001)
