var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Hoschulen_json_1 = new ol.format.GeoJSON();
var features_Hoschulen_json_1 = format_Hoschulen_json_1.readFeatures(json_Hoschulen_json_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hoschulen_json_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hoschulen_json_1.addFeatures(features_Hoschulen_json_1);
var lyr_Hoschulen_json_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hoschulen_json_1, 
                style: style_Hoschulen_json_1,
                interactive: true,
                title: '<img src="styles/legend/Hoschulen_json_1.png" /> Hoschulen_json'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Hoschulen_json_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Hoschulen_json_1];
lyr_Hoschulen_json_1.set('fieldAliases', {'name': 'name', 'strasse': 'strasse', 'ort': 'ort', 'webadresse': 'webadresse', 'status': 'status', });
lyr_Hoschulen_json_1.set('fieldImages', {'name': 'TextEdit', 'strasse': 'Hidden', 'ort': 'Hidden', 'webadresse': 'Hidden', 'status': 'Hidden', });
lyr_Hoschulen_json_1.set('fieldLabels', {'name': 'header label', });
lyr_Hoschulen_json_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});