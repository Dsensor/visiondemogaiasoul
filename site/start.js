/**
*  jQuery listen for clicks and interaction	
* 
*/	
$(document).ready(function(){

	liveSettings = {};
	liveSettings.cloudIP = "http://localhost:8822"; //"http://192.168.1.44:8881";
	liveSettings.localIP = "http://localhost:8822";//"http://www.mepath.co.uk:8887";//"http://localhost:8887";  //"http://192.168.1.44:8881";	
	liveSettings.localURL = "http://localhost/ll/selfengine/src/index.html";	
	

	// connect to socket.io
	var socketpi = io.connect(liveSettings.localIP );
	
	socketpi.emit('jumpit', 'cors direct to local server');
	/*
	* listening of context Display Data
	*/
	socketpi.on('localreply', function (contextdata) {
console.log('live event in');
		$("#socketreturn").text(contextdata);
		socketpi.emit('jumpit2', 'TWO cors direct to local server');
		
	});

	
	
});