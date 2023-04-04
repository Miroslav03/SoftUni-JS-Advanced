function sameNumber(number){

    const stringNumber = String(number);
    let sum = 0;
    let previousNumber =stringNumber[0];
    let flag = true;
    for (let i = 0; i < stringNumber.length; i++) {
        const number = Number(stringNumber[i]);
        if(number == previousNumber){
            previousNumber = number;
            flag = true;
        }else{
            flag = false ;
            break;
        }
    }

    for (let i = 0; i < stringNumber.length; i++) {
        const number = Number(stringNumber[i]);
        sum+=number;
    }
        
    
    console.log(flag);
    console.log(sum);
}
sameNumber(2222222)