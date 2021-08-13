var kapiCoordinate = "";
var mahalleCoordinate = "";
var bingMapKey = "AhAeGHHRWsEIGgfg0s-CgJHotjDx2t867Y1F0kXvIo900y9OnX2y2GCAN0iKx4I1";
var GlobalBaseLayer = null;
var map = null;

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
//$(document).ready(function () {
//    bingMapKey = "AhAeGHHRWsEIGgfg0s-CgJHotjDx2t867Y1F0kXvIo900y9OnX2y2GCAN0iKx4I1";
//    GlobalBaseLayer = new ol.layer.Tile({
//        preload: Infinity,
//        source: getBaseLayerSource()
//    });
//    map = new ol.Map({
//        target: 'map',
//        layers: [raster, vector,
//            GlobalBaseLayer
//        ],
//        view: new ol.View({
//            center: [4061987.4979090793, 4676100.696126919],
//            zoom: 6
//        })
//    });
//    $("#cmbBaseLayers").change(function () {
//        GlobalBaseLayer.setSource(getBaseLayerSource());
//    });
//});
//function getBaseLayerSource() {
//    bingMapKey = "AhAeGHHRWsEIGgfg0s-CgJHotjDx2t867Y1F0kXvIo900y9OnX2y2GCAN0iKx4I1";
//    var selected = $("#cmbBaseLayers").val();
//    var source = null;
//    switch (selected) {
//        case "0":
//            source = null;
//            break;
//        case "1":
//            source = new ol.source.XYZ({ crossOrigin: 'Anonymous', url: 'https://mts0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}' });
//            break;
//        case "2":
//            source = new ol.source.XYZ({ crossOrigin: 'Anonymous', url: 'https://mts0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}' });
//            break;
//        case "3":
//            source = new ol.source.XYZ({ crossOrigin: 'Anonymous', url: 'https://mts0.google.com/vt/lyrs=p&x={x}&y={y}&z={z}' });
//            break;
//        case "4":
//            source = new ol.source.BingMaps({ crossOrigin: 'Anonymous', key: bingMapKey, imagerySet: 'RoadOnDemand' });
//            break;
//        case "5":
//            source = new ol.source.BingMaps({ crossOrigin: 'Anonymous', key: bingMapKey, imagerySet: 'Aerial' });
//            break;
//        case "6":
//            source = new ol.source.BingMaps({ crossOrigin: 'Anonymous', key: bingMapKey, imagerySet: 'AerialWithLabelsOnDemand' });
//            break;
//        case "13":
//            source = new ol.source.BingMaps({ crossOrigin: 'Anonymous', key: bingMapKey, imagerySet: 'CanvasDark' });
//            break;
//        case "7":
//            source = new ol.source.OSM({ crossOrigin: 'Anonymous', url: 'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png' });
//            break;
//        case "8":
//            source = new ol.source.XYZ({
//                crossOrigin: 'Anonymous', url: 'https://vec01.maps.yandex.net/tiles?l=map&v=4.49.1&x={x}&y={y}&z={z}&scale=1&lang=tr_TR',
//                projection: 'EPSG:3395',
//                tileGrid: ol.tilegrid.createXYZ({
//                    extent: [-20037508.342789244, -20037508.342789244, 20037508.342789244, 20037508.342789244]
//                })
//            });
//            thumb = 'yandexRoadLogo';
//            break;
//        case "9":
//            source = new ol.source.XYZ({
//                crossOrigin: 'Anonymous', url: 'https://sat01.maps.yandex.net/tiles?l=sat&v=3.249.0&x={x}&y={y}&z={z}&lang=tr_TR',
//                projection: 'EPSG:3395',
//                tileGrid: ol.tilegrid.createXYZ({
//                    extent: [-20037508.342789244, -20037508.342789244, 20037508.342789244, 20037508.342789244]
//                })
//            });
//            thumb = 'yandexSatLogo';
//            break;
//        case "10":
//            source = new ol.source.XYZ({
//                crossOrigin: 'Anonymous', url: 'https://sat01.maps.yandex.net/tiles?l=sat&v=3.249.0&x={x}&y={y}&z={z}&lang=tr_TR',
//                projection: 'EPSG:3395',
//                tileGrid: ol.tilegrid.createXYZ({
//                    extent: [-20037508.342789244, -20037508.342789244, 20037508.342789244, 20037508.342789244]
//                })
//            });
//            labelsource = new ol.source.XYZ({
//                crossOrigin: 'Anonymous', url: 'https://vec01.maps.yandex.net/tiles?l=skl&v=4.49.1&x={x}&y={y}&z={z}&scale=1&lang=tr_TR',
//                projection: 'EPSG:3395',
//                tileGrid: ol.tilegrid.createXYZ({
//                    extent: [-20037508.342789244, -20037508.342789244, 20037508.342789244, 20037508.342789244]
//                })
//            });
//            thumb = 'yandexHybLogo';
//            break;
//        case "11":
//            source = new ol.source.XYZ({
//                crossOrigin: 'Anonymous', url: 'https://{1-4}.aerial.maps.cit.api.here.com'
//                    + '/maptile/2.1/maptile/newest/satellite.day/{z}/{x}/{y}/256/png'
//                    + '?app_id=uCoOL3v85PjRtYVNrrsq&app_code=hOQlSS5oPF4XojrhSoW-Jw'
//            });
//            break;
//    }
//    return source;
//};

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

                kapiCoordinate = feature.getGeometry().getCoordinates().toString();

                $("#KapiEkle").modal('show');

            } else {

                for (var i = 0; i < feature.getGeometry().getCoordinates()[0].length; i++) {
                    mahalleCoordinate += feature.getGeometry().getCoordinates()[0][i].toString() + " ";
                }

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

$(document).ready(function () {
    $("#button").click(function () {

        //alert("Heloo");
        $("#myModal").modal('show');
    })

})

function addDoor() {

    var DoorNo = parseInt($("#DoorNo").val());
    var DistrictCode = 1;
    var Coordinates = kapiCoordinate;

    $.ajax({
        type: "POST",
        dataType: 'JSON',
        contentType: 'application/json',
        url: '/Door/DoorAdd?DoorNo=' + DoorNo + '&DistrictCode=' + DistrictCode + '&Coordinates=' + Coordinates,
        async: true,
        success: function (data) {
            debugger;
            if (data == true) {
                $("#DoorNo").val = ""
                $("#DistrictCode").val = ""

                $("#KapiEkle").modal('hide');

                alert("Kapı Kaydedildi.");

            }
            else {
                alert("Aynı kapı kaydı zaten mevcut!");
            }

        },
        error: function (responce) {
            debugger;

            alert(responce);

        }
    })
}



function addDistrict() {

    var DistrictName = $("#DistrictName").val();
    var Coordinates = mahalleCoordinate;

    $.ajax({
        type: "POST",
        dataType: 'JSON',
        contentType: 'application/json',
        url: '/District/DistrictAdd?DistrictName=' + DistrictName +  '&Coordinates=' + Coordinates,
        async: true,
        success: function (data) {
            debugger;
            if (data == true) {
                $("#DistrictName").val = ""

                $("#MahalleEkle").modal('hide');

                alert("Mahalle Kaydedildi.");

            }
            else {
                alert("Aynı mahalle adı ile kayıt zaten mevcut!");
            }

        },
        error: function (responce) {
            debugger;

            alert(responce);
        }
    })
}