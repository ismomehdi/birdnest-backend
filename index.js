const config = require('./utils/config')

const { createServer }  = require('http')
const express = require('express')
const WebSocket = require('ws')

const app = express()
app.use(express.static('build'))

const PORT = process.env.PORT || 3001

const { connectDb } = require('./lib/connectDb')
const { updateDatabase } = require('./src/updateDatabase')
const getAllFromDb = require('./src/getAllFromDb')

connectDb(config.MONGODB_URI)
setInterval(updateDatabase, 2000)

const wss = new WebSocket.Server({ server:app.listen(PORT) }) 
wss.on('connection', (ws) => {
  getAllFromDb().then(data => ws.send(JSON.stringify(data)))

  setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
      getAllFromDb().then(data => ws.send(JSON.stringify(data)))
    }
  }, 2000)
})
