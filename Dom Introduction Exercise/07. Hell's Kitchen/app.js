function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   const input = document.querySelector('#inputs>textarea');
   const bestResturants = document.querySelector('#bestRestaurant>p');
   const bestWorkers = document.querySelector('#workers>p');

   function onClick() {
      const array = JSON.parse(input.value)
      const resturants = {}
      for (let i = 0; i < array.length; i++) {
         const element = array[i];
         const resturantName = element.split(' - ')[0]
         const workersArr = element.split(' - ')[1].split(', ')
         const avergeSalary = 0
         if (resturants.hasOwnProperty(resturantName)) {

            for (let i = 0; i < workersArr.length; i++) {
               const workerWithSalary = workersArr[i].split(' ');
               const workerName = workerWithSalary[0]
               const workerSalary = Number(workerWithSalary[1])
               if (resturants[resturantName].workers.some(employee => employee.name === workerName)) {
                  continue
               } else {
                  resturants[resturantName].workers.push({ name: workerName, salary: workerSalary })
                  resturants[resturantName].avergeSalary += workerSalary
               }
            }
         } else {
            resturants[resturantName] = {
               avergeSalary,
               workers: [],

            }
            for (let i = 0; i < workersArr.length; i++) {
               const workerWithSalary = workersArr[i].split(' ');
               const workerName = workerWithSalary[0]
               const workerSalary = Number(workerWithSalary[1])
               resturants[resturantName].workers.push({ name: workerName, salary: workerSalary })
               resturants[resturantName].avergeSalary += workerSalary
            }
         }
         resturants[resturantName].workers.sort((a, b) => b.salary - a.salary)
         resturants[resturantName].bestSalary = resturants[resturantName].workers[0].salary

      }

      for (const resturant in resturants) {
         const average = (resturants[resturant].avergeSalary / resturants[resturant].workers.length).toFixed(2)
         resturants[resturant].avergeSalary = Number(average)
      }
   

   const sortedData = Object.entries(resturants)
      .map(([key, value]) => ({ key, value }))
      .sort((a, b) => b.value.avergeSalary - a.value.avergeSalary)

   bestResturants.textContent = `Name: ${sortedData[0].key} Average Salary: ${(sortedData[0].value.avergeSalary).toFixed(2)} Best Salary: ${(sortedData[0].value.bestSalary).toFixed(2)}`

   let bestWorkersString = ``

   let string = ''
   const stringArr = []
   for (const resturant of sortedData) {
      let counter = 0
      for (const key of resturant.value.workers) {
         string += `Name: ${key.name} With Salary: ${key.salary}`
         stringArr.push(string)
         string = ''
      }
      counter++
      if (counter == 1) {
         break
      }
   }
   bestWorkers.textContent = stringArr.join(` `)
}
}