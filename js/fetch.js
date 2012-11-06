/* fetch.js */


var stream = [];

function fetch(){
	// Fetch the user stream
	FB.api('/me/home', function(response) {
		stream = response.data;
		renderStream(stream);
	});
}

/*
 * yqlQuery
 * Takes in a URL to scrape,
 * XPATH definining page scope, and
 * SUCCESS function callback.
 */
function yqlQuery(url, xpath, success){
	$.ajax({
	  url : 'http://query.yahooapis.com/v1/public/yql',
	  jsonp : 'callback',
	  dataType : 'jsonp',
	  data : {
	  	q : 'select * from html where url="' + url + '" and xpath="' + xpath + '"',
	    format : 'json'
	  },
	  success : function(data){ return success(data);}
	});
}