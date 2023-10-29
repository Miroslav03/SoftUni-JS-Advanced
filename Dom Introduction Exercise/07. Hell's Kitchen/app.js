function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   const textArea = document.querySelector('textarea')
   const bestResturant = Array.from(document.querySelectorAll('p'))[0]
   const bestWorker = Array.from(document.querySelectorAll('p'))[1]

   function onClick() {
      const allResturants = {}
      const arr = JSON.parse(textArea.value)
      for (let i = 0; i < arr.length; i++) {
         let [resturant, workersString] = arr[i].split(' - ');
         const workers = workersString.split(', ')
         if (!allResturants.hasOwnProperty(resturant)) {
           allResturants[resturant] = { workers, average: undefined, bestWorker: undefined, bestSalary: undefined }
           let bestWorker = undefined
           let bestSalary = 0
           let average = 0
           for (const workerProfile of workers) {
             let [worker, salary] = workerProfile.split(' ')
             salary = Number(salary)
             average += salary
             if (bestSalary < salary) {
               bestSalary = salary
               bestWorker = worker
             }
           }
           allResturants[resturant].average = (average / workers.length).toFixed(2)
           allResturants[resturant].bestWorker = bestWorker
           allResturants[resturant].bestSalary = bestSalary.toFixed(2)
         } else {
           allResturants[resturant].workers = allResturants[resturant].workers.concat(workers)
           let bestWorker = undefined
           let bestSalary = 0
           let average = 0
           allResturants[resturant].average = undefined;
           allResturants[resturant].bestSalary = undefined;
           allResturants[resturant].bestWorker = undefined;
           for (const workerProfile of allResturants[resturant].workers) {
             let [worker, salary] = workerProfile.split(' ')
             salary = Number(salary)
             average += salary
             if (bestSalary < salary) {
               bestSalary = salary
               bestWorker = worker
             }
           }
           allResturants[resturant].average = (average / allResturants[resturant].workers.length).toFixed(2)
           allResturants[resturant].bestWorker = bestWorker
           allResturants[resturant].bestSalary = bestSalary.toFixed(2)
         }
      }

      let sortedEntries = Object.entries(allResturants).sort((a, b) => b[1].average - a[1].average)

      const bestResturantText = `Name: ${sortedEntries[0][0]} Average Salary: ${sortedEntries[0][1].average} Best Salary: ${sortedEntries[0][1].bestSalary}`
    
      const bestResturantWorkers = sortedEntries[0][1].workers.sort((a, b) => Number(b.split(' ')[1]) - Number(a.split(' ')[1]))
      const finalArr = []
    
      for (const employe of bestResturantWorkers) {
        const [worker, salary] = employe.split(' ')
        finalArr.push(`Name: ${worker} With Salary: ${salary}`)
    
      }
    
      bestResturant.textContent = bestResturantText
      bestWorker.textContent = finalArr.join(' ')
   }
}