function constructionCrew(worker) {
   
    function checkHydration(worker){
        if(worker.dizziness == true){
            worker.levelOfHydrated += (worker.weight)*(worker.experience)*0.1;
            worker.dizziness = false;
            
        }
        return worker
    }


    const finalWorker  = checkHydration(worker)
    return finalWorker;
}
constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
)
let worker = result({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
);