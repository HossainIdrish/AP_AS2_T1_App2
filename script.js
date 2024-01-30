require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer"
], function(Map, MapView, FeatureLayer) {
    var map = new Map({
        basemap: "hybrid"
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        zoom: 5, 
        center: [25, 65] 
    });

    // Add feature layer
    var featureLayer = new FeatureLayer({
        // Use your own URL or a sample URL
        url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_Major_Cities_/FeatureServer/0"
    });

    map.add(featureLayer);
});
