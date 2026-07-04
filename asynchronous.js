    // the way the request object is created
const request=new XMLHttpRequest();
// what we nend to make the request we need 2 things
// we need the request(GET,PUT,POST) and another argument of the end point
request.open("GET","https://jsonplaceholder.typicode.com/todos/");
// The above we have told our request type is and where is is going to get the data from
//to send the request
request.send();