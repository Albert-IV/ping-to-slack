var auth = require('./auth.json');

var pingClient = require('./ping')(auth.ping);
var slackClient = require('./slack')(auth.slack);

pingClient.on('stanza', function(stan) {
	if( stan.attrs.type == "get" && stan.children[0].name == "ping" ) {
		console.log("This is a ping!")
	}

	if( stanza.is('ping') ) {
		console.log("stanza.is() a ping!")
	} else {
		console.log('stanza.is() not a ping! :( :( :( :(')
	}

	console.log(stanza.getChildText('body'))
});

