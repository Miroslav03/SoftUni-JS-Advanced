function attachEventsListeners() {

    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', () => {
        hoursInput.value = Number(daysInput.value) * 24;
        minutesInput.value = Number(hoursInput.value) * 60;
        secondsInput.value = Number(minutesInput.value) * 60;
    })
    hoursBtn.addEventListener('click', () => {
        daysInput.value = Number(hoursInput.value) / 24;
        minutesInput.value = Number(hoursInput.value) * 60;
        secondsInput.value = Number(minutesInput.value) * 60;
    })
    minutesBtn.addEventListener('click', () => {
        hoursInput.value = Number(minutesInput.value) / 60;
        daysInput.value = Number(hoursInput.value) / 24;
        secondsInput.value = Number(minutesInput.value) * 60;
    })
    secondsBtn.addEventListener('click', () => {
        minutesInput.value = Number(secondsInput.value) / 60;
        hoursInput.value = Number(minutesInput.value) / 60;
        daysInput.value = Number(hoursInput.value) / 24;
    })
}