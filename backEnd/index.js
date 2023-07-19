const express = require("express");
const app = express();
const http = require("http")
const {Server} = require('socket.io');
const cors = require('cors')
app.use(cors())
const server = http.createServer(app);
const port = 3001;

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
});


//listen to events
io.on("connection", (socket) => {
    console.log(`User connected ${socket.id}`)


    socket.on('messageFromClient', (data) => {
        io.emit('messageFromServer', data)
    })
  
})


server.listen(port, () => {
    console.log(`server is running on ${port}`)
})