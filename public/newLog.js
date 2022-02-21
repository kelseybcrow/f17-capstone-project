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

submitLogButton.addEventListener('click', handleNewLog)
