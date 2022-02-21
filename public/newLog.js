const form = document.querySelector('form')
const dateInput = document.querySelector('#date-input')
const locationInput = document.querySelector('#location-input')
const submitLogButton = document.querySelector('#submit-log-button')

// console.log(severityInput)
// console.log(durationInput)

handleNewLog = (event) => {
    event.preventDefault()

    let severityInput = document
        .getElementsByName('severity')
        .forEach((elem) => {
            // if (elem.checked) {
            //     return elem.value
            // }
            console.log(elem)
        })
    let durationInput = document
        .getElementsByName('duration')
        .forEach((elem) => {
            // if (elem.checked) {
            //     return elem.value
            // }
            console.log(elem)
        })

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

createLogCard = (pastLog) => {
    const logCard = `
        <div class="card bg-light mb-3" style="max-width: 20rem;">
            <div class="card-header">
            <h3>${date}</h3>
            </div>
        <div class="card-body">
            <h4 class="card-title">${severity}</h4>
            <h4 class="card-title">${location}</h4>
            <h4 class="card-title">${duration}</h4>
        </div>
        `

    return logCard
}

submitLogButton.addEventListener('click', handleNewLog)
