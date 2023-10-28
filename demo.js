function largestNumber() {

    const string = `JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.
    JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web. JavaScript enables interactive web pages and thus is an essential part of web applications. The vast majority of websites use it, and all major web browsers have a dedicated JavaScript engine to execute it. As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative (including object-oriented and prototype-based) programming styles. 
    `
    const newString = string.split('.').map((x) => x.trim()).filter((x) => x != '');
    for (let i = 0; i < newString.length; i += 3) {
      const arr = []
      for (let j = 0; j < 3; j++) {
        if(newString[i+j]){
            arr.push(newString[i+j])

        }
      }
      const final = arr.join('. ') + '.'
      debugger
    }

}
largestNumber("this is an example", "Camel Case")