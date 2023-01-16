const config = require('./utils/config')
const express = require('express')
const app = express()
const WebSocket = require('ws')

const cors = require('cors')
const { connectDb } = require('./lib/connectDb')
const { updateDatabase } = require('./src/updateDatabase')

connectDb(config.MONGODB_URI)

const wss = new WebSocket.Server({ port: 3001 }) 
setInterval(updateDatabase, 2000)

wss.on('connection', (ws) => {
  ws.send('Hello')

  setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
        ws.send('Hello');
    }
  }, 2000)
})

app.use(cors())

//server.listen(config.PORT, () => {
//    console.log(`Server running on port ${config.PORT}`)
//  })
