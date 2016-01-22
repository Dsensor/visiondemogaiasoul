/**
* Self Server
*
* Start node.js  Server
*
* @package    Train Timer part of open sport project
* @copyright  Copyright (c) 2012 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
* @version    $Id$
*/
var http = require("http");
var url = require("url");
var  sio = require('socket.io');
var fs = require('fs');
var util = require('util');
var EventEmitter = require('events').EventEmitter;
var settings = require("./settings");
//var couchDB = require("./couchdb");
//var authom = require("authom");
//var serialport = require("serialport");	// include the serialport library
//var SerialPort = serialport.SerialPort;	// make a local instance of serial
//var dgram = require('dgram');
//var buf= require('buffer');
var tcpmanager = require('./peertopeer.js');
/**
* controls start of node.js server
* @method start
*
*/
function start(route, handle) {

	var couchin = {};	
	var tcplive = {};	
	couchin = new settings();
	tcplive = new tcpmanager();		
		
	var app = http.createServer(onRequest).listen(8822);
		
	function onRequest(request, response) {
	
		var pathname = url.parse(request.url).pathname;
  
//console.log("Request for " + pathname + " received.");
		route(handle, pathname, response, request, couchin);
	}
	
	// data for live two way socket data flow for real time display everywhere
	var io = sio.listen(app);
	
	
	io.sockets.on('connection', function (socket, server) {

		socket.emit('startnews', 'localNWserver');
			
		tcplive.on("peerMessage", function(peerMessage) {
console.log('peer messge reached server');	
console.log(peerMessage);			
			socket.emit('peerUImessage', peerMessage);
		
		});			
	});

		
} // closes start function 


exports.start = start;
