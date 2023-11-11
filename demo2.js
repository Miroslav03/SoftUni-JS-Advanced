const obj  = {
    name:'Miro',
    age:20,
    sex:'male',
    eyeColor:'Brown'
}

Object.defineProperty(obj,'name',{
    value:'Miro',
    enumerable:false,
    writable:true,
    configurable:false
})

for (const key in obj) {
    console.log(key);
}

console.log(obj);