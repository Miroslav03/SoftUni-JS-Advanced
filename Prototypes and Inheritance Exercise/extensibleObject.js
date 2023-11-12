function extensibleObject() {
   const obj = {
    extend: function (template){
        for (const key in template) {
            const element = template[key];

            if(typeof element === 'function'){
                Object.getPrototypeOf(obj)[key] = element;
            }else{
                obj[key] = element;
            }
        }
    }
   }

   return obj;
}
const myObj = extensibleObject();

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);
debugger
