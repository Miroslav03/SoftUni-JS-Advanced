function calculator() {

    const refrences = {
        num1:'',
        num2:'',
        result:''
    }

    return {
        init(number1, number2, resultField) {
            refrences.num1 = document.querySelector(number1)
            refrences.num2 = document.querySelector(number2)
            refrences.result = document.querySelector(resultField);
        },
        add() {
            refrences.result.value = Number(refrences.num1.value) +  Number(refrences.num2.value)
        },
        subtract() {
            refrences.result.value = refrences.num1.value -  refrences.num2.value
        }
    }
}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result');


