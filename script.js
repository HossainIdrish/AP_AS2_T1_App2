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
        zoom: 4, 
        center: [-98.5795, 39.82839] 
    });

    // Add feature layer
    var featureLayer = new FeatureLayer({
    const featureLayer1 = new FeatureLayer({
      portalItem: {
        id: "630750de135f4a7fbd2acfc257ae0e2f" 
      }
    });
    map.add(featureLayer1);
   const featureLayer2 = new FeatureLayer({
      portalItem: {
        id: "8c2d6d7df8fa4142b0a1211c8dd66903"
      }
    });
    map.add(featureLayer2);
});

