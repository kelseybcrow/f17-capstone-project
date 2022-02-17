const { default: axios } = require('axios')
const { getPastLogs } = require('../server/controller')
const { SERVER_PORT } = process.env

console.log('hello world')

const form = document.querySelector('form')
const dateInput = document.querySelector('#date-input')
const severityInput = document.querySelector('#severity-input')
const locationInput = document.querySelector('#location-input')
const durationInput = document.querySelector('#duration-input')

function handleSubmit(event) {
    event.preventDefault()

    if (!dateInput || !severityInput || !locationInput || !durationInput) {
        alert('Please fill out all fields')
        return
    }

    let body = {
        date: dateInput.value,
        severity: severityInput.value,
        location: locationInput.value,
        duration: durationInput.value,
    }

    axios
        .post(`${SERVER_PORT}/logs`, body)
        .then(() => {
            dateInput.value = ''
            severityInput.value = ''
            locationInput.value = ''
            durationInput.value = ''
            getPastLogs()
        })
        .catch((err) => console.log(err))
}

function getPastLogs() {
    logList.innerHTML = '
    '
    axios.get(`${SERVER_PORT}/logs`)
        .then((res) => {
            res.data.forEach((log) => {
                let logCard = `
                    <div class="card bg-light mb-3">
                        <div class="card-header">Pain log from ${dateInput}</div>
                        <div class="card-body">
                            <h4 class="card-title">Severity</h4>
                            <p class="card-text">${severityInput}</p>
                            <h4 class="card-title">Location</h4>
                            <p class="card-text">${locationInput}</p>
                            <h4 class="card-title">Duration</h4>
                            <p class="card-text">${durationInput}</p>
                        </div>
                    </div>
                    `
                logList.innerHTML += logCard
            })
    })
}

getPastLogs()
form.addEventListener('submit', handleSubmit)
