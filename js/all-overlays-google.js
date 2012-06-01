var map;

function init() {

    map = new OpenLayers.Map({
        div: "map",
        allOverlays: true
    });

    var osm = new OpenLayers.Layer.OSM();
    //使いたいレイヤーはここに追加。スイッチャーで切り替える
    var gmap = new OpenLayers.Layer.Google("Google Streets", {visibility: false});

    //初期状態でosmを選択する。
    map.addLayers([osm, gmap]);

    map.addControl(new OpenLayers.Control.LayerSwitcher());
    map.zoomToMaxExtent();

}