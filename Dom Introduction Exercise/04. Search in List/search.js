function search() {
      const searchBox = document.getElementById('searchText')//value
      const result = document.getElementById('result')//textContgent
      const elements = Array.from(document.querySelectorAll('li'))
      let matches = 0;
      for (let i = 0; i < elements.length; i++) {
         const string = elements[i].textContent
         if(string.includes(searchBox.value)){
            matches++
            elements[i].style.fontWeight = 'bold'
            elements[i].style.textDecoration = 'underline'
         }
      }
      result.textContent = `${matches} matches found`
}
