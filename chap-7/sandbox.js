const form=document.querySelector('.signup-form')
const feedback=document.querySelector('.feedback')
const usernamePattern=/^[a-z0-9]{6,12}$/;
// const username=document.querySelector('#username')
form.addEventListener('submit',(e)=>{
  e.preventDefault();
// console.log(username.value);
const username=form.username.value;

// const usernamePattern=/^[a-z0-9]{6,12}$/;
usernamePattern.test(username)===true?feedback.textContent="Valid Username":feedback.textContent="Invalid username. Username must constain letters and numbers & be 6,12 characters long"


})

form.username.addEventListener('keyup',e=>{

  if(usernamePattern.test(e.target.value)){
    form.username.setAttribute('class','success')
  }else{
    form.username.setAttribute('class','error')
  }
})

// const username='rohanganguly';
// const pattern=/^[a-z0-9]{6,}$/;

// // let result=pattern.test(username)
// // console.log(result)
// // if(result){
// //   console.log('Test passed')
// // }else{
// //   console.log('Test failed')
// // }
// let result=username.search(pattern)
// console.log(result)