/**
* Self Sever
*
* deals peer to peer network, tcp, udp, kbuckets etc.
* @class peerTopeer
* @package    Self Engine opensource project
* @copyright  Copyright (c) 2012 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
* @version    $Id$
*/
var util = require('util');
var events = require("events");
var net = require('net');

var peerTopeer = function() {
console.log('peer to peer live class');
	events.EventEmitter.call(this);
	
	//this.dataEvent();
	this.TCPconnect();
	this.TCPserverlisten();
		

};

/**
* inherits core emitter class within this class
* @method 
*/
util.inherits(peerTopeer, events.EventEmitter);

/**
*  discover Plublic IP address
* @method publicIPaddress		
*
*/	
peerTopeer.prototype.publicIPaddress = function() {

	
	
};

/**
*  simple data vent
* @method dataEvent		
*
*/	
peerTopeer.prototype.dataEvent = function() {

	var localthis = this;
	
	setTimeout(function(){
console.log('data eevent test');
		localthis.emit("peerMessage", "peer");
	
	}, 9200);	
		
};
	
/**
*  connect a peer via TCP
* @method TCPconnect		
*
*/	
peerTopeer.prototype.TCPconnect = function() {
	
	// make method spec instance of this
	var localthis = this;
	
	setTimeout(function(){
			
		var client = net.connect({port: 3334, host: '192.168.1.64' }, function() {
		//var client = net.connect({port: 3333, host: '52.4.43.80' }, function() {
console.log('connected to server OF PEER WINDOWS 64!');  
		});

		client.on('data', function(data) {
console.log(localthis);		
console.log('UBUNTU peer  INCOMING message: ');		
console.log(data.toString());
			localthis.emit("peerMessage", data.toString());
			
			//client.write('ubuntu client reply to listening server 64\r\n');	
			client.end();
		});

		client.on('end', function() { 
console.log('disconnected from server');
		});


	}, 9000);	
	
	process.on('uncaughtException',function(err){
	   console.log('something terrible happened..')
	})

};

/**
*  TCP listening server connection
* @method TCPserverlisten		
*
*/	
peerTopeer.prototype.TCPserverlisten = function() {

	var server = net.createServer(function(c) { //'connection' listener
console.log('client connected');
	
		c.on('end', function() {
console.log('client disconnected');
		});
	
		c.write('hello from soul 66\r\n');
		c.pipe(c);
	});
	
	server.listen(3333, function() { //'listening' listener
console.log('server bound');
	});	
	
};

module.exports = peerTopeer;