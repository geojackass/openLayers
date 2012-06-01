var map;
var marker = new Array();

function init() {

    map = new OpenLayers.Map({
        div: "map",
        allOverlays: true
    });

    var osm = new OpenLayers.Layer.OSM();
    //使いたいレイヤーはここに追加。スイッチャーで切り替える
    var gmap = new OpenLayers.Layer.Google("Google Streets", {visibility: false});
    
    
    //add marker test
    var markers = new OpenLayers.Layer.Markers("Markers");
    /*　ここでマーカーレイヤーにaddMarker出来ない　理由は不明 */
    marker.addLayer(markers);
    var marker = new OpenLayers.Marker(
    new OpenLayers.LonLat(139.76, 35.68)
        .transform(
            new OpenLayers.Projection("EPSG:4326"), 
            new OpenLayers.Projection("EPSG:900913")
        )
    );
    markers.addMarker(marker);
    */
//-- ここまで --

    
    //初期状態でosmを選択する。
    map.addLayers([osm, gmap, markers]);

    map.addControl(new OpenLayers.Control.LayerSwitcher());
    map.zoomToMaxExtent();
    
}