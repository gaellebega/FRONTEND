// to be able to use the asynch we have ti write async keyword then the async always have to return the promise
//this is called the async function
const getTodos=async()=>{
     const response = await fetch("https://jsonplaceholder.typicode.com/users");
    //  console.log(response);
     const data = await response.json();
    //  console.log(data);
     return data;
};
// when all the promisr have been resolved then do something
console.log(1);
console.log(2);
getTodos()
.then(data=>console.log("resolved",data));
// const test=getTodos();
// console.log(test)
console.log(3);
console.log(4);