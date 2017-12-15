const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3000;

const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newEmail', {
    from: 'jayant@example.com',
    text: 'hey what\'s going on',
    createAt: 123
  });

  socket.emit('newMessage', {
    from: 'jayant',
    text: 'you got a new message',
    createAt: 456
  });

  socket.on('createEmail', (newEmail) => {
    console.log('createEmail ', newEmail);
  });

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage ', newMessage);
  });

  socket.on('disconnect', (socket) => {
    console.log('User was disconnected');
  });
});



server.listen(port, () => {
  console.log('Started on port : ', port);
})


