function solve() {
    const taskField = document.getElementById('task');
    const descriptionField = document.getElementById('description');
    const dateField = document.getElementById('date');

    const button = document.querySelector('button')

    const openArea = document.querySelectorAll('section')[1].querySelectorAll('div')[1];
    const progressArea = document.querySelectorAll('section')[2].querySelectorAll('div')[1];
    const completeArea = document.querySelectorAll('section')[3].querySelectorAll('div')[1];


    button.addEventListener('click', function add(e) {
        const task = taskField.value;
        const description = descriptionField.value
        const date = dateField.value;

        e.preventDefault()

        if (!task || !description || !date) {
            return;
        }

        const article = document.createElement('article');

        //h3
        const h3 = document.createElement('h3');
        h3.textContent = task;
        //p1
        const p1 = document.createElement('p');
        p1.textContent = `Description: ${description}`;

        //p2
        const p2 = document.createElement('p');
        p2.textContent = `Due Date: ${date}`

        //buttonDiv
        const divEl = document.createElement('div');
        divEl.className = 'flex';

        //button1
        const btn1 = document.createElement('button');
        btn1.textContent = 'Start';
        btn1.classList.add('green')

        btn1.addEventListener('click', function start() {
            btn1.remove()
            btn2.remove()

            const btnDelete = document.createElement('button');
            btnDelete.textContent = 'Delete';
            btnDelete.classList.add('red')

            const btnFinish = document.createElement('button')
            btnFinish.textContent = 'Finish';
            btnFinish.classList.add('orange')

            divEl.appendChild(btnDelete);
            divEl.appendChild(btnFinish);
            article.appendChild(divEl);
            progressArea.appendChild(article)

            btnDelete.addEventListener('click', function deleted() {
                article.remove()
            })

            btnFinish.addEventListener('click', function finish() {
                btnDelete.remove()
                btnFinish.remove()
                divEl.remove()
                completeArea.appendChild(article)

            })

        })

        //button2
        const btn2 = document.createElement('button')
        btn2.textContent = 'Delete';
        btn2.classList.add('red')

        btn2.addEventListener('click', function deleted() {
            article.remove()
        })

        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);

        divEl.appendChild(btn1);
        divEl.appendChild(btn2);
        article.appendChild(divEl);

        openArea.appendChild(article)

    })


}   