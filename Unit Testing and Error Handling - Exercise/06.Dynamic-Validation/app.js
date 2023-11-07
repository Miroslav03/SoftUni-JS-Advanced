function validate() {
    const regex = /[a-z]+@[a-z]+.[a-z]+/g
    const input = document.getElementById('email')
    input.addEventListener('change', () => {
        if (!regex.test(input.value)) {
            input.classList.add('error')
        } else {
            input.classList.remove('error')
        }
    })
}