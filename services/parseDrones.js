const { XMLParser } = require("fast-xml-parser")

const parseDrones = async (data) => {
    const parser = new XMLParser()
    const parsedData = parser.parse(data)
                        .report.capture.drone

    const allDrones = parsedData
                        .map(drone => ({
                            serialNumber: drone.serialNumber,
                            Y: parseFloat(drone.positionY),
                            X: parseFloat(drone.positionX)
                        }))

    return allDrones
}

module.exports = { parseDrones }