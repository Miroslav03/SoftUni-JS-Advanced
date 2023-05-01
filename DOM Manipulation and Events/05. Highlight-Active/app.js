function focused() {
    const input = document.querySelector('div')

    input.addEventListener('focusin', focus)
    input.addEventListener('focusout', blur)

    function focus(event) {
        event.target.parentElement.className = 'focused'
    }

    function blur(event) {
        event.target.parentElement.className = ''
    }

}