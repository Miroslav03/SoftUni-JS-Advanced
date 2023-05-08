function calculator() {
    
    const html = { s1: "", s2: "", output: "" }

    return {
        init: (selector1,selector2,resultSelector) => {
            html.s1 = document.querySelector(selector1);
            html.s2 = document.querySelector(selector2);
            html.output = document.querySelector(resultSelector);
        },
        add: () => {
            html.output.value = Number(html.s1.value) + Number(html.s2.value);
        },
        subtract: () => {
            html.output.value = Number(html.s1.value) -  Number(html.s2.value);

        }
    }

}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result');


