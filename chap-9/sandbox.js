const scores=[10,30,15,25,50,40,5,98]
const names=['mario','shaun','chun-li','yoshi','luigi'];



// const filteredScores=scores.filter(score=>{
//   return score>20
// })
// console.log(filteredScores);
const users=[
  {name:'shaun',premium:true,spent:100},
  {name:'mario',premium:false,spent:20},
  {name:'yoshi',premium:true,spent:100},
  {name:'ron',premium:false,spent:200},
  {name:'chun-li',premium:true,spent:40}
]
// const premiumUsers=users.filter(user=>{
//   return user.premium
// })
// console.log(premiumUsers)

// const newScore=scores.map(score=>{
//   return score/100
// })
// console.log(newScore);

// const user=users.map(user=>{
//   if(user.premium===true){
//     return {premium:user.premium, name:user.name, status:'Gold'}
//   }else{
//     return user
//   }

// })
// console.log(user)
// const reducedScore=scores.reduce((acc,curr)=>{
// if(curr>30){
//   acc++;
// }
// return acc;
// },0)
// console.log(reducedScore)

// const premiumReduce=users.reduce((acc,curr)=>{
//   // console.log(curr.spent)
//   if(curr.premium===true){
//     acc+=curr.spent
//   }
//   return acc
// },0)
// console.log(premiumReduce)
const findIt=scores.find((score)=>{
  return score>50
})
// console.log(findIt);
// console.log(names.sort())
// console.log(scores.sort())
const players=[
{name:'mario',score:20},
{name:'luigi',score:10},
{name:'chun-li',score:30},
{name:'yoshi',score:30},
{name:'rohan',score:50}
]
const filteredArr=players.filter(player=>{
  return player.score > 20 
})
const preview=filteredArr.map(score=>{
  return `the ${score.name} has ${score.score} pts`
})
console.log(preview)

players.sort((a,b)=>{
if(a.score>b.score){
  return -1
}else if(b.score > a.score){
  return 1
}else {
  return 0
}
})

players.sort((a,b)=>{
  return b.score-a.score
})
console.log(players)
scores.sort((a,b)=>{
  return a-b
})
console.log(scores)