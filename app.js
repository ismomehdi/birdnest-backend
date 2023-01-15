const config = require('./config/config')
const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')

const { connectDb } = require('./lib/connectDb')
const { updateDatabase } = require('./src/updateDatabase')

const pilotsRouter = require('./controllers/pilots')
const closestDistanceRouter = require('./controllers/closestDistance')

const server = http.createServer(app)
connectDb(config.MONGODB_URI)
app.use(cors())

setInterval(updateDatabase, 2000)
app.use('/api/pilots', pilotsRouter)
app.use('/api/closest', closestDistanceRouter)

server.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`)
  })
