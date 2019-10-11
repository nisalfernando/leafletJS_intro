let mapID = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoibmlzZmUiLCJhIjoiY2sxamptb3E0MXVkZTNjcW0zenFidDZtYiJ9.33EJv9nydb1e8lE8erN3lg'
}).addTo(mapID);

let sriLanka = L.map('lanka').setView([7.612026, 80.836872], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoibmlzZmUiLCJhIjoiY2sxamptb3E0MXVkZTNjcW0zenFidDZtYiJ9.33EJv9nydb1e8lE8erN3lg'
}).addTo(sriLanka);

// Adding a marker to the map
let mapPoint = L.marker([51.5, -0.09]).addTo(mapID);
