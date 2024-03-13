const express = require('express')
const connectDB = require('./src/utils/connectDB')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.get('/',(req,res) => {
    res.send("Hellow World")
})

app.listen(PORT, () => {
    connectDB()
    console.log(`Server running at http://localhost:${PORT}`)
})