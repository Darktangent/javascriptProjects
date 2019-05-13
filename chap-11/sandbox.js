// dates & times


const before=new Date('February 1 2019 7:30:59');
const now=new Date()

// console.log(now);
// console.log(typeof now)
// years months days and times
// console.log('Full year', now.getFullYear())
// console.log('Full month', now.getMonth())
// console.log('Full day', now.getDay())
// console.log('Full Date', now.getDate())
// console.log('get hours', now.getHours())
// console.log('Minutes', now.getMinutes())
// console.log('Seconds', now.getSeconds())
// timestamp

console.log(now.getTime())
console.log(before.getTime())
const diff= (now.getTime()-before.getTime())
console.log(diff)
const mins=Math.round(diff/1000/60)
console.log(mins)
const hours=Math.round(mins/60)
console.log(hours)
const days=Math.round(hours/24)
console.log(days)
// console.log(now.toDateString())
// console.log(now.toTimeString())
// console.log(now.toLocaleString())
// converting timestamp to date

const timestamp1=1557617604419;

const dates=new Date(timestamp1)
console.log(dates.toLocaleDateString())

