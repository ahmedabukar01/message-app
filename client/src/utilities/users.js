
const users = [];

// getUser
 const saveUser = (name,room,id) => {
     users.push({name,room,id});

}

// get user
 const getUser = (id)=>{
    return users.find(user=> user.id === id);
}

// all users
const allUsers = ()=>{
    return users;
}

// message format
const msgFormat = (user,text)=>{
  return {
      user,
      text,
      time: 'waa'
  }
}

// remove user
const removeUser = (id)=>{
    const index = users.splice(id,1);
    
    if(index !== -1){
        return index;
    }
}

module.exports = {
    saveUser,
    getUser,
    allUsers,
    msgFormat,
    removeUser
}