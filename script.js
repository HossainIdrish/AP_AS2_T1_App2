require([
    "esri/views/MapView", 
    "esri/WebMap", 
    "esri/layers/FeatureLayer"
], function(MapView, WebMap, FeatureLayer) {
    const webmap = new WebMap({
        portalItem: {
            id: "630750de135f4a7fbd2acfc257ae0e2f" // ID of your existing WebMap
        }
    });

    const additionalLayer = new FeatureLayer({
        portalItem: {
            id: "662747c89e864d448b6060a206e0fc68" // ID of the new layer you want to add
        }
    });

    webmap.load().then(() => {
        webmap.add(additionalLayer); // Add the new layer after the WebMap has loaded
    });

    const view = new MapView({
        container: "viewDiv", // Reference to the DOM node that will contain the map
        map: webmap // Reference to the WebMap object
    });
});

