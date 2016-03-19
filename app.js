var Client = require('node-xmpp-client');

var client = new Client(require('./auth.json'));

client.on('online', function() {
	console.log("We're online!");
});

client.on('stanza', function(stan) {
	console.dir(stan);
});
