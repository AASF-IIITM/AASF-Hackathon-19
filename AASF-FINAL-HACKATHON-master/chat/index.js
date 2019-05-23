var app = require('express')();
var http = require('http').Server(app);
var socket = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
//Server receives a new message (in data var) from the client.
   socket.on('message', function (data) {
      var room = rooms[socket.id];
      //Server sends the message to the user in room
      socket.broadcast.to(room).emit('new message', {
      username: socket.username,
      message: data
    });
 });


 // when the client emits 'add user', this listens and executes (When user enters ENTER)
  socket.on('add user', function (username) {
    if (addedUser) return;
//Own
names[socket.id] = username;//save username in array
allUsers[socket.id] = socket; // add current user to all users array


// we store the username in the socket session for this client
socket.username = username;
++numUsers;
addedUser = true;
socket.emit('login', {
  numUsers: numUsers
});
// echo globally (all clients) that a person has connected
socket.broadcast.emit('user joined', {
  username: socket.username,
  numUsers: numUsers
});
});
http.listen(3000, function(){
  console.log('listening on *:3000');
});
 