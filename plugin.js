import something from './lib.js'


windyInit({}, windyAPI => {
  const { map } = windyAPI;

  const geoJsonData = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": { "name": "Test Polygon" },
        "geometry": {
          "type": "Polygon",
          "coordinates": [[[90, 20], [95, 20], [95, 25], [90, 25], [90, 20]]]
        }
      }
    ]
  };

  const geoJsonLayer = L.geoJSON(geoJsonData, {
    style: {
      color: "#FF0000",
      weight: 2,
      opacity: 0.65
    }
  }).addTo(map);

  console.log("GeoJSON overlay loaded on Windy.");
});
