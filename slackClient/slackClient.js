function slackClient(auth) {
	var Client = require('node-xmpp-client');
	var client = new Client(auth);

	client.on('online', function() {
		console.log("We're online!");
	});

	client.on('error', function(e) {
		console.log('Error with Slack client!');
		console.trace(e);
		process.exit(1);
	});

	client.on('disconnect', function() {
		console.log("Disconnected...");
	});

	client.on('reconnect', function () {
	  console.log('Reconnecting...');
	});

	return client
}

module.exports = slackClient;
