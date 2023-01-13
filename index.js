const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()

const dronesAPI = {
    target: 'https://assignments.reaktor.com/birdnest/drones',
    changeOrigin: true,
    pathRewrite: { '^/api/drones': '' },
    onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*'
    }
}

const pilotsAPI = {
    target: 'https://assignments.reaktor.com/birdnest/pilots/',
    changeOrigin: true,
    pathRewrite: { '/api/pilots/': ''},
    onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*'
    }
}

const dronesProxy = createProxyMiddleware(dronesAPI)
app.use('/api/drones', dronesProxy)

const pilotsProxy = createProxyMiddleware(pilotsAPI)
app.use('/api/pilots/:serialNumber', pilotsProxy)

app.listen(3001)
