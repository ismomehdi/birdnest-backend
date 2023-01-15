const closestDistanceRouter = require('express').Router()
const ClosestDistance = require('../models/closestDistance')

closestDistanceRouter.get('/', async (req, res) => {
    const closestDistance = await ClosestDistance.find({})
    res.json(closestDistance)
  })

module.exports = closestDistanceRouter