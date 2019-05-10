// for loops

const array=['shaun', 'mario','luigi']
for (let i = 0; i < array.length; i++) {

  // console.log('in loop', array[i])
  let html=`<div>${array[i]}</div>`;
  console.log(html)

}
names=['Rohan',"Esha","Corrie"]
let i=0;
while(i<names.length){

  let html=`<div>${names[i]}</div>`;
  console.log(html)
  console.log(names)
  i++
}
do {
  console.log(names)
  i++
}while(i<names.length)


// if statement

if(names[0]==="Esha"){
  console.log('Found Esha')
}else{
  console.log('Where is Esha?')
}
const password='pass!al12'
if(password.length>=8 && (password.includes('@') || password.includes('!'))){
  console.log('Password accepted')
}else{
  console.log('Password must be more than 8 characters')
}

let userName='Robin'
if(!userName){
  console.log("Username is not set")
}else if(!!userName || !!undefined){
  console.log("SET")
}

const array1=['shaun', 'mario','luigi']
for (let i = 0; i < array1.length; i++) {

  // console.log('in loop', array[i])
  let html=`<div>${array1[i]}</div>`;
  console.log(html)
  if(array[i]==='mario'){
    break
  }


}
// scope- a1 is global scope
let a1 =30

