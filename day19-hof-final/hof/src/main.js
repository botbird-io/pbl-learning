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

// arr.forEach(function(elem, index){
//   console.log(elem)
// })

// arr.map(function(elem, index){
//   console.log(elem)
// })
// map returns an new array
// [undefined,undefined,undefined,......] ----> in above case because our function is not returning anything

// var filterArr = arr.filter(function(elem, index){
//   return elem.price<=1000
// })

// truthy value --> every non zero number, every non empty string, all array, all objects
// falsy value --> 0, "", null, undefined

// console.log(filterArr)


var arr2 = [1,2,3,4,5,6]

var total = arr2.reduce(function(aggr, elem, index){
  return aggr + elem
})

console.log(total)

var arr3 = ["Sanket", "Milind", "Sapate"]

var name1 = arr3.reduce(function(aggr,elem,index){
  return aggr + " " +elem
})

console.log(name1)

var total = arr.reduce(function(aggr, elem, index){
  return aggr + elem.price
},0)


console.log(total)



// {} + 1100
// [object Object]1100 + 900
// [object Object]1100900


// 0 + 1000
// 1000 + 1100
// 2100 + 900

var prod = arr2.reduce(function(aggr,elem){
  return aggr * elem
})

console.log(prod)

//chaining

var ans = arr.map(function (elem, index){
  return elem.price
}).map(function(elem,index){
  return elem * 2
}).filter(function(elem,index){
  return index < 4
}).reduce(function(aggr,elem,index){
  return aggr + elem
})

console.log(ans)