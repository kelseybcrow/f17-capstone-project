const pastLogsButton = document.querySelector('#get-logs-button')
const logList = document.querySelector('#log-list')

getPastLogs = () => {
    axios
        .get('http://localhost:4000/past-logs')
        .then((res) => {
            res.data.forEach((log) => {
                let logCard = `
                        <div class="card bg-light mb-3" style="max-width: 20rem;">
                            <div class="card-header">
                            <h3>${log['date']} pain log</h3>
                            </div>
                        <div class="card-body">
                            <h4 class="card-title">severity: ${log['severity']}</h4>
                            <h4 class="card-title">location: ${log['location']}</h4>
                            <h4 class="card-title">duration: ${log['duration']}</h4>
                        </div>
                        `

                logList.innerHTML += logCard
            })
        })
        .catch((err) => {
            console.log(err)
        })
}

// deleteLog = (id) => {
//     axios
//         .delete(`http://localhost:4000/past-logs/${id}`)
//         .then(() => getPastLogs())
//         .catch((err) => console.log(err))
// }

pastLogsButton.addEventListener('click', getPastLogs)
