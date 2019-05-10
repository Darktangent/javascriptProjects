// // function

// // declaration
// function greet(){
//   return('Hello There');
  
// }
// // greet()

// //expression
// const speak= function(greet){
//   console.log(`Good Day ${greet}`)
// }
// speak(greet())

const talk= function(name='default',time='night'){

  return (`Good ${time} ${name}`)
}
console.log(talk('rohan','morning'))
const calcArea=(radius)=>{
  return 3.14*radius**2
}
result=calcArea(4)
console.log(result)

// funtions
const greeting=()=>"Hello"
console.log(greeting())

myName="Rohan Ganguly"
// methods
res=myName.toLowerCase()
console.log(res)

// foreach


//callback

const myCalculator=(cb,args)=>{
return cb(args)
}


const add=function(args){
  return args+args
}
const mul=function(args){
  return (args*args)
}

// result1=myCalculator(add,(2,2))
result12=myCalculator(mul,(3,7))
console.log(result12)

// foreach
let numbers=[1,2,3,4,5,56]
numbers.forEach((number,i)=>{
  console.log(number*2,i)
})
const ul= document.querySelector('.people')
const people=['mario','luigi','ryu','shaun','chun-li']

let html=``
people.forEach((person)=>{
html+=`<li style="color:purple">${person}</li>`
})
console.log(html)
ul.innerHTML=html