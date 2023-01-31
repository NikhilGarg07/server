const io = require('socket.io')(8000,{
    cors:{
        origin: ['http://localhost:3000']
    }
});

io.on('connection', (socket)=>{
    console.log('Server Connected',socket.id);
    socket.on('join-room',(roomId, userId)=>{
        socket.join(roomId);
    })
});