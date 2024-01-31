require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], (Map, MapView, FeatureLayer) => {
    const map = new Map({
        basemap: "dark-gray"
    });

    const view = new MapView({
        container: "viewDiv",
        map: map,
        extent: {
            xmin: -9177811,
            ymin: 4247000,
            xmax: -9176791,
            ymax: 4247784,
            spatialReference: 102100
        }
    });

    /********************
     * Add feature layers
     ********************/
    const featureLayer1 = new FeatureLayer({
        url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_Major_Cities_/FeatureServer/0"
    });

    const featureLayer2 = new FeatureLayer({
        url: "https://services2.arcgis.com/I9cUOJUZvdGAJncI/arcgis/rest/services/Find_Locations_in_USA_Major_Cities/FeatureServer/0"
    });

    map.add(featureLayer1);
    map.add(featureLayer2);
});
