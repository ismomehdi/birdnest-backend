const { scrape } = require('./scrape')
const { saveAll } = require('./saveAll')

updateDatabase = async () => {
    const ndzPilots = await scrape()

    console.log('the pilots are', ndzPilots)

    if (ndzPilots) await Promise.all(ndzPilots.map(saveAll(pilot)))
}

module.exports = { updateDatabase }