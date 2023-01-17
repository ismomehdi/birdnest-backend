const { scrapeAndParse } = require('./scrapeAndParse')
const { saveAll } = require('./saveAll')

updateDatabase = async () => {
    const ndzPilots = await scrapeAndParse()
    if (!ndzPilots) return
    await Promise.all(ndzPilots.map(saveAll))
}

module.exports = { updateDatabase }
