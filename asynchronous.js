//JSON DATA
const getTodos=(resource,callback)=>{
const request = new XMLHttpRequest();
request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
        const data=JSON.parse(request.responseText);
        callback(undefined,data);
    }
    else if (request.readyState === 4) {
        callback("Could not fetch the data!")
    }
});
request.open("GET", "todo.json");
request.send();
getTodos("todos/legit.json",(err,data)=>{
    console.log(data);
getTodos("todos/todo.json",(err,data)=>{
    console.log(data)
    getTodos("todos/damy.json",(err,data)=>{
        console.log(data);
    })
})
})
}