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

module.exports = {
    saveUser,
    getUser,
    allUsers
}