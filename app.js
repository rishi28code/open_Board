
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@rishi28code 
arun496
/
my-pepboard
Public
Code
Issues
1
Pull requests
Actions
Projects
Security
Insights
my-pepboard/app.js /
@arun496
arun496 update
Latest commit 6c6670e on Sep 29, 2021
 History
 1 contributor
29 lines (24 sloc)  789 Bytes

const express = require("express"); // Access
const socket = require("socket.io");

const app = express(); //Initialized and server ready

app.use(express.static("public"));

let port = process.env.PORT || 5000;
let server = app.listen(port, () => {
    console.log("Listening to port" + port);
})

let io = socket(server);

io.on("connection", (socket) => {
    console.log("Made socket connection");
    // Received data
    socket.on("beginPath", (data) => {
        // data -> data from frontend
        // Now transfer data to all connected computers
        io.sockets.emit("beginPath", data);
    })
    socket.on("drawStroke", (data) => {
        io.sockets.emit("drawStroke", data);
    })
    socket.on("redoUndo", (data) => {
        io.sockets.emit("redoUndo", data);
    })
})
