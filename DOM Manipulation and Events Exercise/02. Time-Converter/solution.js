function attachEventsListeners() {

    const dayInput = document.getElementById('days')
    const hoursInput = document.getElementById('hours')
    const minutesInput = document.getElementById('minutes')
    const secondsInput = document.getElementById('seconds')

    const daysButton = document.getElementById('daysBtn')
    daysButton.addEventListener('click', () => {
        hoursInput.value = dayInput.value * 24
        minutesInput.value = hoursInput.value * 60
        secondsInput.value = minutesInput.value * 60

    })

    const hoursButton = document.getElementById('hoursBtn')
    hoursButton.addEventListener('click', () => {
        dayInput.value = hoursInput.value / 24
        minutesInput.value = hoursInput.value * 60
        secondsInput.value = minutesInput.value * 60

    })

    const minutesButton = document.getElementById('minutesBtn')
    minutesButton.addEventListener('click', () => {
        secondsInput.value = minutesInput.value * 60
        hoursInput.value = minutesInput.value / 60
        dayInput.value = hoursInput.value / 24

    })

    const secondsButton = document.getElementById('secondsBtn')
    secondsButton.addEventListener('click', () => {
        minutesInput.value = secondsInput.value / 60
        hoursInput.value = minutesInput.value / 60
        dayInput.value = hoursInput.value / 24

    })

}