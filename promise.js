const getSomething=()=>{
  return new Promise((resolve,reject)=>{
  //do something like fetch the data
  resolve("some data");
  reject("some error");
});
};
getSomething().then(data=>{
  console.log(data);
}).catch(err=>{
  console.log(err);
})
