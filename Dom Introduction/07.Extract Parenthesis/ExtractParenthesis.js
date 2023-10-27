function extract(content) {
    const text = document.getElementById('content').textContent
    const pattern = /\([^)]+\)/g
    const finalArr = []
    const arr = text.match(pattern).map(function (x){
        const newSrtring  = x.split(/[\(\)]/g).join('')
        return newSrtring
    }).forEach((word) => finalArr.push(word));
    
    return finalArr.join('; ')
}