var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createEmail', {
    to: 'jay@email.com',
    text: 'hello world from jay'
  });

  socket.emit('createMessage', {
    from: 'jay',
    text: 'hello from client'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newEmail', function (email) {
  console.log('New Email', email);
});

socket.on('newMessage', function (message) {
  console.log('New Message ', message);
});