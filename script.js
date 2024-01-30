require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer"
], function(Map, MapView, FeatureLayer) {
    var map = new Map({
        basemap: "dark-gray" // or any other basemap type
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        zoom: 4, // Adjust zoom level
        center: [15, 65] // Adjust center [longitude, latitude]
    });

    // Add feature layer
    var featureLayer = new FeatureLayer({
        // Use your own URL or a sample URL
        url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_Major_Cities_/FeatureServer/0"
    });

    map.add(featureLayer);
});
