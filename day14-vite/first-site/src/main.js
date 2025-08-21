function changeColor(color){
  console.log("in a function")
  console.log(color)
}

changeColor("teal")

console.log("out of function")

document.querySelector("h1").addEventListener("click",
  function(){
    changeColor("white")
  }
)