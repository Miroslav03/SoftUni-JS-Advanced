function solve() {
  const input = document.getElementById('input').value
  const output = document.getElementById('output')

  const text = input.split(".").filter(e=>e.length>0)

    for (i=0;i<text.length;i+=3){
        const result = [];
        for(j=0;j<3;j++){
            if (text[i+j]){
              result.push(text[i+j])
            }    
        }
        const res = result.join(". ")+"."
        output.innerHTML += `<p>${res}</p>`
        
      }

}