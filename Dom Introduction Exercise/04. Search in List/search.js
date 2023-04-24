function search() {
   const searchBox = document.querySelector('#searchText')
   const list  = document.querySelectorAll('#towns li')
   const townList  = Array.from(list)

   let counter = 0;

   for (let i = 0; i < townList.length; i++) {
      const element = townList[i];
      if(element.textContent.includes(searchBox.value)){
         element.style.fontWeight = 'bold'
         element.style.textDecoration = 'underline'
         counter++
      }     
   }

   document.querySelector('#result').textContent = `${counter} matches found` 
}
