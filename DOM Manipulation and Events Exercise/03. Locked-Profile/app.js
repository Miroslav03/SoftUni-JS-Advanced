function lockedProfile() {

    const profiles  = Array.from(document.querySelectorAll('div[class="profile"]'))
    
    for (const profile of profiles) {
        const unlockedIsChecked = profile.querySelector('input[value="unlock"]');
        const btn = profile.querySelector('button');
        btn.addEventListener('click',() =>{
            const hiddenInfo = profile.querySelector('div')
            if(unlockedIsChecked.checked){
                if(hiddenInfo.style.display == ''){
                    hiddenInfo.style.display = 'block'
                    btn.textContent = 'Hide it'
                }else{
                    hiddenInfo.style.display = ''
                    btn.textContent = 'Show more'
                }
            }
        })
      
    }
}