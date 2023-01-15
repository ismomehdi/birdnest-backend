const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const connectDb = (url) => {
    console.log('connecting to', url)
    mongoose.connect(url)
            .then(result => {
            console.log('connected to MongoDB')
            })
            .catch((error) => {
            console.log('error connecting to MongoDB:', error.message)
            })
}

module.exports = { connectDb }