function create(words) {
   const content = document.getElementById('content');
   for (const word of words) {
      const div = document.createElement('div');
      const paragraph = document.createElement('p');
      paragraph.style.display = 'none'
      paragraph.textContent += word;
      div.addEventListener('click', () => {
         paragraph.style.display = 'block'
      })
      div.appendChild(paragraph);
      content.appendChild(div);
   }

}