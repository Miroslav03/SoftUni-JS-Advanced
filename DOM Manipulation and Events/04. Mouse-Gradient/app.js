function attachGradientEvents() {
    const input = document.getElementById('gradient')
    const result = document.getElementById('result')

    input.addEventListener('mousemove', move)

    function move(event) {
        const x = Math.floor(event.offsetX / 3)
        result.textContent = x + '%'
    }
}