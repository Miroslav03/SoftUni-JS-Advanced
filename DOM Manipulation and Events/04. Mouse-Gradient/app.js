function attachGradientEvents() {
    const gradientBox = document.getElementById('gradient')
    const result = document.getElementById('result')
    gradientBox.addEventListener('mousemove',percentageShow)

    function percentageShow(event){
        result.textContent = Math.floor((event.offsetX)/3) + '%'
    }
}