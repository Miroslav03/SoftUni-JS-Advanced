function validate() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPass = document.getElementById('confirm-password')
    const companyCheckBox = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo');
    const submitButton = document.getElementById('submit');

    const usernamePattern = /^[a-zA-Z0-9]{3,20}$/g;
    const emailPattern = /^[^@.]+@[^@]*\.[^@]*$/g
    const passwordPattern = /^[\w]{5,15}$/;

    const companyNumber = document.getElementById('companyNumber');

    submitButton.addEventListener('click', submition)

    document.getElementById("registerForm").addEventListener('submit', (event) => {
        event.preventDefault();
    })

    companyCheckBox.addEventListener('change', () => {
        if (companyCheckBox.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    })


    function submition() {
        let isValid = true

        if (usernamePattern.test(username.value)) {
            username.style.borderColor = 'none';
        } else {
            username.style.borderColor = 'red';
            isValid = false;
        }

        if (emailPattern.test(email.value)) {
            email.style.borderColor = 'none';
        } else {
            email.style.borderColor = 'red';
            isValid = false;
        }

        if (!passwordPattern.test(password.value)) {
            password.style.borderColor = 'red';
            confirmPass.style.borderColor = 'red';
            isValid = false;
        } else {
            if (password.value == confirmPass.value) {
                confirmPass.style.borderColor = 'none'
                password.style.borderColor = 'none';
            } else {
                confirmPass.style.borderColor = 'red';
                password.style.borderColor = 'red';
                isValid = false;
            }
        }

       

        if (companyCheckBox.checked) {
            const companyNum = Number(companyNumber.value)
            if(companyNum < 1000 || companyNum > 9999){
                companyNumber.style.borderColor = 'red';
                isValid = false;
            } else {
                companyNumber.style.border = 'none';
            }
        }

        if (isValid) {
            document.getElementById("valid").style.display = 'block';
        } else {
            document.getElementById("valid").style.display = 'none';
        }

    }

}
