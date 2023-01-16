const pilotsRouter = require('express').Router()
const Pilot = require('../models/pilot')
const WebSocket = require('ws')

pilotsRouter.get('/', async (req, res) => {
    const pilots = await Pilot.find({})

    res.json(pilots)
  })

module.exports = pilotsRouter
