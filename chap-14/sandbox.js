// //store data
// localStorage.setItem('name','mario')
// localStorage.setItem('age','50')


// // get data
// let name=localStorage.getItem('name')
// let age=localStorage.getItem('age')
// console.log(name,age);


// // update data
// // localStorage.setItem('name','luigi')
// // localStorage.age='40'
// // name=localStorage.getItem('name')
// // name=localStorage.getItem('age')
// // console.log(name,age)

// // delete data from storage

// // localStorage.removeItem('name')
// name=localStorage.getItem('name')
// console.log(name)
// localStorage.clear()

const user=[{
  name:'Rohan',
  age:25,
  location:{
    state:"TX",
    city:"Houston"
  }
},
{
  name:'Esha',
  age:16,
  location:{
    state:"TX",
    city:"Houston"
  }
},
{
  name:'Corrie',
  age:20,
  location:{
    state:"TX",
    city:"Houston"
  }
},

]
const string=JSON.stringify(user)
localStorage.setItem('users',string)
const storedData=localStorage.getItem('users')
console.log(JSON.parse(storedData)[0].location)