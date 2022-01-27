const users = [];

// getUser
 const saveUser = (name,room,id) => {
    users.push({name,room,id});
}

// get user
 const getUser = (id)=>{
    return users.filter(user => user.id === id);
}

module.exports = {
    saveUser,
    getUser,
}