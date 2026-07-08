// callback((err,data)=>{

// })
// const getTodos=(resources,callback)=>{
//   const request=new XMLHttpRequest();
//   request.addEventListener("readystatechange",()=>{
//   if(request.readyState===4 && request.status===200){
//     const data=JSON.parse(request.responseText);
//     callback(undefined,data)
//   }
// });
// request.responseXML("GET",resources);
// request.send();
// };
// getTodos("todos/jsons",(err,data)=>{
//   console.log(data);
// })