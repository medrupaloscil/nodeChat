var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
	res.sendFile(__dirname+'/views/index.html');
});

io.on('connection', function(socket) {
	socket.emit('test', 'Bienvenue !');
	io.emit('newMessage', 'Un nouvel utilisateur entre dans le salon');
	socket.emit('newMessage', 'Bienvenue à toi, jeune utilisateur !');
	socket.on('sendMessage', function(value) {
		io.emit('newMessage', value);
	})
});

http.listen(3000, function() {

});