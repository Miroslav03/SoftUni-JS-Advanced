function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const search  = document.querySelector('#searchField')
   const tableElements = document.querySelectorAll('tbody tr')

   function onClick() {
      const arr = Array.from(tableElements)
      for (let i = 0; i < arr.length; i++) {
         const row = tableElements[i];
         if(row.textContent.toLowerCase().includes(search.value.toLowerCase().trim())){
            row.classList.add(`select`)
         }else{
            row.classList.remove('select')
         }
      }
      search.value = ''
   }

}