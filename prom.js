    
//defining async function 
function prepare(ingredient,callback){
    console.log("preparing",callback)
    callback(ingredient);
}
//calling function
prepare("onions and garlic",function chop(args){
    console.log("chopping"+args);
});
 async function greeting(hello){
     return hello;
}
 greeting("mambo");
 greeting("hey")
.then (hello => console.log)
//promise
var resentvalue = Promise.resolve(290);
var cast=Promise.resolve(resentvalue);
cast.then=(function(value){
    console.log('value:'+value);
});
console.log("resent===cast?"+(resentvalue===cast));
//method 
let array1=["value","source", {name:"website"}];
let popped=array1.pop();
console.log(array1,popped);

function makePromise(completed) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (completed) {
                resolve("I have done my work on time.");
            } else {
                reject("I haven't completed my work yet.");
            }
        }, 4 * 1000);
    });
}

console.log(rest.gender);
 var student=100;
 function police(){
     var action=40;
    function collect(){
     var direction="Gigiri police station"
    console.log("AkiraChix have " + student  + "students who were collected by"+ action +"police officers to"+ direction)

     }
 collect();
 }
 var basket=police();

