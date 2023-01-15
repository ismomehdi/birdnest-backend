const pilotsRouter = require('express').Router()
const Pilot = require('../models/pilot')

pilotsRouter.get('/', async (req, res) => {
    const pilots = await Pilot.find({})
    res.json(pilots)
  })

module.exports = pilotsRouter
