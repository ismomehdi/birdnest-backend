const filterByNDZ = (drones) => {
    const ndzRadius = 100000
    const ndzX = 250000
    const ndzY = 250000

    const getDistance = (drone) => {
        var d = Math.sqrt(
            (drone.X - ndzX) ** 2 + 
            (drone.Y - ndzY) ** 2
        )

        return d
    }

    const isWithinNDZ = (d) => 
        d <= ndzRadius

    var dronesWithDistance = drones.map(drone => 
        ({ ...drone, distance: getDistance(drone) }))

    var ndzDrones = dronesWithDistance.filter(drone => 
        isWithinNDZ(drone.distance))

    return ndzDrones
}

module.exports = { filterByNDZ }