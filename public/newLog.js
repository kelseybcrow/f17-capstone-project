const form = document.querySelector('form')
const dateInput = document.querySelector('#date-input')
const locationInput = document.querySelector('#location-input')
const newLogButton = document.querySelector('#create-log-button')

createNewLog = (event) => {
    event.preventDefault()

    const severityInput = document.querySelector(
        'input[name="severity"]:checked'
    ).value
    const durationInput = document.querySelector(
        'input[name="duration"]:checked'
    ).value

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
            // console.log(res.data)
            alert('Your new pain log has been successfully created!')
        })
        .catch((err) => {
            console.log(err)
        })

    form.reset()
}

newLogButton.addEventListener('click', createNewLog)
