window.addEventListener('load', solve);

function solve() {

        const carModel = document.getElementById('car-model');
        const carYear = document.getElementById('car-year');
        const partName = document.getElementById('part-name');
        const partNumber = document.getElementById('part-number');
        const condition = document.getElementById('condition');

        const nextBtn = document.getElementById('next-btn');
        nextBtn.addEventListener('click', next)

        function next(e) {
                e.preventDefault()
                const carModelValue = carModel.value
                const carYearValue = carYear.value
                const partNameValue = partName.value
                const partNumberValue = partNumber.value
                const conditionValue = condition.value

                if (carYearValue < 1980 || carYearValue > 2023) {
                        return
                }

                if (!carModelValue || !partNameValue || !partNumberValue || !conditionValue) {
                        return;
                }

                const ul = document.querySelector('ul.info-list')
                const li = document.createElement('li');
                li.setAttribute('class', 'part-content')
                li.innerHTML = `
                <article>
                <p>Car Model: ${carModelValue}</p>
                <p>Car Year: ${carYearValue}</p>
                <p>Part Name: ${partNameValue}</p>
                <p>Part Number: ${partNumberValue}</p>
                <p>Condition: ${conditionValue}</p>
                </article>
                <button class="edit-btn">Edit</button>
                <button class="continue-btn">Continue</button>`
                ul.appendChild(li)
                nextBtn.disabled = true
                document.getElementById('complete-img').style.visibility = 'hidden'
                document.getElementById('complete-text').textContent = ''
                clearInputs()

                const editBtn = document.querySelector('button.edit-btn')
                editBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        nextBtn.disabled = false
                        e.target.parentElement.remove()
                        carModel.value = carModelValue
                        carYear.value = carYearValue
                        partName.value = partNameValue
                        partNumber.value = partNumberValue
                        condition.value = conditionValue
                })

                const continueBtn = document.querySelector('button.continue-btn')
                continueBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.target.parentElement.remove()
                        const ul2 = document.querySelector('ul.confirm-list')
                        const li2 = document.createElement('li');
                        li2.setAttribute('class', 'part-content')
                        li2.innerHTML = `
                <article>
                <p>Car Model: ${carModelValue}</p>
                <p>Car Year: ${carYearValue}</p>
                <p>Part Name: ${partNameValue}</p>
                <p>Part Number: ${partNumberValue}</p>
                <p>Condition: ${conditionValue}</p>
                </article>
                <button class="confirm-btn">Confirm</button>
                <button class="cancel-btn">Cancel</button>`
                        ul2.appendChild(li2)

                        const confirmBtn = document.querySelector('button.confirm-btn').addEventListener('click', (e) => {
                                e.preventDefault()
                                e.target.parentElement.remove()
                                nextBtn.disabled = false
                                document.getElementById('complete-img').style.visibility = 'visible'
                                document.getElementById('complete-text').textContent = 'Part is Ordered!'
                        })

                        const cancelBtn = document.querySelector('button.cancel-btn').addEventListener('click',(e)=>{
                                e.preventDefault()
                                e.target.parentElement.remove()
                                nextBtn.disabled = false
                        })
                })

        }

        function clearInputs() {
                carModel.value = ''
                carYear.value = ''
                partName.value = ''
                partNumber.value = ''
                condition.value = ''
        }
};




