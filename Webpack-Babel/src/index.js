import {styleBody,addTitle,contact} from "./dom";
import users, {getPrimUsers} from './data'

console.log('index file');
addTitle('testing from index file');
styleBody()
console.log(contact);
console.log(users)
users.map((user,i)=>{
  console.log(user,i);
  
})
const premium=getPrimUsers(users)
console.log(premium)
//  "babel": "./node_modules/.bin/babel src/index.js -w -o dist/assets/bundle.js",