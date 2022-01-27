const users = [];

// getUser
 const saveUser = (name,room,id) => {
     const user = {name,room,id};
     users.push(user);

}

// get user
 const getUser = (id)=>{
    const user = users.filter(user=> user.id === id);
    return user;
}

module.exports = {
    saveUser,
    getUser,
}