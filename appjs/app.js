function getTrolleyLocation(id){
	$.mobile.loading("show");
	$.ajax({
		url : "http://localhost:8888/trolleys/"+ id,
		method: 'get',
		success : function(data, textStatus, jqXHR){
			var trolleyList = data.trolleys; //check later
			var list = $("#trolley-list");
			list.empty();
			var trolley;

			for (var i=0; i < trolleyList.length; ++i){
			trolley = trolleyList[i];
				list.push(trolley.lat, trolley.lng);
			}
			list.listview("refresh");	
			$.mobile.loading("hide");
		},
		error: function(data, textStatus, jqXHR){
			$.mobile.loading("hide");
			alert("You have no trolleys :(");
		}
	});	
};