const users=[

  {name:'mario', premium:true},
  {name:'luigi', premium:false},
  {name:'yoshi', premium:true},
  {name:"chun-li",premium:false}



]
export const getPrimUsers=(users)=>users.filter(user=>user.premium)

export default users;