// const para=document.querySelector('body > h1')
// const error=document.querySelectorAll('.error')
// console.log(para);

// const paras=document.querySelectorAll('p')
// paras.forEach(para=>{
//   console.log(para)
// })
// console.log(paras[1])
// console.log(error)
// // ID

// const title=document.getElementById('page-title')
// console.log(title)

// // class
// const errors=document.getElementsByClassName('error')

// console.log(errors[0])


// // tag
// const p=document.getElementsByTagName('p')
// console.log(p)

// const para=document.querySelector('p')
// console.log(para.innerText)
// para.innerText+=' Ninjas are awesome'

// const paras=document.querySelectorAll('p')
// paras.forEach(para=>{
//   para.innerText+="new text"

// })
// const content=document.querySelector('.content')
// console.log(content.innerHTML)
// content.innerHTML+="<h2>This is new h2</h2>"

// const people=['mario','luigi','yoshi']
// people.forEach(person=>{
//   content.innerHTML=`<p>${person}</p>`
// })

// const link=document.querySelector('a')

// link.setAttribute('href','https://www.netflix.com')
// link.innerText="Netflix"

// console.log(link.getAttribute('href'))
// const msg=document.querySelector('body > div.error')
// console.log(msg.getAttribute('class'))
// msg.setAttribute('class','success')
// msg.setAttribute('style','color:green')

// const title=document.querySelector('h1')
// // title.setAttribute('style',"margin:50px")
// title.style.margin='50px'
// title.style.color='crimson'
// title.style.fontSize="3rem"
// const content=document.querySelector('p')
// console.log(content.classList)
// content.classList.add("error")
// const content=document.querySelectorAll('.test')
// const title=document.querySelectorAll('.title')
// console.log(content);
// content.forEach(con=>{
//   if(con.textContent.includes('error')){
//      con.classList.add('error')
//   }
//   if(con.textContent.includes('success')){
//     con.classList.add('success')
//  }
// })
// title.classList.toggle('title')
// title.classList.toggle('title')
// const article=document.querySelector('article')
// console.log(article.children)
// Array.from(article.children).forEach((child)=>{
//   child.classList.add('article-element')
// })

// const title=document.querySelector('h2')
// console.log(title.parentElement.parentElement)
// console.log(title.nextElementSibling)
// console.log(title)


const button=document.querySelector('button')
const ul=document.querySelector('ul')
const li=document.querySelectorAll('li')
const box=document.querySelector('.box')
const copy=document.querySelector('.copy-me')
copy.addEventListener('copy',()=>{
  console.log("Oy! my content is copyright")
})
box.addEventListener('mousemove',(e)=>{
  // console.log(e)
  // console.log(e.offsetX,e.offsetY)
  // console.log(e)
  box.textContent=`x pos:${e.offsetX} y pos:${e.offsetY}`
})
document.addEventListener('wheel',(e)=>{
  console.log(e.pageX, e.pageY)
})

// li.forEach(item=>{
//   item.addEventListener('click',(e)=>{
//     // console.log(e.target);
//     // console.log(item)
//     console.log('event in li');
//     e.stopPropagation()
//     e.target.remove()

    
//   })
// })


button.addEventListener('click',(e)=>{
  // console.log('Button Clicked');
  // ul.innerHTML+='<li>Something new</li>'
  const li=document.createElement('li')
  li.textContent="New todo"
  ul.prepend(li)
})

ul.addEventListener('click',(e)=>{
  // console.log('event in ul');
  console.log(e.target);
  if(e.target.tagName==='LI'){
    e.target.remove()
  }
 
})
const popButton=document.querySelector('.pop-button');
const popup=document.querySelector('.popup-wrapper')
const close=document.querySelector('.popup-close')
popButton.addEventListener('click',(e)=>{
popup.style.display='block';
})

close.addEventListener('click',(e)=>{
  popup.style.display='none';
  })
  popup.addEventListener('click',(e)=>{
    popup.style.display='none';
    })