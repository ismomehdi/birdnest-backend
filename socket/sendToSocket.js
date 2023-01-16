var url = require('url')
const WebSocket = require('ws')

const ClosestDistance = require('../models/closestDistance')
const Pilot = require('../models/pilot')

const sendToSocket = ws => {
    ws.send('Hello')

    setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
        ws.send('Hello');
    }
    }, 2000)
}

module.exports = { sendToSocket }