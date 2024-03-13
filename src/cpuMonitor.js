const pidusage = require('pidusage')

function startCpuMonitoring(interval = 10000){
    setInterval(() => {
        pidusage(process.pid, (err,stats) => {
            if(err){
                return console.error("Cant'find CPU Usage",err)
            }
            console.log(`CPU Usage (%): ${stats.cpu.toFixed(2)}, Memory Usage (MB): ${(stats.memory /1024/1024).toFixed(2)}`)
        })
    }, interval)
}

module.exports = startCpuMonitoring;