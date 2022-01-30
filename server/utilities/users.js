const moment = require('moment');

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
      time: moment().format('h:mm a')
  }
}

// remove user
const removeUser = (id)=>{
    const index = users.find(user=>user.id === id);

    if(index !== -1){
        return users.splice(index,1)[0];
    }
}

module.exports = {
    saveUser,
    getUser,
    allUsers,
    msgFormat,
    removeUser
}