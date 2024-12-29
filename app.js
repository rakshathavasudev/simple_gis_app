// Initialize the map
const map = L.map('map').setView([0, 0], 2);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);


// Sample GeoJSON Layer
const sampleGeoJSON = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": { "name": "Point A" },
            "geometry": { "type": "Point", "coordinates": [100, 0] }
        }
    ]
};

// Add GeoJSON to the map
L.geoJSON(sampleGeoJSON, {
    onEachFeature: (feature, layer) => {
        if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
        }
    }
}).addTo(map);


map.on('click', function (e) {
    alert(`You clicked the map at ${e.latlng}`);
});


fetch('http://localhost:5000/upload', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(yourGeoJSONData)
})
.then(response => response.json())
.then(data => console.log(data));
