const { XMLParser } = require("fast-xml-parser")

const parseDrones = (data) => {
    const parser = new XMLParser()
    const parsedDrones = parser.parse(data).report.capture.drone

    const allDrones = parsedDrones
                        .map(drone => ({
                            serialNumber: drone.serialNumber,
                            Y: parseFloat(drone.positionY),
                            X: parseFloat(drone.positionX)
                        }))

    return allDrones
} 

module.exports = { parseDrones }