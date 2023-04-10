function constructionCrew(worker) {
    let neededWater = 0;

    if(worker.dizziness==true){
        neededWater = worker.weight*0.1;
        worker.levelOfHydrated +=neededWater;
        worker.dizziness = false;
    }

    return worker;
}
constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
)
constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}
)
constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}
)