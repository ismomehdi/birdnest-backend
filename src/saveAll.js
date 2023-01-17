const { savePilot } = require('../lib/savePilot')
const { isClosestDistance } = require('../lib/isClosestDistance')
const { saveClosestDistance } = require('../lib/saveClosestDistance')

const saveAll = async (pilot) => {
    await savePilot(pilot)
    if (await isClosestDistance(pilot)) await saveClosestDistance(pilot)
}

module.exports = { saveAll }