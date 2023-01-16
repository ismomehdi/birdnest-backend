var url = require('url')
const WebSocket = require('ws')

const ClosestDistance = require('../models/closestDistance')
const Pilot = require('../models/pilot')

const sendToSocket = async (wss) => {
    const send = 
        await wss.on('connection', (ws) => {
            wss.clients.forEach(() => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send('Hello');
                }
            })
        })
}

module.exports = { sendToSocket }