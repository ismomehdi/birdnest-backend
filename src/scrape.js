const { scrapeDrones } = require('../lib/scrapeDrones')
const { parseDrones } = require('../lib/parseDrones')
const { filterByNDZ } = require('../lib/filterByNDZ')
const { getNDZPilots } = require('../lib/getNDZPilots')

const scrape = async () => {
    const data = await scrapeDrones()
    const drones = await parseDrones(data)
    const ndzDrones = await filterByNDZ(drones)
    const ndzPilots = await getNDZPilots(ndzDrones)

    return ndzPilots
}

module.exports = { scrape }