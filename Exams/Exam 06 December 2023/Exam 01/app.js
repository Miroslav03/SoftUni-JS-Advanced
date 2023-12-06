window.addEventListener('load', solve);

function solve() {
    const when = document.getElementById('time');
    const date = document.getElementById('date');
    const place = document.getElementById('place');
    const eventName = document.getElementById('event-name');
    const email = document.getElementById('email');

    const addBtn = document.getElementById('add-btn')
    addBtn.addEventListener('click', add)

    function add(e) {
        e.preventDefault()
        const whenValue = when.value
        const dateValue = date.value
        const placeValue = place.value
        const eventNameValue = eventName.value
        const emailValue = email.value

        if (!whenValue || !dateValue || !placeValue || !eventNameValue || !emailValue) {
            return;
        }

        const ul = document.getElementById('check-list')
        const li = document.createElement('li');
        li.setAttribute('class', 'event-content')
        li.innerHTML = 
        `<article> 
        <p>Begins: ${dateValue} at: ${whenValue}</p>
        <p>In: ${placeValue}</p>
        <p>Event: ${eventNameValue}</p>
        <p>Contact: ${emailValue}</p>
        </article>
        <button class="edit-btn">Edit</button>
        <button class="continue-btn">Continue</button>`
        ul.appendChild(li)
        addBtn.disabled = true
        clearInputs()


        const editBtn = document.querySelector('button.edit-btn')
        editBtn.addEventListener('click', (e) => {
            e.preventDefault();
            addBtn.disabled = false
            e.target.parentElement.remove()
            when.value = whenValue
            date.value = dateValue
            place.value = placeValue
            eventName.value = eventNameValue
            email.value = emailValue
        })

        const continueBtn = document.querySelector('button.continue-btn')
        continueBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const ul2 = document.getElementById('upcoming-list')
            const li2 = document.createElement('li');
            li2.setAttribute('class', 'event-content')
            li2.innerHTML = 
            `<article> 
            <p>Begins: ${dateValue} at: ${whenValue}</p> 
            <p>In: ${placeValue}</p> 
            <p>Event: ${eventNameValue}</p>
            <p>Contact: ${emailValue}</p>
            </article>
            <button class="finished-btn">Move to Finished</button>`
            if (ul2.querySelector('li') === null) {
                ul2.appendChild(li2)
                e.target.parentElement.remove()
                addBtn.disabled = false
            } else {

            }

            const finishBtn = document.querySelector('button.finished-btn').addEventListener('click', (e) => {
                e.preventDefault()
                const ul3 = document.getElementById('finished-list')
                const li3 = document.createElement('li');
                li3.setAttribute('class', 'event-content')
                li3.innerHTML = 
                `<article> 
                <p>Begins: ${dateValue}at: ${whenValue}</p>
                <p>In: ${placeValue}</p>
                <p>Event: ${eventNameValue}</p>
                <p>Contact: ${emailValue}</p>
                </article>`
                if (ul3.querySelector('li') === null) {
                    ul3.appendChild(li3)
                    e.target.parentElement.remove()
                } else {
    
                }

                const clearBTn = document.getElementById('clear').addEventListener('click', clear)
                function clear(e) {
                    e.preventDefault()
                    if ((e.target.parentElement.querySelector('li.event-content')) === null) {
                        return
                    } else {
                        e.target.parentElement.querySelector('li.event-content').remove()
                    }
                }

            })

        })


    }


    function clearInputs() {
        when.value = ''
        date.value = ''
        place.value = ''
        eventName.value = ''
        email.value = ''
    }
}




