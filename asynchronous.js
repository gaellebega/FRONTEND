//JSON DATA
const getTodos=(resource,callback)=>{
const request = new XMLHttpRequest();
request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
        console.log(request.responseText);
    }
    else if (request.readyState === 4) {
        console.log("Could not fetch the data!")
    }
});
request.open("GET", "todo.json");
request.send();
getTodos((err,data)=>{
    console.log(data);
getTodos((err,data)=>{
    console.log(data)
})
})
}