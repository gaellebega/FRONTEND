// the way we have to use the chaining promise is we have always to return something if we ahve the error handling we got say throw new error so withoout the promise chaining there will be the callback hell 
 const mypromise=new promise((resolve,reject)=>{
  let successs=true;
  if(success){
    resolve("order received!")
  } else{
    reject("order rejected");
  }
 });

 //chaining
 mypromise
   .then((message)=>{
    console.log(message);
    return "preparing your order";
   })
   .then((status)=>{
    console.log(status);
    return "order is being shipped";
   })
   .then((shipping)=>{
    console.log(shipping);
   })
   .catch((error)=>{
    console.log(error);
   })
   .finally((output)=>{
    console.log("process finished")
   })