$(document).ready(function(){
	$("#search").click(function(){
		$("#search").hide();
		$("#query").removeAttr("display");
		$("#query").show();
	})
	$("#query").keyup(function(event){
		if(event.keyCode === 13){
			$("#results").empty();
			var request = document.getElementById("query").value;
			$.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=" + request + "&origin=*&callback=?", function(data){
				getLink(data);
			})
		}
	})
});

function getLink(data){
	var title = data[1];
	var description = data[2];
	var link = data[3];
	for(i = 0; i < data[3].length; i++){
		var pgDescription = '<a class="pgLink" href="' + link[i] + '"><h3>' + title[i] + '</h3><h4>' + description[i] + '</h4></a>';
		$("#results").append(pgDescription);
	}
};