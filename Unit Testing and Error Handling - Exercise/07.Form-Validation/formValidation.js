function validate() {

    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const companyNumber = document.getElementById('companyNumber');
    const checkBox = document.getElementById('company')
    const submitButton = document.getElementById('submit')
    const hiddenInfo = document.getElementById('companyInfo')

    const usernamePattern = /^[a-zA-Z0-9]{3,20}$/g;
    const emailPattern = /^[^@.]+@[^@]*\.[^@]*$/g
    const passwordPattern = /^[\w]{5,15}$/;

    submitButton.addEventListener('click', submition)

    document.getElementById("registerForm").addEventListener('submit', (event) => {
        event.preventDefault();
    })
    checkBox.addEventListener('change', () => {
        if (checkBox.checked) {
            hiddenInfo.style.display = 'block'
        } else {
            hiddenInfo.style.display = 'none'
        }
    })

    function submition(){

    
        let isValid = true;

        if (usernamePattern.test(usernameInput.value)) {
            usernameInput.style.border = 'none'
        } else {
            usernameInput.style.borderColor = 'red'
            isValid = false;
        }

        if (emailPattern.test(emailInput.value)) {
            emailInput.style.border = 'none'
        } else {
            emailInput.style.borderColor = 'red'
            isValid = false;
        }

        if (!passwordPattern.test(password.value)) {
            password.style.borderColor = 'red'
            confirmPassword.style.borderColor = 'red'
            isValid = false;
        } else {
            if (password.value == confirmPassword.value) {
                confirmPassword.style.border = 'none'
                password.style.border = 'none'
            } else {
                confirmPassword.style.borderColor = 'red'
                password.style.borderColor = 'red'
                isValid = false;
            }

        }

        if (checkBox.checked) {
            if (Number(companyNumber.value) < 1000 || Number(companyNumber.value) > 9999) {
                companyNumber.style.borderColor = 'red'
                isValid = false;
            } else {
                companyNumber.style.border = 'none'
            }
        }

        if (isValid) {
            document.getElementById('valid').style.display = 'block'
        } else {
            document.getElementById('valid').style.display = 'none'

        }

    }
}
