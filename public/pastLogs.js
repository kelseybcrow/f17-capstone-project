const logsButton = document.querySelector('.get-logs-button')
const logList = document.querySelector('.log-list')

axios
    .get('http://localhost:4000')
    .then((res) => {
        console.log(res.data)
    })
    .catch((err) => console.log(err))

getPainLogs = (req, res) => {
    axios
        .get('http://localhost:4000/pain-logs')
        .then((res) => {
            console.log(res.data)
            // logList.innerHTML = res.data
        })
        .catch((err) => {
            console.log(err)
        })
}

logsButton.addEventListener('submit', getPainLogs)
