const users = [];

// getUser
 const saveUser = (name,room,id) => {
     const user = {name,room,id};
     users.push(user);
     msgFormat(user,'waaw');

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
const msgFormat = (user,msg)=>{
    const data = {...user, msg}
    return data;
}

module.exports = {
    saveUser,
    getUser,
    allUsers,
    msgFormat
}