var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_cmclu_1 = new ol.format.GeoJSON();
var features_cmclu_1 = format_cmclu_1.readFeatures(json_cmclu_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cmclu_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cmclu_1.addFeatures(features_cmclu_1);
var lyr_cmclu_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cmclu_1, 
                style: style_cmclu_1,
                popuplayertitle: "cmclu",
                interactive: true,
    title: 'cmclu<br />\
    <img src="styles/legend/cmclu_1_0.png" /> 2<br />\
    <img src="styles/legend/cmclu_1_1.png" /> 4<br />\
    <img src="styles/legend/cmclu_1_2.png" /> 5<br />\
    <img src="styles/legend/cmclu_1_3.png" /> 11<br />\
    <img src="styles/legend/cmclu_1_4.png" /> 12<br />\
    <img src="styles/legend/cmclu_1_5.png" /> 14<br />\
    <img src="styles/legend/cmclu_1_6.png" /> 15<br />\
    <img src="styles/legend/cmclu_1_7.png" /> 16<br />\
    <img src="styles/legend/cmclu_1_8.png" /> 19<br />\
    <img src="styles/legend/cmclu_1_9.png" /> 23<br />\
    <img src="styles/legend/cmclu_1_10.png" /> 35<br />\
    <img src="styles/legend/cmclu_1_11.png" /> 36<br />\
    <img src="styles/legend/cmclu_1_12.png" /> 38<br />\
    <img src="styles/legend/cmclu_1_13.png" /> 66<br />\
    <img src="styles/legend/cmclu_1_14.png" /> 69<br />\
    <img src="styles/legend/cmclu_1_15.png" /> 71<br />\
    <img src="styles/legend/cmclu_1_16.png" /> 72<br />\
    <img src="styles/legend/cmclu_1_17.png" /> 73<br />\
    <img src="styles/legend/cmclu_1_18.png" /> 74<br />\
    <img src="styles/legend/cmclu_1_19.png" /> 75<br />\
    <img src="styles/legend/cmclu_1_20.png" /> 76<br />\
    <img src="styles/legend/cmclu_1_21.png" /> 79<br />\
    <img src="styles/legend/cmclu_1_22.png" /> 81<br />\
    <img src="styles/legend/cmclu_1_23.png" /> 82<br />\
    <img src="styles/legend/cmclu_1_24.png" /> 83<br />\
    <img src="styles/legend/cmclu_1_25.png" /> 91<br />\
    <img src="styles/legend/cmclu_1_26.png" /> 93<br />\
    <img src="styles/legend/cmclu_1_27.png" /> 94<br />\
    <img src="styles/legend/cmclu_1_28.png" /> 95<br />\
    <img src="styles/legend/cmclu_1_29.png" /> 350<br />\
    <img src="styles/legend/cmclu_1_30.png" /> 1113<br />\
    <img src="styles/legend/cmclu_1_31.png" /> 2911<br />\
    <img src="styles/legend/cmclu_1_32.png" /> 3212<br />\
    <img src="styles/legend/cmclu_1_33.png" /> 3411<br />\
    <img src="styles/legend/cmclu_1_34.png" /> 7912<br />\
    <img src="styles/legend/cmclu_1_35.png" /> 8113<br />\
    <img src="styles/legend/cmclu_1_36.png" /> 8412<br />\
    <img src="styles/legend/cmclu_1_37.png" /> 8414<br />\
    <img src="styles/legend/cmclu_1_38.png" /> 8511<br />\
    <img src="styles/legend/cmclu_1_39.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_cmclu_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_cmclu_1];
lyr_cmclu_1.set('fieldAliases', {'ID': 'ID', 'WARD_NO': 'WARD_NO', 'BLOCK_NO': 'BLOCK_NO', 'EXTENT': 'EXTENT', 'LU_CODE': 'LU_CODE', 'Descriptio': 'Descriptio', 'Nolli': 'Nolli', });
lyr_cmclu_1.set('fieldImages', {'ID': 'TextEdit', 'WARD_NO': 'Range', 'BLOCK_NO': 'Range', 'EXTENT': 'TextEdit', 'LU_CODE': 'TextEdit', 'Descriptio': 'TextEdit', 'Nolli': 'Range', });
lyr_cmclu_1.set('fieldLabels', {'ID': 'no label', 'WARD_NO': 'no label', 'BLOCK_NO': 'no label', 'EXTENT': 'no label', 'LU_CODE': 'no label', 'Descriptio': 'no label', 'Nolli': 'no label', });
lyr_cmclu_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});