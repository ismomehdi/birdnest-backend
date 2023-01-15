const { savePilot } = require('./savePilot')
const { isClosestDistance } = require('./isClosestDistance')
const { saveClosestDistance } = require('./saveClosestDistance')

const saveAll = async (pilot) => {
    await savePilot(pilot)
    if (await isClosestDistance(pilot)) await saveClosestDistance(pilot)
}

module.exports = { saveAll }