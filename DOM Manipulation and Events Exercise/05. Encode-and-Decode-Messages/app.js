function encodeAndDecodeMessages() {
    const buttons = Array.from(document.querySelectorAll('button'));
    const encodeBtn = buttons[0];
    const decodeBtn = buttons[1];

    const textAreas = Array.from(document.querySelectorAll('textarea'));
    const encodeTextArea = textAreas[0];
    const decodeTextArea = textAreas[1];

    encodeBtn.addEventListener('click', () => {
        const encodeText = encodeTextArea.value
        let newString = '';
        for (let i = 0; i < encodeText.length; i++) {
            let char = encodeTextArea.value[i];
            let number = char.charCodeAt();
            number++;
            char = String.fromCharCode(number);
            newString += char;
        }
        encodeTextArea.value = ''
        decodeTextArea.value = newString
    })

    decodeBtn.addEventListener('click',() =>{
        const decodeText = decodeTextArea.value
        let newString = '';
        for (let i = 0; i < decodeText.length; i++) {
            let char = decodeText[i];
            let number = char.charCodeAt();
            number--;
            char = String.fromCharCode(number);
            newString += char;
        }
        encodeTextArea.value = ''
        decodeTextArea.value = newString
    })

}