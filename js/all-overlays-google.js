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
    //var markers = new OpenLayers.Layer.Markers("Markers", {visibility: true});
    var markers = new OpenLayers.Layer.Markers("Markers");

    marker = new OpenLayers.Marker(
    /* defaultの座標は東京大学空間情報科学研究センター */
    new OpenLayers.LonLat(139.677493, 35.661127)
        .transform(
            new OpenLayers.Projection("EPSG:4326"), 
            new OpenLayers.Projection("EPSG:900913")
        )
    );
    markers.addMarker(marker);

    /*-------------2つめのマーカー------------------------*/
    marker = new OpenLayers.Marker(
        new OpenLayers.LonLat(139.677493, 40.661127)
        .transform(
            new OpenLayers.Projection("EPSG:4326"), 
            new OpenLayers.Projection("EPSG:900913")
        )
    );
    markers.addMarker(marker);
    //-------------2つめのマーカー-------------------------*/
//-- ここまで --

    
    //初期状態でosmを選択する。
    map.addLayers([osm, gmap, markers]);

    map.addControl(new OpenLayers.Control.LayerSwitcher());
    map.zoomToMaxExtent();
    
}