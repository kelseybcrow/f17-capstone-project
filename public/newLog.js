const form = document.querySelector('form')
const dateInput = document.querySelector('#date-input')
const locationInput = document.querySelector('#location-input')
const submitLogButton = document.querySelector('#submit-log-button')

submitLogButton.addEventListener('submit', createNewLog)

// let severityInput = document.querySelector(
//     'input[name="severity"]:checked'
// ).value
// let durationInput = document.querySelector(
//     'input[name="duration"]:checked'
// ).value
