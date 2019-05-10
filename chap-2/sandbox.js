alert(`Hello World`);
let age=25
let year=2019
const points=80
console.log(`Age: ${age}, Year ${year}, Points ${points}`);
// strings
name="Rohan Ganguly"
firstName=name.split(' ')[0]
lastName=name.split(' ')[1]
console.log(firstName)
// concat
let fullName=firstName.concat(lastName)
console.log(fullName)
// string methods
console.log(fullName.toUpperCase())
// splitting='rohan'.splice(1,1)
let email="roohan@email.com"
let index=email.indexOf('@')
console.log(index)
let result=email.slice(0,3)

let ninja=['shawn','rohan','lee']
console.log(ninja[ninja.length-1])