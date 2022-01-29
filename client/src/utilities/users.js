
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

module.exports = {
    saveUser,
    getUser,
    allUsers,
    msgFormat
}