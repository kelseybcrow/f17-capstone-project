const logsButton = document.querySelector('#get-logs-button')
const logList = document.querySelector('.log-list')

getPastLogs = (req, res) => {
    axios
        .get('http://localhost:4000/past-logs')
        .then((res) => {
            console.log(res.data)
            // logList.innerHTML = res.data
        })
        .catch((err) => {
            console.log(err)
        })
}

logsButton.addEventListener('click', getPastLogs)
