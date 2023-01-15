const { scrape } = require('./scrape')
const { saveAll } = require('./saveAll')

updateDatabase = async () => {
    const ndzPilots = await scrape()
    
    if (ndzPilots) await Promise.all(ndzPilots.map(saveAll))
}

module.exports = { updateDatabase }
