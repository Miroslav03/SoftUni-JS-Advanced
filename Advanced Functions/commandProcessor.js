function solution(){
    let string = '';

    function append (s){
        string+=s
        return string
    }    

    function removeStart(n){
        string = string.slice(n)     
        return string
    }

    function removeEnd(n){
        string = string.slice(0,-n)   
        return string
    }         

    function print(){
        console.log(string);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}



let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();