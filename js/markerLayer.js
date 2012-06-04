        var map, layer;

        function init(){
            OpenLayers.ProxyHost="/proxy/?url=";
            map = new OpenLayers.Map('map');
            layer = new OpenLayers.Layer.WMS( "OpenLayers WMS", 
                "http://vmap0.tiles.osgeo.org/wms/vmap0", {layers: 'basic'} );
//このへんまでできると、表示サイズが変わる。理由は現在究明中
//イマイチどれがどのマーカーか分からない。                
            map.addLayer(layer);
            map.setCenter(new OpenLayers.LonLat(0, 0), 0);

            var newl = new OpenLayers.Layer.Text( "text", { location:"./textfile.txt"} );
            map.addLayer(newl);

            var markers = new OpenLayers.Layer.Markers( "Markers" );
            map.addLayer(markers);
//ここの独自定義マーカーいらない
            var size = new OpenLayers.Size(21,25);
            var offset = new OpenLayers.Pixel(-(size.w/2), -size.h);
            var icon = new OpenLayers.Icon('http://www.openlayers.org/dev/img/marker.png',size,offset);
            markers.addMarker(new OpenLayers.Marker(new OpenLayers.LonLat(0,0),icon));

            var halfIcon = icon.clone();
            markers.addMarker(new OpenLayers.Marker(new OpenLayers.LonLat(0,45),halfIcon));

            marker = new OpenLayers.Marker(new OpenLayers.LonLat(90,10),icon.clone());
            marker.setOpacity(0.2);
            marker.events.register('mousedown', marker, function(evt) { alert(this.icon.url); OpenLayers.Event.stop(evt); });
            markers.addMarker(marker); 
            map.addControl(new OpenLayers.Control.LayerSwitcher());
            map.zoomToMaxExtent();

            halfIcon.setOpacity(0.5);
            
        }