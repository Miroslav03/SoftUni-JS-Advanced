function lockedProfile() {
    const butons = Array.from(document.querySelectorAll('.profile button'))
    
    for (const button of butons) {
        const parent  = button.parentElement 
        const locked = parent.querySelector('input[value="unlock"]')
        button.addEventListener('click',()=>{
            if(locked.checked){
               const div = parent.querySelector('div')
               if(div.style.display == 'block'){
                button.textContent = 'Show more'
                div.style.display = 'none'     
               }else{
                div.style.display = 'block'
                button.textContent = 'Hide it'
               }
            }
        })
    }
}