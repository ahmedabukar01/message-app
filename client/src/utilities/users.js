const moment = require('moment');

const users = [];

// getUser
 const saveUser = (name,room,id) => {
     const user = {name,room,id};
     users.push(user);

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
    const time = moment().format('h:mm a');
    console.log(time);
    const data = {...user, text}
    return {
        user,
        text,
        time: 'wooo'
    }
}

module.exports = {
    saveUser,
    getUser,
    allUsers,
    msgFormat
}