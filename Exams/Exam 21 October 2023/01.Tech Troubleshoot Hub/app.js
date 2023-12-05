window.addEventListener('load', solve);

function solve() {
    const employee = document.getElementById('employee');
    const category = document.getElementById('category');
    const urgency = document.getElementById('urgency');
    const asignedTeam = document.getElementById('team');
    const description = document.getElementById('description');
    const addBtn = document.getElementById('add-btn')
    
    addBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (employee.value != '' && category.value != '' && urgency.value != '' && asignedTeam.value != '' && description.value != '') {
        const li = document.querySelector('ul.preview-list');
        li.innerHTML = `<li class="problem-content"> 
        <article>  
        <p>From: ${employee.value}</p> <p>Category: ${category.value}</p> <p>Urgency: ${urgency.value}</p>
        <p>Assigned to: ${asignedTeam.value}</p>
        <p>
        Description: ${description.value}
        </p>
        </article>
        <button class="edit-btn">Edit</button>
        <button class="continue-btn">Continue</button>
        </li>`
        const dataObj = {
          employee: employee.value,
          category: category.value,
          urgency: urgency.value,
          asignedTeam: asignedTeam.value,
          description: description.value,
        };
        clearInput()
        addBtn.disabled= true;
  
        const editBtn = document.querySelector('button.edit-btn').addEventListener('click', (e) => editWorker(e))
        function editWorker(e) {
        addBtn.disabled= false;
          employee.value = dataObj.employee
          category.value = dataObj.category
          urgency.value = dataObj.urgency
          asignedTeam.value = dataObj.asignedTeam
          description.value = dataObj.description
          e.target.parentNode.remove();
        }
  
        const continueBtn = document.querySelector('button.continue-btn').addEventListener('click', (e) => {
          e.preventDefault()
          e.target.parentNode.remove();
          const li = document.querySelector('ul.pending-list');
          li.innerHTML = `<li class="problem-content"> 
          <article> 
          <p>From: ${dataObj.employee}</p> <p>Category: ${dataObj.category}</p> <p>Urgency: ${dataObj.urgency}</p>
          <p>Assigned to: ${dataObj.asignedTeam}</p>
          <p>
          Description: ${dataObj.description}
          </p>
          </article>
          <button class="resolve-btn">Resolved</button>
          </li>`
          const resolveBtn = document.querySelector('button.resolve-btn').addEventListener('click', (e) => {
            e.preventDefault()
            e.target.parentNode.remove();
            const li = document.querySelector('ul.resolved-list');
            li.innerHTML = `<li class="problem-content"> 
            <article> 
            <p>From: ${dataObj.employee}</p> <p>Category: ${dataObj.category}</p> <p>Urgency: ${dataObj.urgency}</p>
            <p>Assigned to: ${dataObj.asignedTeam}</p>
            <p>
            Description: ${dataObj.description}
            </p>
            </article>
            <button class="clear-btn">Clear</button>
            </li>`
            const clearBtn = document.querySelector('button.clear-btn').addEventListener('click', (e) => {
              e.preventDefault()
              e.target.parentNode.remove()
              addBtn.disabled = false;
  
            })
          })
  
        })
  
      }
  
    })
  
    function clearInput() {
      employee.value = ''
      category.value = ''
      urgency.value = ''
      asignedTeam.value = ''
      description.value = ''
    }
  }