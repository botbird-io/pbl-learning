// // higher order function

// // 

// function print(abc){
//     console.log(abc)
// }

// print(12)
// print("Something")
// print({})
// print([12,1])
// print(true)

// // when we send a function as a parameter, it is called hof

// function accept(abc){
//     abc()
// }

// accept(def)

// function def (){
//     console.log("inside def funciton")
// }


// array

// arr = [2,3,4,5]

// arr.push(6)
// arr.pop()
// arr.length

// 4 hof in array

// forEach
// map
// filter
// reduce

// shop 
// pencil box - 2 - Rs 40
// paint brush - 4 - Rs 20
// paint box - 1 - Rs 80
// Canvas sheet - 2 - Rs 10

// method 1 to show this data in code
// name =  [pencil, brush, paint, canvas]
// quantity = [2,4,1,2]
// price = [40,20,80,10]


// method 2
// var pencil = {
//     quantity : 2,
//     price : 40
// }
// var brush = {
//     quantity : 4,
//     price : 20
// }
// var paint = {
//     quantity : 1,
//     price : 80
// }
// var canvas = {
//     quantity : 2,
//     price : 10
// }


// method 3

var shopingList = [
    {
        name : "pencil",
        quantity : 2,
        price : 40
    },{
        name : "brush",
        quantity : 4,
        price : 20,
    },{
        name : "paint",
        quantity : 1,
        price : 80
    },{
        name : "canvas",
        quantity : 2,
        price : 10
    },
]

//-------------------------------------------------------
// calculate how much items we bought

// if we use method 1 - add all values in quantity array

// if we use method 2 - pencil.quantity + brush.quantity + ........

// if we use method 3 - loop on array and add quantity

//-------------------------------------------------------
// method 1

//                     |
// quantity = [2,4,1,2]
// items = 9

// var items = 0
// for(var i=0;i<quantity.lenght;i++){
//     items = items + quantity[i]
// }

// method 2

// items = pencil.quantity + brush.quantity + paint.quantity + canvas.quantity

// method 3

// var items = 0
// for(var i=0;i<shoppingList.lenght;i++){
//     items = items + shoppingList[i].quantity
// }

// --------------------------------------------

// we will use method 3 from now

// calculate total pricing

// var total = 0

// for(var i=0;i<shopingList.length;i++){
//     total = total + shopingList[i].quantity * shopingList[i].price
// }
// console.log(total)

// hof forEach

// shopingList.forEach(function(elem,index){
//     console.log(elem.name)
// })


var arr = [1,2,3,4]

var arr2 = arr.forEach(function(elem,index){
    console.log(elem * elem)
})

console.log("--------------")
console.log(arr2)
// map

var arr3 = arr.map(function(elem,index){
    console.log(elem * elem)
    return 2 * elem
})

console.log("--------------")
console.log(arr3)

// filter

var arr4 = shopingList.filter(function(elem,index){
    return elem.price >= 20 && elem.price <= 60
    
})

console.log("--------------")
console.log(arr4)

// reduce

var total = shopingList.reduce(function(agg, elem, index){
    return agg + elem.quantity * elem.price
},0)


console.log("--------------")
console.log(total)