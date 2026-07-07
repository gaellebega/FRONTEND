//JSON DATA
const getTodos=(callback)=>{
const request = new XMLHttpRequest();
request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
        console.log(request.responseText);
    }
    else if (request.readyState === 4) {
        console.log("Could not fetch the data!")
    }
});
request.open("GET", "https://jsonplaceholder.typicode.com/todos/?t=" + new Date().getTime());
request.send();
getTodos((err,data)=>{
    console.log("callback fired");
    if (err){
        console.log(err);
    }
    else{
        console.log(data)
    }
})
}