function focused() {
        const inputs = Array.from(document.querySelectorAll('input[type="text"]'))

        for (const input of inputs) {
            input.addEventListener('focus',() =>{
                console.log('focused');
                input.parentElement.classList = 'focused'
            })
            input.addEventListener('blur',() =>{
                console.log('blurred');
                input.parentElement.classList = ''
            })
        }
}