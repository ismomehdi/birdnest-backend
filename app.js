const config = require('./utils/config')
const WebSocket = require('ws')
const PORT = process.env.PORT || 3001

const { connectDb } = require('./lib/connectDb')
const { updateDatabase } = require('./src/updateDatabase')
const getAllFromDb = require('./lib/getAllFromDb')

connectDb(config.MONGODB_URI)
setInterval(updateDatabase, 2000)

const wss = new WebSocket.Server({ PORT }) 
wss.on('connection', (ws) => {
  getAllFromDb().then(data => ws.send(JSON.stringify(data)))

  setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
      getAllFromDb().then(data => ws.send(JSON.stringify(data)))
    }
  }, 2000)
})
