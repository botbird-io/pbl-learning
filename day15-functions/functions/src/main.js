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

var err = document.getElementById("error")

function checkEmptyValue(){
  if(num1.value == "" || num2.value == ""){
    err.textContent = "Error - Values cannot be empty"
    return false
  }
    err.textContent = "‎ "
  return true
}

// addEventListener --> listens to an event and executes the function
btn1.addEventListener("click",function(){
  if(checkEmptyValue() == false) return
  var n1 = Number(num1.value)
  var n2 = Number(num2.value)

  console.log(n1 + n2)

  // innerHtml
  // textContent
  answer.textContent = "Your addition is : " + (n1 + n2) 
})

btn2.addEventListener("click",function(){
  if(checkEmptyValue() == false) return
  var n1 = Number(num1.value)
  var n2 = Number(num2.value)

  console.log(n1 - n2)

  // innerHtml
  // textContent
  answer.textContent = "Your Subtraction is : " + (n1 - n2) 
})

btn3.addEventListener("click",function(){
  if(checkEmptyValue() == false) return
  var n1 = Number(num1.value)
  var n2 = Number(num2.value)

  console.log(n1 * n2)

  // innerHtml
  // textContent
  answer.textContent = "Your Multiplication is : " + (n1 * n2) 
})

btn4.addEventListener("click",function(){
  if(checkEmptyValue() == false) return
  var n1 = Number(num1.value)
  var n2 = Number(num2.value)

  console.log(n1 / n2)

  // innerHtml
  // textContent
  answer.textContent = "Your Division is : " + (n1 / n2) 
})