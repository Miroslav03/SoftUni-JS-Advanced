function solve() {

    const addBtn = document.getElementById('add');
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById('date');

    const inProgressSection = Array.from(document.querySelectorAll('section'))[2]
    const completeSection = Array.from(document.querySelectorAll('section'))[3]


    addBtn.addEventListener('click', (e) => {
        e.preventDefault()
        if (task.value == '' || description.value == '' || date.value == '') {
            return
        } else {
            const openSection = Array.from(document.querySelectorAll('section'))[1]
            const [div1, div2] = openSection.querySelectorAll('div')
            const secondDiv = document.createElement('div');
            const article = document.createElement('article');
            //in Article
            const h3 = document.createElement('h3');
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const btnGreen = document.createElement('button');
            const btnRed = document.createElement('button');

            h3.textContent = task.value;
            p1.textContent = 'Description: '
            p1.textContent += description.value;
            p2.textContent = 'Due Date: '
            p2.textContent += date.value;

            btnGreen.textContent = 'Start'
            btnRed.textContent = 'Delete'

            secondDiv.classList = 'flex'
            btnGreen.classList = 'green'
            btnRed.classList = 'red'
            secondDiv.appendChild(btnGreen);
            secondDiv.appendChild(btnRed);

            article.appendChild(h3)
            article.appendChild(p1)
            article.appendChild(p2)
            article.appendChild(secondDiv)
            div2.appendChild(article)

            btnGreen.addEventListener('click', () => {
                btnGreen.remove()
                btnRed.remove()
                const [div1, second] = inProgressSection.querySelectorAll('div')
                second.appendChild(article)

                const orange = document.createElement('button');
                const red = document.createElement('button');
                orange.textContent = 'Finish'
                red.textContent = 'Delete'
                orange.classList = 'orange'
                red.classList = 'red'
                secondDiv.appendChild(red)
                secondDiv.appendChild(orange)

                red.addEventListener('click', function deleted() {
                    article.remove()
                })
                orange.addEventListener('click', function deleted() {
                    orange.remove()
                    red.remove()
                    secondDiv.remove()
                    const [div1, third] = completeSection.querySelectorAll('div')
                    third.appendChild(article)
                })


            })
            btnRed.addEventListener('click', () => { article.remove() })


        }
    })
}