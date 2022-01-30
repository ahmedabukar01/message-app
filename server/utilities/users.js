const moment = require('moment');

let users = [];

// getUser
 const saveUser = (name,room,id) => {
     users.push({name,room,id});
     console.log(users)

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
    users = users.filter(user=>user.id !== id);
}

module.exports = {
    saveUser,
    getUser,
    allUsers,
    msgFormat,
    removeUser
}