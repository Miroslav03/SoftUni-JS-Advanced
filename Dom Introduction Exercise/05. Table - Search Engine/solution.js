function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const rows  = document.querySelectorAll('tbody tr') 
   const searchField = document.getElementById('searchField')

   function onClick() {
     for (const  row of rows) {
         const string = row.textContent.toLowerCase()
         if(string.includes(searchField.value.toLowerCase())){
            row.classList.add(`select`)
         }else{
            row.classList.remove(`select`)
         }
         
      } 
      searchField.value = ''
   }

}