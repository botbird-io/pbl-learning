var app = document.getElementById("app")

// var div = document.createElement("div")
// var img = document.createElement("img")
// var h2 = document.createElement("h2")
// var p = document.createElement("p")
// var button = document.createElement("button")

// div.append(img,h2,p,button)

// app.append(div)

// // adding classes to elements

// div.className = "mx-10 mt-10 flex flex-col items-center justify-around shadow-lg rounded-md px-5 pt-2 py-4 bg-white h-110"
// img.className = "h-70"
// h2.classList = ["font-bold"]
// button.classList = ["bg-blue-500","hover:bg-blue-600","text-white","py-1","px-2","rounded-md"]

// // adding content

// h2.innerHTML = "Shinchan in Our Dinosour Dairy"
// p.innerText = "Rating - 7.8"
// button.textContent = "Book Now"

// // adding attributes

// img.setAttribute("src","https://cdn.moviefone.com/image-assets/1221404/n7YcOeqPOmvQ2PUatn4UqV5YStj.jpg?d=360x540&q=30")


var arr = [{
  title : "Shinchan in Our Dinosour Dairy",
  rating : 7.8,
  poster : "https://cdn.moviefone.com/image-assets/1221404/n7YcOeqPOmvQ2PUatn4UqV5YStj.jpg?d=360x540&q=30"
},{
  title : "Shinchan in Our Dinosour Dairy",
  rating : 7.8,
  poster : "https://cdn.moviefone.com/image-assets/1221404/n7YcOeqPOmvQ2PUatn4UqV5YStj.jpg?d=360x540&q=30"
},{
  title : "Shinchan in Our Dinosour Dairy",
  rating : 7.8,
  poster : "https://cdn.moviefone.com/image-assets/1221404/n7YcOeqPOmvQ2PUatn4UqV5YStj.jpg?d=360x540&q=30"
},{
  title : "Shinchan in Our Dinosour Dairy",
  rating : 7.8,
  poster : "https://cdn.moviefone.com/image-assets/1221404/n7YcOeqPOmvQ2PUatn4UqV5YStj.jpg?d=360x540&q=30"
},{
  title : "Shinchan in Our Dinosour Dairy",
  rating : 7.8,
  poster : "https://cdn.moviefone.com/image-assets/1221404/n7YcOeqPOmvQ2PUatn4UqV5YStj.jpg?d=360x540&q=30"
},{
  title : "Shinchan in Our Dinosour Dairy",
  rating : 7.8,
  poster : "https://cdn.moviefone.com/image-assets/1221404/n7YcOeqPOmvQ2PUatn4UqV5YStj.jpg?d=360x540&q=30"
},{
  title : "Shinchan in Our Dinosour Dairy",
  rating : 7.8,
  poster : "https://cdn.moviefone.com/image-assets/1221404/n7YcOeqPOmvQ2PUatn4UqV5YStj.jpg?d=360x540&q=30"
}]

arr.forEach(function(elem){
  var div = document.createElement("div")
  var img = document.createElement("img")
  var h2 = document.createElement("h2")
  var p = document.createElement("p")
  var button = document.createElement("button")

  div.append(img,h2,p,button)

  app.append(div)

  // adding classes to elements

  div.className = "mx-10 mt-10 flex flex-col items-center justify-around shadow-lg rounded-md px-5 pt-2 py-4 bg-white h-110"
  img.className = "h-70"
  h2.className = "font-bold"
  button.className = "bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-md"

  // adding content

  h2.innerHTML = elem.title
  p.innerText = "Rating - " + elem.rating
  button.textContent = "Book Now"

  // adding attributes

  img.setAttribute("src",elem.poster)
})