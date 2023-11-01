function validate() {
    const email = document.getElementById('email')
    const pattern = /[a-z]+@[a-z]+.[a-z]+/g

    email.addEventListener('change', (event) => {
        if (pattern.test(event.target.value)) {
            event.target.classList.remove('error')
        } else {
            event.target.classList.add('error')
        }
    })
}