const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()

const dronesAPI = {
    target: 'https://assignments.reaktor.com/birdnest/drones',
    changeOrigin: true,
    pathRewrite: { '^/api/drones': '' }
}

const pilotsAPI = {
    target: 'https://assignments.reaktor.com/birdnest/pilots/',
    changeOrigin: true,
    pathRewrite: { '/api/pilots/': ''}
}

const dronesProxy = createProxyMiddleware(dronesAPI)
app.use('/api/drones', dronesProxy)

const pilotsProxy = createProxyMiddleware(pilotsAPI)
app.use('/api/pilots/:serialNumber', pilotsProxy)

app.listen(3001)
