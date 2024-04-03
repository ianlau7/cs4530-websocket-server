const { Server } = require('socket.io');
const http = require('http');

const server = http.createServer();
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('message', (message) => {
    console.log('Received:', message);

    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`WebSocket server listening on port ${PORT}`);
});