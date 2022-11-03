(function() {

var timeSeconds = 0;

var timestampDivList = Object.entries(document.querySelectorAll("ytd-playlist-video-list-renderer ytd-playlist-video-renderer ytd-thumbnail-overlay-time-status-renderer span")).map(item=> item[1].innerText)
    
for(var i = 0; i < timestampDivList.length; i++) {

	var timeParts = timestampDivList[i].split(":");

	var seconds = (timeParts[0] * 60) + parseInt(timeParts[1]);
	
	timeSeconds += seconds;

}

var hours = (timeSeconds / 60) / 60;
var minutes = (timeSeconds / 60) % 60;
var seconds = (timeSeconds % 60); 

var result = parseInt(hours) + ":" + parseInt(minutes) + ":" + parseInt(seconds);

alert(result);

})();
