var app = require('express')();
var http = require('http').Server(app);

var io = require('socket.io')(http);


app.get('/', function(req, res) {
   res.sendFile(__dirname + '/index.html');
});

// var roomno = 1;
// io.on('connection', function(socket) {
   
//    //Increase roomno 2 clients are present in a room.
//    if(io.nsps['/'].adapter.rooms["room-"+roomno] && io.nsps['/'].adapter.rooms["room-"+roomno].length > 3) roomno++;
//    socket.join("room-"+roomno);

//    //Send this event to everyone in the room.
//    io.sockets.in("room-"+roomno).emit('connectToRoom', "You are in room no. "+roomno);
// })

var nsp = io.of('/my-namespace');
nsp.on('connection', function(socket) {
   console.log('someone connected');
   nsp.emit('hi', 'Hello everyone!');
});


//broadcast
// var clients = 0;
// io.on('connection', function(socket) {
//    clients++;
//    socket.emit('newclientconnect',{ description: 'Hey, welcome!'});
//    socket.broadcast.emit('newclientconnect',{ description: clients + ' clients connected!'})
//    socket.on('disconnect', function () {
//       clients--;
//       socket.broadcast.emit('newclientconnect',{ description: clients + ' clients connected!'})
//    });
// });

//broadcast as a function
// var clients = 0;
// io.on('connection', function(socket) {
//    clients++;
//    io.sockets.emit('broadcast',{ description: clients + ' clients connected!'});
//    socket.on('disconnect', function () {
//       clients--;
//       io.sockets.emit('broadcast',{ description: clients + ' clients connected!'});
//    });
// });



// //Whenever someone connects this gets executed
// io.on('connection', function(socket) {
//    console.log('A user connected');

//    //Send a message after a timeout of 4seconds
//    setTimeout(function() {
//       socket.send('Sent a message 4seconds after connection!');
//    }, 4000);

//    //Send a message when 
//    setTimeout(function() {
//       //Sending an object when emmiting an event
//       socket.emit('testerEvent', { description: 'A custom event named testerEvent!'});
//    }, 4000);

//    socket.on('clientEvent', function(data) {
//       console.log(data);
//    });

//    Whenever someone disconnects this piece of code executed
//    socket.on('disconnect', function () {
//       console.log('A user disconnected');
//    });
// });

http.listen(3000, function() {
   console.log('listening on *:3000');
});