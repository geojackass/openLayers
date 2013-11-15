var gearth;

//google earthAPIのロード
google.load("earth", "1");

//アプリ本体を初期化する関数
function init(resp){
	
	//Google earth初期化
	google.earth.createInstance('earth', initCallback);
	
}

//GoogleEarth初期化のコールバック変数
function initCallback(instance) {
	
	gearth = instance;
	gearth.getWindow().setVisibility(true);
	
	//add CotrollNavigation
	gearth.getNavigationControl().setVisibility(gearth.VISIBILITY_AUTO);
	
	//create google earth LAYER
	gearth.getLayerRoot().enableLayerById(gearth.LAYER_BORDERS, true);
	gearth.getLayerRoot().enableLayerById(gearth.LAYER_ROADS, true);
	
}