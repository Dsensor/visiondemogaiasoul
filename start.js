/**
*  jQuery listen for clicks and interaction	
* 
*/	
$(document).ready(function(){

	liveSettings = {};
	liveSettings.cloudIP = "http://localhost:8822"; //"http://192.168.1.44:8881";
	liveSettings.localIP = "http://localhost:8822";//"http://www.mepath.co.uk:8887";//"http://localhost:8887";  //"http://192.168.1.44:8881";	
	liveSettings.localURL = "http://localhost/dsensor/visionarydemogaiasoul/src/index.html";	
		
	$("a").click(function(e) {
		e.preventDefault(e);
		idclick = $(this).attr("id");
console.log(idclick);
		switch(idclick){

			case "gaiasoul-me-view": 

				$("#being").show();
				$("#ourworld").hide();
				$("#stream").hide();
				$("#mindmap").hide();	
				$("#ptop-view").hide();
			
			break;

			case "gaiasoul-ourworld-view": 
				$("#ourworld").show();
				$("#being").hide();
				$("#stream").hide();
				$("#mindmap").hide();			
				$("#ptop-view").hide();
			
			break;
			
			case "gaiasoul-stream-view": 

				$("#stream").show();
				$("#being").hide();
				$("#ourworld").hide();
				$("#mindmap").hide();		
				$("#ptop-view").hide();
				
				var streamSummary = '';
				
				streamSummary += '<section class="life-stream" id="context-life-stream"></section>';

				$("#stream-dmaps ol").append(streamSummary);
				
				// context
				
				//life
				var DmapsLife = '';
				
				DmapsLife += '<section id="dmaps-order">';
				DmapsLife += '<ul>';
				DmapsLife += '	<li>';
				DmapsLife += '		LIVE  Activty and Oxygen Swimming  by ABOYNEJAMES contract 23228989 Prection Score  89%  Network score 22%  History';
				DmapsLife += '	</li>';
				DmapsLife += '	<li>';
				DmapsLife += '		SAMPLING  Sleep and Activity Levls by JOSEPHPALO contract 5545455 Prection Score  59%  Network score 12%  History';
				DmapsLife += '	</li>';
				DmapsLife += '	<li>';
				DmapsLife += '		SAMPLING  Water retension after rainfall  by GREID contract 30944 Prection Score  49%  Network score 9%  History';
				DmapsLife += '	</li>';	
				DmapsLife += '	<li>';
				DmapsLife += '		LIVE  Activty and Oxygen Swimming  by ABOYNEJAMES contract 23228989 Prection Score  89%  Network score 22%  History';
				DmapsLife += '	</li>';
				DmapsLife += '	<li>';
				DmapsLife += '		COMPUTION  Sleep and Activity Levls by JOSEPHPALO contract 5545455 Prection Score  59%  Network score 12%  History';
				DmapsLife += '	</li>';
				DmapsLife += '	<li>';
				DmapsLife += '		SAMPLING  Water retension after rainfall  by GREID contract 30944 Prection Score  49%  Network score 9%  History';
				DmapsLife += '	</li>';	
				DmapsLife += '	<li>';
				DmapsLife += '		LIVE  Activty and Oxygen Swimming  by ABOYNEJAMES contract 23228989 Prection Score  89%  Network score 22%  History';
				DmapsLife += '	</li>';
				DmapsLife += '	<li>';
				DmapsLife += '		COMPUTATION  Activty and Oxygen Swimming  by ABOYNEJAMES contract 23228989 Prection Score  89%  Network score 22%  History';
				DmapsLife += '	</li>';					
				DmapsLife += '</ul>';
				DmapsLife += '</section>';
				
				$("#context-life-stream").html(DmapsLife);


			
			break;
			
			case "gaiasoul-mindmap-view": 

				$("#mindmap").show();
				$("#being").hide();
				$("#ourworld").hide();
				$("#stream").hide();				
				$("#ptop-view").hide();
				mainstart();
				
			break;

			case "sensor-list": 

				$("#sensor-data").show();
				$("#dmap-view").hide();
				$("#mindmap").hide();
				$("#being").hide();
				$("#ourworld").hide();
				$("#stream").hide();	
				$("#ptop-view").hide();
				
			break;

			case "dmap-list": 

				$("#dmap-view").show();
				$("#sensor-data").hide();
				$("#mindmap").hide();
				$("#being").hide();
				$("#ourworld").hide();
				$("#stream").hide();	
				$("#ptop-view").hide();
				
				var DmapsLive = '';
				
				DmapsLive += '<section id="dmaps-order">';
				DmapsLive += '<ul>';
				DmapsLive += '	<li>';
				DmapsLive += '		LIVE  Activty and Oxygen Swimming  by ABOYNEJAMES contract 23228989 Prection Score  89%  Network score 22%  History';
				DmapsLive += '	</li>';
				DmapsLive += '	<li>';
				DmapsLive += '		SAMPLING  Sleep and Activity Levels by ABOYNEJAMES contract 5545455 Prection Score  59%  Network score 12%  History';
				DmapsLive += '	</li>';
				DmapsLive += '	<li>';
				DmapsLive += '		SAMPLING  Water retension after rainfall  by ABOYNEJAMES contract 30944 Prection Score  49%  Network score 9%  History';
				DmapsLive += '	</li>';					
				DmapsLive += '</ul>';
				DmapsLive += '</section>';
				
				$("#dmap-live-list").html(DmapsLive);
			
			break;
			
			case "dmap-add": 

				$("#dmap-add-new").show();
				
				var newformdmap = $("#dmap-template-form").html();
				$("#dmap-live-list").html(newformdmap);
				
			break;	
			
			case "sensor-data-add": 

				$("#sensor-data-add-new").show();
				
				var newformsensor = $("#sensor-data-template-form").html();
				$("#sensor-data-add-new").html(newformsensor);
				
			break;				
			
			case "ptop-list":
				$("#ptop-view").show();
				$("#dmap-view").hide();
				$("#sensor-data").hide();
				$("#mindmap").hide();
				$("#being").hide();
				$("#ourworld").hide();
				$("#stream").hide();				
						
			break;
			
		}
	});
		
	// connect to socket.io
	var socketpi = io.connect(liveSettings.localIP );
	
	socketpi.emit('jumpit', 'cors direct to local server');
	/*
	* listening of context Display Data
	*/	
	socketpi.on('startnews', function (contextdata) {
console.log('live event in');
		$("#socketreturn").text(contextdata);
		socketpi.emit('jumpit2', 'TWO cors direct to local server');
		
	});

	socketpi.on('peerUImessage', function (peerdata) {
console.log('TCP data');
		$("#tcpreturn").text(peerdata);
		
	});	
	
});