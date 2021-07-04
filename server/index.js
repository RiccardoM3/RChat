const { Server } = require("socket.io");
const server = new Server(3001, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["Access-Control-Allow-Origin", "Access-Control-Allow-Methods"]
    }
  });

server.on("connection", function(socket) {
  console.log("user connected");

  socket.on('client_message', (message) => {
      server.sockets.emit('server_message', message);
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});