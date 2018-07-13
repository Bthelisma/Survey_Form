var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');



// use it!
app.use(session({ secret: 'codingdojorocks' }));
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(request, response) {
    response.render("index");
})



app.post('/back', function(request, response) {
    response.redirect("/");
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);

    // all the server socket code goes in here
    socket.on("posting_form", function(data) {
        console.log(`Someone clicked a button!`);
        console.log(data);
        //EMIT
        socket.emit('updated_message', data);
    });

    socket.on("random_number", function(number) {
        console.log(`number: ${number}`);
        socket.emit('random_number', number);
    })



})