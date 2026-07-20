//  fetching is js function to request data from a server or API
//  fetch(url)
// the response contains something like status,headers,ok,body
 fetch("https://jsonplaceholder.typicode.com/users")
      .then((response)=>{
        //because we want to pass the result to the next .then()
        return response.json();
      })
      .then((data)=>{
        console.log(data);
      })
      .catch((error)=>{
        console.log(error);
      })