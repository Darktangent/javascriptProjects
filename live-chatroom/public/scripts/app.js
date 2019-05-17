// dom queries
const chatList=document.querySelector('.chat-list');
const newChatForm=document.querySelector('.new-chat');
const newNameForm=document.querySelector('.new-name')
const updateMsg=document.querySelector('.update-mssg');
const rooms=document.querySelector('.chat-rooms');

// add chat
newChatForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  const message=newChatForm.message.value.trim();
  chatroom.addChat(message).then(()=>newChatForm.reset()).catch(err=>console.log(err))
})
// update username
newNameForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  //update name
  const newName=newNameForm.name.value.trim();
  chatroom.updateName(newName);
  newNameForm.reset();
  // show then hide update message
  updateMsg.innerText=`Your name was updated to ${newName}`;
  setTimeout(()=>updateMsg.innerText="",4000)
})
// update chat room
rooms.addEventListener("click",e=>{
  if(e.target.tagName==="BUTTON"){
    chatUI.clear();
    chatroom.updateRoom(e.target.getAttribute("id"));
    chatroom.getChat(chat=>chatUI.render(chat))
  }
})
// check localstorage for name
const username=localStorage.username ? localStorage.username : "Anonymous"
//class instance
const chatUI=new ChatUI(chatList);
const chatroom=new Chatroom('general',username);
// get and render
chatroom.getChat((data)=>
  // console.log(data);
  chatUI.render(data)

)

// chatroom.addChat('Test')
//   .then(()=>console.log('chat added'))
//   .catch(err=>console.log('err',err))