var map;
function initMap() {
	var storeLocation = {lat: 34.1031131, lng: -118.326343};

	map = new google.maps.Map(document.getElementById('hplus-map'), {
		'center' : storeLocation,
		'zoom' : 12,
		'mapTypeId' : google.maps.MapTypeId.ROADMAP,
		'draggable' : false,
		'scrollwheel' : false
	});
	
	var popupContent = 'H+ Sport<br>';
	    popupContent += '1750 Vine St<br>';
	    popupContent += 'Los Angeles, CA';
	
	var infowindow = new google.maps.InfoWindow({
		content: popupContent
	});
	
	var marker = new google.maps.Marker({
		'position': storeLocation,
		'map': map,
		'title': 'hplus sport in Los Angeles (actually Capitol Records in real life)'
	});
	
	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});
}