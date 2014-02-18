//TODO debug
function centerOnPath(path,map) {
	var maxLat = path[0];
	var minLat = path[0];
	var maxLng = path[0];
	var minLng = path[0];

	for(index = 1; index < path.length; index++){
		alert(path[0].lat);
		if(path[index].lat > path[index-1].lat){
			maxLat = path[index];
		}
		
		if(path[index].lat < path[index-1].lat){
			minLat = path[index];
		}
		
		if(path[index].lng > path[index-1].lng){
			maxLng = path[index];
		}
		
		if(path[index].lng < path[index-1].lng){
			minLng = path[index];
		}
		else{
			break;
		}
	}
	
	var SW = new google.maps.LatLng(minLat,minLng);
	var NE = new google.maps.LatLng(maxLat,maxLng);
	
	var bounds = new google.maps.LatLngBounds(SW, NE);
	map.fitBounds(bounds);
}

function RouteControl(controlDiv, map) {
  // Set CSS styles for the DIV containing the control
  // Setting padding to 5 px will offset the control
  // from the edge of the map
  controlDiv.style.padding = '5px';

  // Set CSS for the control border
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = 'white';
  controlUI.style.borderStyle = 'solid';
  controlUI.style.borderWidth = '2px';
  controlUI.style.cursor = 'pointer';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to toggle Route 1 visibility';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior
  var controlText = document.createElement('div');
  controlText.style.fontFamily = 'Arial,sans-serif';
  controlText.style.fontSize = '12px';
  controlText.style.paddingLeft = '4px';
  controlText.style.paddingRight = '4px';
  controlText.innerHTML = '<b>Palacio</b>';
  controlUI.appendChild(controlText);

  // Setup the click event listeners
  google.maps.event.addDomListener(controlUI, 'click', function() {
  	var Route = line;
  	
    if(Route.getVisible()){ 
      Route.setVisible(false);
      var pathlength = google.maps.geometry.spherical.computeLength(Palacio);
      var kms = Math.round(pathlength/1000 * 100) / 100;
      var miles = Math.round(pathlength/1609 * 100) / 100;
      //alert('Path length is supposedly: '+miles+' miles ('+kms+' kilometers). ');
   }
   else{
      Route.setVisible(true);
      centerOnPath(Route.getPath(),map);
      }
  });
}

function Route2Control(controlDiv, map) {
  controlDiv.style.padding = '5px';

  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = 'white';
  controlUI.style.borderStyle = 'solid';
  controlUI.style.borderWidth = '2px';
  controlUI.style.marginTop = '4px';
  controlUI.style.cursor = 'pointer';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to toggle Route 2 visibility';
  controlDiv.appendChild(controlUI);

  var controlText = document.createElement('div');
  controlText.style.fontFamily = 'Arial,sans-serif';
  controlText.style.fontSize = '12px';
  controlText.style.paddingLeft = '4px';
  controlText.style.paddingRight = '4px';
  controlText.innerHTML = '<b>Interno</b>';
  controlUI.appendChild(controlText);

  google.maps.event.addDomListener(controlUI, 'click', function() {
  	var Route = line2;
  	getPathLength(Interno);
    if(Route.getVisible()){ 
      Route.setVisible(false);
   }
   else{
      Route.setVisible(true);
      centerOnPath(Route.getPath(),map);
      }
  });
}

function Route3Control(controlDiv, map) {
  controlDiv.style.padding = '5px';

  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = 'white';
  controlUI.style.borderStyle = 'solid';
  controlUI.style.borderWidth = '2px';
  controlUI.style.marginTop = '4px';
  controlUI.style.cursor = 'pointer';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to toggle Route 3 visibility';
  controlDiv.appendChild(controlUI);

  var controlText = document.createElement('div');
  controlText.style.fontFamily = 'Arial,sans-serif';
  controlText.style.fontSize = '12px';
  controlText.style.paddingLeft = '4px';
  controlText.style.paddingRight = '4px';
  controlText.innerHTML = '<b>Terrace</b>';
  controlUI.appendChild(controlText);

  google.maps.event.addDomListener(controlUI, 'click', function() {
  	var Route = line3;
    if(Route.getVisible()){ 
      Route.setVisible(false);
   }
   else{
      Route.setVisible(true);
      centerOnPath(Route.getPath(),map);
      }
  });
}

function Route4Control(controlDiv, map) {
  controlDiv.style.padding = '5px';

  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = 'white';
  controlUI.style.borderStyle = 'solid';
  controlUI.style.borderWidth = '2px';
  controlUI.style.marginTop = '4px';
  controlUI.style.cursor = 'pointer';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to toggle Route 4 visibility';
  controlDiv.appendChild(controlUI);

  var controlText = document.createElement('div');
  controlText.style.fontFamily = 'Arial,sans-serif';
  controlText.style.fontSize = '12px';
  controlText.style.paddingLeft = '4px';
  controlText.style.paddingRight = '4px';
  controlText.innerHTML = '<b>Darlington</b>';
  controlUI.appendChild(controlText);

  google.maps.event.addDomListener(controlUI, 'click', function() {
  	var Route = line4;
    if(Route.getVisible()){ 
      Route.setVisible(false);
   }
   else{
      Route.setVisible(true);
      centerOnPath(Route.getPath(),map);
      }
  });
}

function Route5Control(controlDiv, map) {
  controlDiv.style.padding = '5px';

  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = 'white';
  controlUI.style.borderStyle = 'solid';
  controlUI.style.borderWidth = '2px';
  controlUI.style.marginTop = '4px';
  controlUI.style.cursor = 'pointer';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to toggle Route 5 visibility';
  controlDiv.appendChild(controlUI);

  var controlText = document.createElement('div');
  controlText.style.fontFamily = 'Arial,sans-serif';
  controlText.style.fontSize = '12px';
  controlText.style.paddingLeft = '4px';
  controlText.style.paddingRight = '4px';
  controlText.innerHTML = '<b>Zoologico</b>';
  controlUI.appendChild(controlText);

  google.maps.event.addDomListener(controlUI, 'click', function() {
  	var Route = line5;
    if(Route.getVisible()){ 
      Route.setVisible(false);
   }
   else{
      Route.setVisible(true);
      centerOnPath(Route.getPath(),map);
      }
  });
}

function DefaultViewControl(controlDiv, map) {
  controlDiv.style.padding = '5px';

  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = 'white';
  controlUI.style.borderStyle = 'solid';
  controlUI.style.borderWidth = '2px';
  controlUI.style.marginTop = '8px';
  controlUI.style.cursor = 'pointer';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to set map to default view';
  controlDiv.appendChild(controlUI);

  var controlText = document.createElement('div');
  controlText.style.fontFamily = 'Arial,sans-serif';
  controlText.style.fontSize = '12px';
  controlText.style.paddingLeft = '4px';
  controlText.style.paddingRight = '4px';
  controlText.innerHTML = '<b>Default View</b>';
  controlUI.appendChild(controlText);

  google.maps.event.addDomListener(controlUI, 'click', function() {
  	map.setCenter(UPRM);
  	map.setZoom(17);
  });
}