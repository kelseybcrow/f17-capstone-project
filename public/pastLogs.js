const pastLogsButton = document.querySelector('#get-logs-button')
const logList = document.querySelector('#log-list')

getPastLogs = () => {
    axios
        .get('http://localhost:4000/past-logs')
        .then((res) => {
            // console.log(res.data)
            res.data.forEach((log) => {
                // console.log(log['date'], log['severity'])
                let logCard = `
                        <div class="card bg-light mb-3" style="max-width: 20rem;">
                            <div class="card-header">
                            <h3>${log['date']}</h3>
                            </div>
                        <div class="card-body">
                            <h4 class="card-title">${log['severity']}</h4>
                            <h4 class="card-title">${log['location']}</h4>
                            <h4 class="card-title">${log['duration']}</h4>
                        </div>
                        `

                logList.innerHTML += logCard
            })
        })
        .catch((err) => {
            console.log(err)
        })
}

pastLogsButton.addEventListener('click', getPastLogs)
