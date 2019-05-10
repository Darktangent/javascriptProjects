
const blogs=[
  {title:'Why mac & cheese rules',likes:30},
  {title:'Why bacon is awesome',likes:10}
]
console.log(blogs)
let user={
  name:'rohan',
  password:'password12',
  age:30,
  email: 'rohan@ninja.com',
  location:'Berlin',
  blogs:[ {title:'Why mac & cheese rules',likes:30},
  {title:'Why bacon is awesome',likes:10}],
  login:function(){
    console.log('the user loggedin')
  },
  logout:function(){
    console.log('User logged out')
  },
  logBlogs: function(){
    return this.blogs.forEach(post=>{
      console.log(post.title, post.likes)
    })
  }
}

console.log(user.email,user.location);
user.age=35
console.log(user['age'])

console.log(typeof user)
user.login()
user.logout()
user.logBlogs()