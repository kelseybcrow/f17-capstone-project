const pastLogsButton = document.querySelector('#get-logs-button')
const logList = document.querySelector('#log-list')

deleteLog = (id) => {
    console.log(id)
    axios
        .delete(`http://localhost:4000/past-logs/${id}`)
        .then(() => getPastLogs())
        .catch((err) => console.log(err))
}

let logCards = []

getPastLogs = () => {
    axios
        .get('http://localhost:4000/past-logs')
        .then((res) => {
            logCards = res.data
            logCards.forEach((log) => {
                console.log(log)
                // let logCard = `
                //         <div class="card bg-light mb-3" style="max-width: 20rem;">
                //             <div class="card-header">
                //             <h3>${log['date']} pain log</h3>

                //             </div>
                //         <div class="card-body">
                //             <h4 class="card-title">severity: ${log['severity']}</h4>
                //             <h4 class="card-title">location: ${log['location']}</h4>
                //             <h4 class="card-title">duration: ${log['duration']}</h4>
                //         </div>
                //         `
                let masterCard = document.createElement('div')
                let logCard = document.createElement('div')
                logCard.classList.add('card', 'bg-light', 'mb-3')

                let cardHeader = document.createElement('div')
                cardHeader.classList.add('card-header')
                logCard.appendChild(cardHeader)
                let date = document.createElement('h3')
                date.innerText = log.date
                logCard.appendChild(date)
                masterCard.appendChild(logCard)

                let cardBody = document.createElement('div')
                cardBody.classList.add('card-body')

                let severity = document.createElement('h4')
                severity.classList.add('card-title')
                severity.innerText = `severity: ${log['severity']}`
                cardBody.appendChild(severity)
                cardBody.classList.add('card-body')

                let location = document.createElement('h4')
                location.classList.add('card-title')
                location.innerText = `location: ${log['location']}`
                cardBody.appendChild(location)
                cardBody.classList.add('card-body')

                let duration = document.createElement('h4')
                duration.classList.add('card-title')
                duration.innerText = `duration: ${log['duration']}`
                cardBody.appendChild(duration)

                masterCard.appendChild(cardBody)
                logList.appendChild(masterCard)

                // let deleteButton = document.getElementById(`${log.id}`)
                // let deleteButton = document.createElement('button')
                // deleteButton.innerText = 'x'
                // deleteButton.addEventListener('click', () => console.log('hit'))
                // cardBody.appendChild(deleteButton)
                // console.log(deleteButton)
            })
        })
        .catch((err) => {
            console.log(err)
        })
}

pastLogsButton.addEventListener('click', getPastLogs)
