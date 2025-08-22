//  document.querySelector() --> tag, class, id
//  document.getElementById() --> id
//  document.querySelectorAll() --> tag, class, id

var num1 = document.querySelector("#num1")
var num2 = document.querySelector("#num2")

var answer = document.querySelector("#answer")

var btn1 = document.getElementById("add")
var btn2 = document.getElementById("sub")
var btn3 = document.getElementById("mul")
var btn4 = document.getElementById("div")


// addEventListener --> listens to an event and executes the function
btn1.addEventListener("click",function(){
  var n1 = Number(num1.value)
  var n2 = Number(num2.value)

  console.log(n1 + n2)

  // innerHtml
  // textContent
  answer.textContent = "Your addition is : " + (n1 + n2) 
})