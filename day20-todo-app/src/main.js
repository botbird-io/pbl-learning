var arr = [{
  task_name : "Study",
  priority : "High"
},{
  task_name : "Cleaning",
  priority : "Low"
}]

var tbody = document.querySelector("tbody")

function displayRows(tasks){
  // tbody.innerHTML = null

  tasks.forEach(function(elem,index){
    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    var td2 = document.createElement("td")
    var td3 = document.createElement("td")

    td1.innerText = elem.task_name
    td2.innerText = elem.priority
    td3.innerText = "Delete"

    td1.className = "text-center"
    td2.className = "text-center"
    td3.className = "text-center"

    tr.append(td1,td2,td3)
    tbody.append(tr)
  })

}

displayRows(arr)