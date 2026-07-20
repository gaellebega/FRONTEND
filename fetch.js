//  fetching is js function to request data from a server or API
//  fetch(url)
// the response contains something like status,headers,ok,body
 fetch("https://jsonplaceholder.typicode.com/users")
      .then((response)=>{
        //we use return because we want to pass the result to the next .then()
        //we use the response.json to be able to read the body
        return response.json();
      })
      .then((data)=>{
        //here to output the error we are getting
        console.log(data);
      })
      .catch((error)=>{
        console.log(error);
      })
//promise is only rejected when we got some network error but the status willl be 404
//they are not using the json because they dont wanna see the data only to check the response
  fetch("todos/damy.json") 
        .then((response)=>{
         console.log("resolved",response)
        })
        .catch((err)=>{
         console.log("rejected",err)
        }) 

