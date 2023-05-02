function create(words) {
   const page = document.getElementById('content')
   for (const word of words) {
      const div = document.createElement('div')
      const p = document.createElement('p')
      p.textContent = word
      div.appendChild(p)
      page.appendChild(div)
      p.style.display = 'none'
      div.addEventListener('click', (event) => {
         if (p.style.display == 'none') {
            p.style.display = 'block'
         } else {
            p.style.display = 'none'

         }
         
      })
   }
}