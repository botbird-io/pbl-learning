var app = document.getElementById("app")

var arr = [{
  title : "Shinchan in Our Dinosour Dairy",
  rating : 7.8,
  poster : "https://cdn.moviefone.com/image-assets/1221404/n7YcOeqPOmvQ2PUatn4UqV5YStj.jpg?d=360x540&q=30",
  price : 1000
},{
  title : "Shinchan in Our Dinosour Dairy 1",
  rating : 7.8,
  poster : "https://cdn.moviefone.com/image-assets/1221404/n7YcOeqPOmvQ2PUatn4UqV5YStj.jpg?d=360x540&q=30",
  price : 1100
},{
  title : "Shinchan in Our Dinosour Dairy 2",
  rating : 7.8,
  poster : "https://cdn.moviefone.com/image-assets/1221404/n7YcOeqPOmvQ2PUatn4UqV5YStj.jpg?d=360x540&q=30",
  price : 900
},{
  title : "Shinchan in Our Dinosour Dairy 3",
  rating : 7.8,
  poster : "https://cdn.moviefone.com/image-assets/1221404/n7YcOeqPOmvQ2PUatn4UqV5YStj.jpg?d=360x540&q=30",
  price : 500
},{
  title : "Shinchan in Our Dinosour Dairy 4",
  rating : 7.8,
  poster : "https://cdn.moviefone.com/image-assets/1221404/n7YcOeqPOmvQ2PUatn4UqV5YStj.jpg?d=360x540&q=30",
  price : 1500
},{
  title : "Shinchan in Our Dinosour Dairy 5",
  rating : 7.8,
  poster : "https://cdn.moviefone.com/image-assets/1221404/n7YcOeqPOmvQ2PUatn4UqV5YStj.jpg?d=360x540&q=30",
  price : 700
},{
  title : "Shinchan in Our Dinosour Dairy 6",
  rating : 7.8,
  poster : "https://cdn.moviefone.com/image-assets/1221404/n7YcOeqPOmvQ2PUatn4UqV5YStj.jpg?d=360x540&q=30",
  price : 2000
}]

function displayPosters(posters){
  app.innerHTML = null
  posters.forEach(function(elem){
    var div = document.createElement("div")
    var img = document.createElement("img")
    var h2 = document.createElement("h2")
    var p = document.createElement("p")
    var span = document.createElement("span")
    var button = document.createElement("button")
  
    div.append(img,h2,p,span,button)
  
    app.append(div)
  
    // adding classes to elements
  
    div.className = "mx-10 mt-10 flex flex-col items-center justify-around shadow-lg rounded-md px-5 pt-2 py-4 bg-white h-110"
    img.className = "h-70"
    h2.className = "font-bold"
    button.className = "bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-md"
  
    // adding content
  
    h2.innerHTML = elem.title
    p.innerText = "Rating - " + elem.rating
    span.innerText = "Price : Rs " + elem.price
    button.textContent = "Book Now"
  
    // adding attributes
  
    img.setAttribute("src",elem.poster)
  })
}

displayPosters(arr)

var minPrice = document.querySelector("#min-price")
var maxPrice = document.querySelector("#max-price")

var apply = document.getElementById("apply-filter")
var clear = document.getElementById("clear-filter")

apply.addEventListener("click",function(){
  var min = minPrice.value
  var max = maxPrice.value

  if(min>max){
    alert("Min should be less than maximum")
    return
  }

  console.log("Below is original array")
  console.log(arr)

  var filteredArr = arr.filter(function(elem,index){
    return elem.price >= min && elem.price <= max
  })

  console.log("Below is filtered array")
  console.log(filteredArr)

  displayPosters(filteredArr)
})

clear.addEventListener("click",function(){
  minPrice.value = ""
  maxPrice.value = ""

  displayPosters(arr)
})