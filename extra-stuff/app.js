
function getTrolleyLocation(id){
	$.mobile.loading("show");
	$.ajax({
		url : "http://localhost:8888/trolley/"+ id,
		method: 'get',
		success : function(data, textStatus, jqXHR){
			var troll = data.trolley;
			console.log(troll);
			$.mobile.loading("hide");
		},
		error: function(data, textStatus, jqXHR){
			$.mobile.loading("hide");
			alert("You have no trolleys :(");
		}
	});	
};

function getTrolleyLocations(){
	//$.mobile.loading("show");
	$.ajax({
		url : "http://localhost:8888/trolleys/",
		method: 'get',
		success : function(data, textStatus, jqXHR){
			var trolleyList = data.trolleys;
			var trolley;

			for (var i=0; i < trolleyList.length; ++i){
				trolley = trolleyList[i];
				list.push(trolley);
				console.log(trolley);
			}
			
			$.mobile.loading("hide");
		},
		error: function(data, textStatus, jqXHR){
			$.mobile.loading("hide");
			alert("You have no trolleys :(");
		}
	});	
};
