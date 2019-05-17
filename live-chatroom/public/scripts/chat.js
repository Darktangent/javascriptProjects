// add new chat doc
// setting up real time listener
// update username
// update room


class Chatroom{

  constructor(room,username){
  this.room=room;
  this.username=username;
  this.chat=db.collection('chat');
  this.unsub;
}
async addChat(message){
  //format chat
  const now=new Date();
  const chat={
    message:message,
    username:this.username,
    room:this.room,
    created_at:firebase.firestore.Timestamp.fromDate(now)
  }
  // save doc
  const response=await  this.chat.add(chat)
  return response;
}
getChat(callback){
  this.unsub=this.chat
  .where('room','==',this.room).orderBy('created_at')
  .onSnapshot(snapshot=>{
    snapshot.docChanges().forEach(change=>{
      if(change.type==='added'){
        //update ui
        callback(change.doc.data())
      }
    })
  })
}
updateName(username){
  this.username=username;
  localStorage.setItem('username',username)
}
updateRoom(room){
  this.room=room;
  console.log('room updated')
  if(this.unsub){
    this.unsub();
  }

}

}


// setTimeout(()=>{
//   chatroom.updateRoom("gaming");
//   chatroom.updateName('yoshi')
//   chatroom.getChat((data)=>{
//     console.log(data);
//   })
//   chatroom.addChat('hey')
// },3000)