
// const getTodos=(resource)=>{

//   return new Promise((resolve,reject)=>{
//     const request= new XMLHttpRequest()
//     request.addEventListener('readystatechange',()=>{
//       // console.log(request, request.readyState)
//       if(request.readyState===4 && request.status==200){
//         const data=JSON.parse(request.responseText)
//        resolve(data)
//       }else if(request.readyState===4){
//         reject('error getting resouce')
//       }  
      
//     })
//     request.open('GET',resource)
//     request.send()
//   })
//   // const request= new XMLHttpRequest()
//   // request.addEventListener('readystatechange',()=>{
//   //   // console.log(request, request.readyState)
//   //   if(request.readyState===4 && request.status==200){
//   //     const data=JSON.parse(request.responseText)
//   //    callback(undefined,data)
//   //   }else if(request.readyState===4){
//   //     callback('Could not fetch data',undefined)
//   //   }  
//     // else{
//     //   callback('Unable to fetch data',undefined)
//     // }
//   // })
//   // request.open('GET',resource)
//   // request.send()
// }

// // getTodos(`https://jsonplaceholder.typicode.com/todos`,
// // (err,data)=>{
// // // console.log('callback fired')
// // console.log(data)
// // getTodos(`https://jsonplaceholder.typicode.com/users`,(err,data)=>{
// //   console.log(data)
// //   getTodos(`https://jsonplaceholder.typicode.com/albums`,(err,data)=>{
// //     console.log(data)
// //   })
// // })
// // // if(err){
// // //   console.log(err)
// // // }else{
// // //   console.log(data)
// // // }
// // })
// // promises
// getTodos(`https://jsonplaceholder.typicode.com/albums`).then(data=>{
//   console.log('promise 1 resolve',data)
//   return getTodos(`https://jsonplaceholder.typicode.com/users`)
// }).then((data)=>{
// console.log('promise 2 resolved', data)
// return getTodos (`https://jsonplaceholder.typicode.com/posts`)
// }).then(data=>{console.log('promise 3 resolved',data)}).catch((error)=>{
//   console.log('promise rejected',error)
// })




// const getData=()=>{
//   return new Promise((resolve,reject)=>{
//     resolve('Data')
//     // reject('error')
//   })
// }
// getData().then((data)=>{
//   console.log(data)
// },err=>{
//   console.log(err)
// })


// getData().then(data=>{
//   console.log(data)
// }).catch(err=>{
//   console.log(err)
// })

// fetch(`https://jsonplaceholder.typicode.com/posts`)
//   .then(response=>{
//     return response.json()
// }).then(data=>{
//   console.log('fetch',data)
// }).catch(err=>{
//   console.log('reject',err)
// })

const getResources=async()=>{

const response=await fetch(`https://jsonplaceholder.typicode.com/posts`)
if(response.status !==200){
  throw new Error('cannot fetch the data');
}
const data=await response.json()
return data
}
getResources().then(data=>{
  console.log(data)
})
.catch(err=>console.log('rejected',err.message))