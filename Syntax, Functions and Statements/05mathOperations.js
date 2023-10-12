function mathOperation(num1,num2,string){

    switch (string) {
        case '+':{
            console.log(num1+num2);
            break;
        }
        case '-':{
            console.log(num1-num2);
            break;
        }
        case '*':{
            console.log(num1*num2);
            break;
        }
        case '/':{
            console.log(num1/num2);
            break;
        }
        case '%':{
            console.log(num1%num2);
            break;
        }
        case '**':{
            console.log(num1**num2);
            break;
        }
    }

}
mathOperation(5, 6, '+')
mathOperation(3, 5.5, '*')
