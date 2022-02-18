const { baseUrl } = 'http://localhost:4000/pain-logs'

const form = document.querySelector('form')
const submit = document.querySelector('#submit-button')
// DATE INPUT
const dateInput = document.querySelector('#date-input')

// SEVERITY INPUT
let severityInput = document.querySelector(
    'input[name="severity"]:checked'
).value

// LOCATION INPUT
const locationInput = document.querySelector('#location-input')

// DURATION INPUT
let durationInput = document.querySelector(
    'input[name="duration"]:checked'
).value

// function resetFormValues() {
//     // resetting date
//     // resetting severity
//     // resetting location
//     // resetting duration
// }

function handleSubmit(event) {
    event.preventDefault()

    // if (!dateInput || !severityInput || !locationInput || !durationInput) {
    //     alert('Please fill out all fields')
    //     return
    // }

    let body = {
        date: dateInput.value,
        severity: severityInput,
        location: locationInput.value,
        duration: durationInput,
    }

    axios
        .post(`${baseUrl}`, body)
        .then(() => {
            // resetFormValues()
            // getPainLogs()
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
