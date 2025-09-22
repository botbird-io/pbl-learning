var arr = []

var tbody = document.querySelector("tbody")

function displayRows(tasks){
  tbody.innerHTML = null

  tasks.forEach(function(elem,index){
    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    var td2 = document.createElement("td")
    var td3 = document.createElement("td")

    td1.innerText = elem.task_name
    td2.innerText = elem.priority
    td3.innerText = "Delete"

    var tdClasses = "text-center"    
    td1.className = tdClasses
    td2.className = tdClasses
    td3.className = tdClasses

    tr.append(td1,td2,td3)
    tbody.append(tr)
  })

}

displayRows(arr)
var input = document.querySelector("input")
var select = document.querySelector("select")

// display on submit
document.querySelector('form').addEventListener("submit",function(e){
  e.preventDefault()

  var task_name = input.value
  var priority = select.value

  arr.push({
    task_name : task_name,
    priority : priority
  })

  displayRows(arr)
})
