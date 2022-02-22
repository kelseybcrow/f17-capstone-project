const form = document.querySelector('form')
const logList = document.querySelector('#log-list')

const newLogButton = document.querySelector('#create-log-button')
const pastLogsButton = document.querySelector('#get-logs-button')

const dateInput = document.querySelector('#date-input')
const locationInput = document.querySelector('#location-input')

// console.log(severityInput)
// console.log(durationInput)

handleNewLog = (event) => {
    event.preventDefault()

    const severityInput = document.querySelector(
        'input[name="severity"]:checked'
    ).value
    console.log(severityInput)

    const durationInput = document.querySelector(
        'input[name="duration"]:checked'
    ).value
    console.log(durationInput)

    const body = {
        date: dateInput.value,
        severity: severityInput,
        location: locationInput.value,
        duration: durationInput,
    }

    console.log(body)

    axios
        .post('http://localhost:4000/past-logs', body)
        .then((res) => {
            console.log(res.data)
            alert('success')
        })
        .catch((err) => {
            console.log(err)
        })

    form.reset()
}

getPastLogs = () => {
    axios
        .get('http://localhost:4000/past-logs')
        .then((res) => {
            console.log(res.data)
            logList.innerHTML = res.data
            // res.data.forEach((elem) => {
            //     //     const logCard = `
            //     //         <div class="card bg-light mb-3" style="max-width: 20rem;">
            //     //             <div class="card-header">
            //     //             <h3>${elem[date]}</h3>
            //     //             </div>
            //     //         <div class="card-body">
            //     //             <h4 class="card-title">${elem[severity]}</h4>
            //     //             <h4 class="card-title">${elem[location]}</h4>
            //     //             <h4 class="card-title">${elem[duration]}</h4>
            //     //         </div>
            //     //         `
            // })
        })
        .catch((err) => {
            console.log(err)
        })
}

// pastLogsButton.addEventListener('click', getPastLogs)

newLogButton.addEventListener('click', handleNewLog)
