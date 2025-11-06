
const x = new Promise((resolve,reject) => {
    
const dataFound = true;

if(dataFound){
    setTimeout(function(){
        resolve("Data loaded");}
        , 1000) 
} else {
    setTimeout(function(){
        reject("Data not found");}
        , 1000)
}
})

console.log("Start");

console.log(x);

x.then(result => console.log("Sucess:", result))
.catch(error => console.log("Error:", error))
.finally(() =>console.log("Promise has finished"));

console.log("End");