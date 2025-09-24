var arr = [{
  priority : "High",
  task_name : "Study"
},{
  priority : "Low",
  task_name : "Sleep"
},{
  priority : "High",
  task_name : "Study"
},{
  priority : "Low",
  task_name : "Sleep"
}]

var tbody = document.querySelector("tbody")

function displayRows(tasks){
  tbody.innerHTML = null

  tasks.forEach(function(task,index){
    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    var td2 = document.createElement("td")
    var td3 = document.createElement("td")

    var span = document.createElement("span")
    span.innerText = "Delete"
    span.className = "hover:cursor-pointer"
    td1.innerText = task.task_name
    td2.innerText = task.priority
    td3.append(span)

    var tdClasses = "text-center"    
    td1.className = tdClasses
    td2.className = tdClasses + " text-white"
    td3.className = tdClasses

    if(task.priority == "High"){
      td2.className = td2.className + " bg-error"
    }else if(task.priority == "Low"){
      td2.className += " bg-success"
    }

    tr.append(td1,td2,td3)
    tbody.append(tr)


    // delete event on button
    span.addEventListener("click",function(){
      deleteRow(index)
    })
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

function deleteRow(index){
  arr.splice(index,1)
  displayRows(arr)
}