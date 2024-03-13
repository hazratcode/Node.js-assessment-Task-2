const express = require('express')
const connectDB = require('./src/utils/connectDB')
const {fork} = require('child_process')
const startCpuMonitoring = require('./src/cpuMonitor')
const startCpuIntensiveTaskPath = './src/utils/startCpuIntensiveTask'
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000



startCpuMonitoring()

const startCpuIntensiveTaskProcess = fork(startCpuIntensiveTaskPath);

app.get('/',(req,res) => {
    res.send("Hellow World")
})

app.listen(PORT, () => {
    connectDB()
    console.log(`Server running at http://localhost:${PORT}`)
})