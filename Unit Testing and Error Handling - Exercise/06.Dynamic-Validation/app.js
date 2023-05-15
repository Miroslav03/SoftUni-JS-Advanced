function validate() {
    const pattern = /[a-z]+@[a-z]+.[a-z]+/g;
    const input = document.getElementById('email');

    input.addEventListener('change', () => {
        if(!pattern.test(input.value)){
            input.classList.add('error')
        }else{
            input.classList.remove('error')
        }
    })
}