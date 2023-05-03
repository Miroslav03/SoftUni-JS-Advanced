function encodeAndDecodeMessages() {
    const buttons  = document.querySelectorAll('#main div button')
    const textBoxes = document.querySelectorAll('#main div textarea')
    //firstTextArea
    const buttonEncode  = buttons[0]
    const enocdeText  = textBoxes[0]

    buttonEncode.addEventListener('click',encode)
    function encode(){
        const text = enocdeText.value
        let encodedText = ''

        for (let i = 0; i < text.length; i++) {
            const letter = text[i];
            let asciiCode = letter.charCodeAt()
            let newLetter  = String.fromCharCode(asciiCode+1)
            encodedText += newLetter
        }
        enocdeText.value = ''
        decodeText.value = encodedText

    }
    //secondTextArea
    const buttonDecode = buttons[1]
    const decodeText  = textBoxes[1]

    buttonDecode.addEventListener('click',decode)
    function decode(){
        const text = decodeText.value
        let decodededText = ''
        for (let i = 0; i < text.length; i++) {
            const letter = text[i];
            let asciiCode = letter.charCodeAt()
            let newLetter  = String.fromCharCode(asciiCode-1)
            decodededText += newLetter
        }
        decodeText.value = decodededText
    }

}