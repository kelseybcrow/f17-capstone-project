const { port } = require('./index')

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
        .post(`${port}/pain-logs`, body)
        .then(() => {
            dateInput.value = ''
            severityInput.value = ''
            locationInput.value = ''
            durationInput.value = ''
            getPainLogs()
        })
        .catch((err) => console.log(err))
}

// function getPainLogs() {
//     logList.innerHTML = '
//     '
//     axios.get(`${port}/pain-logs`)
//         .then((res) => {
//             res.data.forEach((log) => {
//                 let logCard = `
//                     <div class="card bg-light mb-3">
//                         <div class="card-header">Pain log from ${dateInput}</div>
//                         <div class="card-body">
//                             <h4 class="card-title">Severity</h4>
//                             <p class="card-text">${severityInput}</p>
//                             <h4 class="card-title">Location</h4>
//                             <p class="card-text">${locationInput}</p>
//                             <h4 class="card-title">Duration</h4>
//                             <p class="card-text">${durationInput}</p>
//                         </div>
//                     </div>
//                     `
//                 logList.innerHTML += logCard
//             })
//     })
// }

// getPainLogs()
form.addEventListener('submit', handleSubmit)
