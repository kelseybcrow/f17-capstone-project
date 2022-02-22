const logList = document.querySelector('#log-list')

deleteLog = (id) => {
    console.log(id)
    axios
        .delete(`http://localhost:4000/past-logs/${id}`)
        .then(() => getPastLogs())
        .catch((err) => console.log(err))
    location.reload()
}

let logCards = []

getPastLogs = () => {
    axios
        .get('http://localhost:4000/past-logs')
        .then((res) => {
            logCards = res.data
            logCards.forEach((log) => {
                console.log(log)

                let masterCard = document.createElement('div')
                masterCard.classList.add('my-4')
                masterCard.style.border = 'thin solid #D0D0D0'
                let logCard = document.createElement('div')
                logCard.classList.add('card', 'bg-light')
                masterCard.appendChild(logCard)

                let cardHeader = document.createElement('div')
                cardHeader.classList.add('card-header', 'py-3')
                logCard.appendChild(cardHeader)

                let date = document.createElement('h2')
                date.innerText = log.date + ' pain log'
                cardHeader.appendChild(date)

                let deleteButton = document.createElement('button')
                deleteButton.classList.add('btn', 'btn-primary')
                deleteButton.innerText = 'delete this log'
                deleteButton.addEventListener('click', () => {
                    deleteLog(log.id)
                })
                cardHeader.appendChild(deleteButton)

                let cardBody = document.createElement('div')
                cardBody.classList.add('card-body', 'py-2')

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
            })
        })
        .catch((err) => {
            console.log(err)
        })
}

getPastLogs()
