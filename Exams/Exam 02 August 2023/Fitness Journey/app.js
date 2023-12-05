window.addEventListener('load', solve);

function solve() {

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const contactNumber = document.getElementById('contact-number');
    const classType = document.getElementById('class-type');
    const classTime = document.getElementById('class-time');

    const nextBtn = document.getElementById('next-btn');

    nextBtn.addEventListener('click', submitForm);

    function submitForm(event) {
        event.preventDefault();
        const nameValue = name.value;
        const emailValue = email.value;
        const contactNumberValue = contactNumber.value;
        const classTypeValue = classType.value;
        const classTimeValue = classTime.value;
        if (!nameValue || !emailValue || !contactNumberValue || !classTimeValue || !classTypeValue) {
            return;
        }

        const ul = document.querySelector('ul.class-info');
        const li = document.createElement('li');
        li.setAttribute('class', 'info-item')
        li.innerHTML = `
        <article class="personal-info"> <p>${nameValue}</p>
        <p>${emailValue}</p>
        <p>${contactNumberValue}</p>
        <p>${classTypeValue}</p>
        <p>${classTimeValue}</p> </article>
        <button class="edit-btn">Edit</button>
        <button class="continue-btn">Continue</button>
        `

        ul.appendChild(li);
        clearAllFields();
        nextBtn.disabled = true;

        const editBtn = document.querySelector('button.edit-btn')
        editBtn.addEventListener('click', (e) => {
            e.preventDefault()
            name.value = nameValue;
            email.value = emailValue;
            contactNumber.value = contactNumberValue;
            classType.value = classTypeValue;
            classTime.value = classTimeValue;
            e.target.parentElement.remove();
            nextBtn.disabled = false;
        })

        const ul2 = document.querySelector('ul.confirm-class')

        const continueBtn = document.querySelector('button.continue-btn')
        continueBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.parentElement.remove()
            const li2 = document.createElement('li');
            li2.setAttribute('class', 'continue-info')
            li2.innerHTML = `
            <article class="personal-info"> <p>${nameValue}</p>
            <p>${emailValue}</p>
            <p>${contactNumberValue}</p>
            <p>${classTypeValue}</p>
            <p>${classTimeValue}</p> </article>
            <button class="cancel-btn">Cancel</button>
            <button class="confirm-btn">Confirm</button>
            `

            ul2.appendChild(li2);
            const cancelBtn = document.querySelector('button.cancel-btn').addEventListener('click', (e) => {
                e.preventDefault()
                e.target.parentElement.remove()
                nextBtn.disabled = false;
            })


            const body = document.querySelector('body')
            const confirmBtn = document.querySelector('button.confirm-btn').addEventListener('click', () => {
                e.preventDefault()
                e.target.parentElement.remove()
                document.getElementById('main').remove()
                const h1 = document.createElement('h1')
                h1.setAttribute('id', 'thank-you')
                h1.textContent = `
                Thank you for scheduling your appointment, we look forward to seeing you!`
                const doneBtn = document.createElement('button')
                doneBtn.setAttribute('id', 'done-btn')
                doneBtn.textContent = 'Done'
                body.appendChild(h1)
                body.appendChild(doneBtn)
                document.getElementById('done-btn').addEventListener('click', (e) => {
                    location.reload()
                })
            })

        })


    }

    function clearAllFields() {
        name.value = '';
        email.value = '';
        contactNumber.value = '';
        classType.value = '';
        classTime.value = '';
    }

}



