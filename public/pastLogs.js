const { getPastLogs } = require('../server/controller.js')
const { createLogCard } = require('./newLog.js')

const logsButton = document.querySelector('#get-logs-button')
const logList = document.querySelector('#log-list')

getPastLogs = () => {
    axios
        .get('http://localhost:4000/past-logs')
        .then((res) => {
            console.log(res.data)
            res.data.forEach((pastLog) => {
                const logCard = createLogCard(pastLog)

                logList.innerHTML += logCard
            })
        })
        .catch((err) => {
            console.log(err)
        })
}

// getPastLogs()
logsButton.addEventListener('click', getPastLogs)
