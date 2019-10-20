// London
let mapID = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoibmlzZmUiLCJhIjoiY2sxamptb3E0MXVkZTNjcW0zenFidDZtYiJ9.33EJv9nydb1e8lE8erN3lg'
}).addTo(mapID);

// Sri Lanka
let sriLanka = L.map('lanka').setView([7.612026, 80.836872], 7);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoibmlzZmUiLCJhIjoiY2sxamptb3E0MXVkZTNjcW0zenFidDZtYiJ9.33EJv9nydb1e8lE8erN3lg'
}).addTo(sriLanka);

// Adding a marker to the map
let mapPointLondon = L.marker([51.5, -0.09]).addTo(mapID);

// Directions to the circle
let mapCircle = L.circle([51.508, -0.11], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 500
}).addTo(mapID);

// Adding a polygon to the map
let mapPointSriLanka = L.marker([7.62, 80.83]).addTo(sriLanka);

// Directions to the polygon
let mapPolygon = L.polygon([
	[7.612, 80.82],
	[7.613, 80.81],
	[7.614, 80.80]
]).addTo(sriLanka);
