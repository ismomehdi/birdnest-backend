const config = require('./config/config')
const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')

const { connectDb } = require('./lib/connectDb')
const { updateDatabase } = require('./src/updateDatabase')


const server = http.createServer(app)
connectDb(config.MONGODB_URI)
app.use(cors())

setInterval(updateDatabase, 2000)

server.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`)
  })
  