
class User{
  constructor(username,email){
    this.username=username;
    this.email=email;
    this.score=0
  }
  login(){
    console.log(`${this.username} just logged in`)
    return this
  }
  logout(){
    console.log(`${this.username} just logged out`)
    return this
  }
  incScore(){
    this.score++;
    console.log(`${this.username} has a score of ${this.score}`)
    return this
  }
}
class Admin extends User{
  constructor(username,email,title){
    super(username,email)
    this.title=title
  }
  deleteUser(user){
    users=users.filter(u=>{
      return u.username!==user.username
    })
  }
}

const mario=new User('mario','mario@test.com')
const luigi=new User('luigi','luigi@example.com')
const yoshi=new Admin('yoshi','yoshi@test.com','Sr-II')
// let users=[mario,luigi,yoshi]
// // console.log(mario,luigi)
// yoshi.login().incScore()
// mario.login().incScore().logout()
// yoshi.deleteUser(mario)
// console.log(users)
console.log(yoshi)
function OldUser(username,email){
  this.username=username;
  this.email=email;
  
}
OldUser.prototype.login=function(){
  console.log(`${this.username} is currently logged in`)
  return this
}
OldUser.prototype.logout=function(){
  console.log(`${this.username} loggedout`)
  return this
}
function OldAdmin(username,email,title){
  OldUser.call(this, username,email)
  this.title=title
}
OldAdmin.prototype=Object.create(OldUser.prototype)
Admin.prototype.deleteUser=function(){
  console.log('delete user')
}
const user1=new OldUser('chul-li','chun-li@email.com')
const user1admin=new OldAdmin('shaun-li','shaun-li@email.com', 'Mid-III')
console.log(user1admin.logout())