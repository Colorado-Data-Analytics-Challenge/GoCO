 $(document).ready(function(){
	mapboxgl.accessToken = 'pk.eyJ1IjoiYm9vbnJzIiwiYSI6ImU2akxILW8ifQ.23xraUDFxllJ140GmY03vw';
	const map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/boonrs/cjpbhrqfb6ckj2qo3ncbqq6dj',
		center: [-105.549558, 38.999983],
		zoom: 6.0
	});

	// map.on('click', function (e) {
 //    var features = map.queryRenderedFeatures(e.point);
 //    document.getElementById('features').innerHTML = JSON.stringify(features, null, 2);
 //    features.forEach(function(feature) {
 //    	alert(JSON.stringify(feature.properties));
 //    });
	// });


	map.on('click', function(e) {
	  var features = map.queryRenderedFeatures(e.point);

	  if (!features.length) {
	    return;
	  }

	  var feature = features[0];

	  var popup = new mapboxgl.Popup({ offset: [0, -15] })
	    .setLngLat(feature.geometry.coordinates)
	    .setHTML('<h3>' + feature.properties.Operator + '</h3><p><b>Facility Name: </b>' + feature.properties.Facil_Name 
	    	+ '<br /><b>Latitude:</b>' + feature.properties.Latitude
	    	+ '<br /><b>Longitude:</b>' + feature.properties.Longitude+ '</p>')
	    .setLngLat(feature.geometry.coordinates)
	    .addTo(map);
	});
});
