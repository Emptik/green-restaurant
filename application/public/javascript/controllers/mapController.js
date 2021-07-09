const mapController = () => {
    const map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM(),
            }),
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([3.0681546668057362, 50.62292635]),
            zoom: 15,
        }),
    });
};

mapController();
