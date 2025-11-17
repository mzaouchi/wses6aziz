function Amen(){

  {
    var a = 8
    console.log(a)
  }

  console.log(a)


  return 'Hello ES6'
}

console.log(Amen())


function Amen(){

  {
     const a = 88
     console.log(a)
  }

  console.log(a)


 


  return 'Hello ES6'
}

console.log(Amen())

var name = "Zakaria"

name = "Amen"

console.log(name)

let age = 8

age = 7

console.log(age)


const name = "Ilyess"

name = "mahmoud"

const test = true

test = false

const arr = [2,4,8,6]

arr[0] = 33
arr.push(33333)
console.log(arr)
 arr = [8,6]

 const user = {name :"Abderahmen", age : 22}

// user= "nknlknkjk"

user.name = "Fathi"
user.city = "LAC"

console.log(user)
// user = 343

// function Somme(x,y){
//   return x+y
// }

// console.log(Somme(3,5))

// var Sum  =(a,b)=>{
//   var resultat = a + b
//   return resultat
// }
// console.log(Sum(3,8))

let sayHello=()=> "Hello"

console.log(sayHello())


const helloName=name=> "Hello"+" "+name

console.log(helloName("Zakaria"))
console.log(helloName("Mahmoud"))

var name = 'Amen'
var age = 8
// console.log("Hello jkjk \n jkjkjjkjkj "+ name)

console.log(`Hello ${name}, 
my age is ${age}.`)


// var age = 40



// // if(age < 18){
// //   console.log("Mineur")
// // }else{
// //   console.log("Majeur")
// // }

// console.log(age <18 ? "mineur" : "majeur")


// var name = "Zakaria"


// console.log(name == "Mahmoud" ? "Instructeur" : name == "Amen" ? "Eleve" : "Manager")

var age = 6

// age < 18 ? console.log("Mineur") : console.log("Majeur")

// age < 18 ? console.log("Mineur") : console.log(null)

// if(age < 18){
//   console.log('Mineur')
// }

age < 18 && console.log("Mineur")


var user = {
  name : 'Zakaria',
  age : 33,
  city : {
    ville : "Lac",
    cp : 8888
  }
}

var {name, age, city} = user
var {ville, cp} = city

console.log(`Hello i'am ${name}, i am ${age},
i live in ${ville}, my postal code ${cp}
`)


var t = [3,5,9,7,6]

var [mahmoud,fathi] = t

console.log(fathi)

// var aziz = [2, 4, 5]
// var v = aziz.map((el, i, t) => el + 1)

// console.log(v)

// console.log(aziz)

// var jj = [4,7,6,5]


// console.log(jj.map((jrana,djeja,t)=> jrana*djeja + 1000))

var sss = [2,4,8,6]

sss.forEach((el, i, t) => t[i] = t[i] + 1)

console.log(sss)
// var rr = [8,7,-10,3,5,3,0]

// console.log(rr.splice(1,2))

// console.log(rr)

// console.log(rr.sort((a,b)=> a - b))

// console.log(rr.sort((a, b) => b - a))

// console.log(Math.min(...rr))

// console.log(rr.filter((el,i, t)=> el < 5))

// console.log(rr.filter((el,i,t)=> el % 2 == 0))

// console.log(rr.find((el,i,t)=> el == 333))

// console.log(rr.findIndex((el,i,t)=> el == 90))

var str = "Hello Aziz First Day at ami"

console.log(str.split(' ').join(' '))

var ff = [3,4,8,9]


var sum = 0

console.log(ff.reduce((acc , cuu)=> acc + cuu / 5 , sum ))

