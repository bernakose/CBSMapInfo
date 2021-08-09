var raster = new ol.layer.Tile({
    source: new ol.source.OSM()
});

var source = new ol.source.Vector();

var vector = new ol.layer.Vector({
    source: source,
    style: new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.2)'
        }),
        stroke: new ol.style.Stroke({
            color: '#ffcc33',
            width: 2
        }),
        image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({
                color: '#ffcc33'
            })
        })
    })
});

var map = new ol.Map({
    layers: [raster, vector],
    target: 'map',
    view: new ol.View({
        center: [28.96, 41.03],
        zoom: 4,
        projection: "EPSG:4326"

    })

});


var typeSelect = document.getElementById('type');

var draw; // global so we can remove it later
function addInteraction() {
    var value = typeSelect.value;
    if (value !== 'None') {
        var geometryFunction, maxPoints;
       
        draw = new ol.interaction.Draw({
            source: source,
            type: /** @type {ol.geom.GeometryType} */ (value),
            geometryFunction: geometryFunction,
            maxPoints: maxPoints
        });

        draw.on('drawend', function (event) {
            debugger;
            var feature = event.feature;

            if (typeSelect.value === "Point") {


                $("#KapiEkle").modal('show');

            } else {

                $("#MahalleEkle").modal('show');
            }

        });


        map.addInteraction(draw);
    }
}


/**
 * Let user change the geometry type.
 * @param {Event} e Change event.
 */
typeSelect.onchange = function (e) {
    map.removeInteraction(draw);
    addInteraction();
};

addInteraction();
