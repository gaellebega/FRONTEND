// they are kinda similar to the noraml strings except they are some features which they have
var temp=`hellooo
 my name is rynnn`;
console.log(temp);
// the template string allow us to break a line by just 
// starting at a new line and that is also how everything is displayed on the screeen and it doesnt ignore the white spaces 


function loginNinja(name,age){
  console.log("my bane is "+name +"and my age is" +age)
  // with the template strings you can do something like this
  console.log(`my name is` +name)
  console.log(`my name is ${name}`)
}
loginNinja("Ryu",20)