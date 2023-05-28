
let name = undefined
let age = 19;



if ((name || age) ==( undefined || null || '')) {
    throw new Error("Invalid input!");

}