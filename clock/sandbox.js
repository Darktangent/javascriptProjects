
const clock=document.querySelector('.clock');

const now=new Date()
console.log(dateFns.isToday(now))
// format

console.log(dateFns.format(now,'DD-MMM-YYYY'))

const tick=()=>{


  const now =new Date()

  const h=now.getHours()
  const m=now.getMinutes()
  const s=now.getSeconds()
const html=`
  <span>${h}</span> : 
  <span>${m}</span> :
  <span>${s}</span>
`
  clock.innerHTML=html

}

setInterval(tick,1000)


