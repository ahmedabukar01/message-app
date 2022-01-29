import {getSocket} from '../components/Home';
// user info
export const userInfo = (name,room) =>{
    const socket = getSocket();
    socket.emit('userInfo', {name,room});
}

// // send msg
// export const sendMessage = (msg) =>{
//     socket.emit('sendMsg', msg);
// }



// // recieve msg
// socket.on('getMsg',data=>{
    
// })


