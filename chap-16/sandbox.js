const list=document.querySelector('ul')
const form=document.querySelector('form')
const button=document.querySelector('button')




const addRecipe=(recipe,id)=>{
  let time=recipe.created_at.toDate()
  let html=`
    <li data-id="${id}">
    <div>${recipe.title}</div>
    <div>Created at-${time}</div>
    <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
   `
   list.innerHTML +=html
}





// // get collection
// db.collection('recipes').get().then((snapshot)=>{
//   // data
//   // console.log(snapshot.docs[0].data())
//   snapshot.docs.forEach(doc=>{
//     // console.log(doc.id)
    
//     addRecipe(doc.data(),doc.id)
//   })
// }).catch(err=>{
//   console.log(err);
  
// })
const deleteRecipe = (id) => {
  const recipes = document.querySelectorAll('li');
  recipes.forEach(recipe => {
    if(recipe.getAttribute('data-id') === id){
      recipe.remove();
    }
  });
};

// real-time listener
const unsub=db.collection('recipes').onSnapshot(snapshot => {
  console.log(snapshot.docChanges());
  snapshot.docChanges().forEach(change => {
    const doc = change.doc;
    if(change.type === 'added'){
      // console.log(doc);
      addRecipe(doc.data(), doc.id)
    } else if (change.type === 'removed'){
      deleteRecipe(doc.id);
    }
  });
});

// unsub from changes
button.addEventListener('click',()=>{
  unsub()
  console.log('unsubbed from changes')
})


// add documents

form.addEventListener('submit',(e)=>{
  e.preventDefault();
 
  const now=new Date();
  const recipe={
    title:form.recipe.value,
    created_at:firebase.firestore.Timestamp.fromDate(now)
  };
  db.collection('recipes').add(recipe).then(()=>{
    console.log('recipe added')
  }).catch(err=>console.log('error in adding recipe'))
})

// delete data

list.addEventListener('click',(e)=>{

  if(e.target.tagName==='BUTTON'){
    const id=e.target.parentElement.getAttribute('data-id')
    // console.log(id)
    db.collection('recipes').doc(id).delete().then(()=>{
      console.log('recipe deleted')
    }).catch(e=>console.log(e))
  }



})