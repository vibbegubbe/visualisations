var wms_layers = [];


        var lyr_DarkMatternolabels_0 = new ol.layer.Tile({
            'title': 'Dark Matter [no labels]',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png'
            })
        });
var format_kavelybufferi_15min_2022_1 = new ol.format.GeoJSON();
var features_kavelybufferi_15min_2022_1 = format_kavelybufferi_15min_2022_1.readFeatures(json_kavelybufferi_15min_2022_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kavelybufferi_15min_2022_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kavelybufferi_15min_2022_1.addFeatures(features_kavelybufferi_15min_2022_1);
var lyr_kavelybufferi_15min_2022_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kavelybufferi_15min_2022_1, 
                style: style_kavelybufferi_15min_2022_1,
                popuplayertitle: 'kavelybufferi_15min_2022',
                interactive: false,
                title: '<img src="styles/legend/kavelybufferi_15min_2022_1.png" /> kavelybufferi_15min_2022'
            });
var format_kavelybufferi_10min_2022_2 = new ol.format.GeoJSON();
var features_kavelybufferi_10min_2022_2 = format_kavelybufferi_10min_2022_2.readFeatures(json_kavelybufferi_10min_2022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kavelybufferi_10min_2022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kavelybufferi_10min_2022_2.addFeatures(features_kavelybufferi_10min_2022_2);
var lyr_kavelybufferi_10min_2022_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kavelybufferi_10min_2022_2, 
                style: style_kavelybufferi_10min_2022_2,
                popuplayertitle: 'kavelybufferi_10min_2022',
                interactive: false,
                title: '<img src="styles/legend/kavelybufferi_10min_2022_2.png" /> kavelybufferi_10min_2022'
            });
var format_kavelybufferi_5min_2022_3 = new ol.format.GeoJSON();
var features_kavelybufferi_5min_2022_3 = format_kavelybufferi_5min_2022_3.readFeatures(json_kavelybufferi_5min_2022_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kavelybufferi_5min_2022_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kavelybufferi_5min_2022_3.addFeatures(features_kavelybufferi_5min_2022_3);
var lyr_kavelybufferi_5min_2022_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kavelybufferi_5min_2022_3, 
                style: style_kavelybufferi_5min_2022_3,
                popuplayertitle: 'kavelybufferi_5min_2022',
                interactive: false,
                title: '<img src="styles/legend/kavelybufferi_5min_2022_3.png" /> kavelybufferi_5min_2022'
            });
var format_directions_2022_4 = new ol.format.GeoJSON();
var features_directions_2022_4 = format_directions_2022_4.readFeatures(json_directions_2022_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_directions_2022_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_directions_2022_4.addFeatures(features_directions_2022_4);
var lyr_directions_2022_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_directions_2022_4, 
                style: style_directions_2022_4,
                popuplayertitle: 'directions_2022',
                interactive: false,
    title: 'directions_2022<br />\
    <img src="styles/legend/directions_2022_4_0.png" /> inbound<br />' });
var format_Asema_5 = new ol.format.GeoJSON();
var features_Asema_5 = format_Asema_5.readFeatures(json_Asema_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Asema_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Asema_5.addFeatures(features_Asema_5);
var lyr_Asema_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Asema_5, 
                style: style_Asema_5,
                popuplayertitle: 'Asema',
                interactive: true,
    title: 'Asema<br />\
    <img src="styles/legend/Asema_5_0.png" /> Juna<br />\
    <img src="styles/legend/Asema_5_1.png" /> Metro<br />' });

lyr_DarkMatternolabels_0.setVisible(true);lyr_kavelybufferi_15min_2022_1.setVisible(true);lyr_kavelybufferi_10min_2022_2.setVisible(true);lyr_kavelybufferi_5min_2022_3.setVisible(true);lyr_directions_2022_4.setVisible(true);lyr_Asema_5.setVisible(true);
var layersList = [lyr_DarkMatternolabels_0,lyr_kavelybufferi_15min_2022_1,lyr_kavelybufferi_10min_2022_2,lyr_kavelybufferi_5min_2022_3,lyr_directions_2022_4,lyr_Asema_5];
lyr_kavelybufferi_15min_2022_1.set('fieldAliases', {'asema': 'asema', 'kulkumuoto': 'kulkumuoto', 'etaisyys': 'etaisyys', 'pinta_ala': 'pinta_ala', });
lyr_kavelybufferi_10min_2022_2.set('fieldAliases', {'asema': 'asema', 'kulkumuoto': 'kulkumuoto', 'etaisyys': 'etaisyys', 'pinta_ala': 'pinta_ala', });
lyr_kavelybufferi_5min_2022_3.set('fieldAliases', {'asema': 'asema', 'kulkumuoto': 'kulkumuoto', 'etaisyys': 'etaisyys', 'pinta_ala': 'pinta_ala', });
lyr_directions_2022_4.set('fieldAliases', {'full_name': 'full_name', 'dir_id': 'dir_id', 'dir_name': 'dir_name', 'pattern': 'pattern', 'line_id': 'line_id', 'line_name': 'line_name', 'line_color': 'line_color', 'map_id': 'map_id', 'map_name': 'map_name', 'url': 'url', 'km': 'km', 'vehicle_ty': 'vehicle_ty', 'minheadway': 'minheadway', 'maxheadway': 'maxheadway', 'minkph': 'minkph', 'maxkph': 'maxkph', });
lyr_Asema_5.set('fieldAliases', {'id': 'id', 'kunta': 'kunta', 'nimi': 'nimi', 'kulkumuoto': 'kulkumuoto', 'avattu': 'avattu', });
lyr_kavelybufferi_15min_2022_1.set('fieldImages', {'asema': 'TextEdit', 'kulkumuoto': 'TextEdit', 'etaisyys': 'TextEdit', 'pinta_ala': 'TextEdit', });
lyr_kavelybufferi_10min_2022_2.set('fieldImages', {'asema': 'TextEdit', 'kulkumuoto': 'TextEdit', 'etaisyys': 'TextEdit', 'pinta_ala': 'TextEdit', });
lyr_kavelybufferi_5min_2022_3.set('fieldImages', {'asema': 'TextEdit', 'kulkumuoto': 'TextEdit', 'etaisyys': 'TextEdit', 'pinta_ala': 'TextEdit', });
lyr_directions_2022_4.set('fieldImages', {'full_name': '', 'dir_id': '', 'dir_name': '', 'pattern': '', 'line_id': '', 'line_name': '', 'line_color': '', 'map_id': '', 'map_name': '', 'url': '', 'km': '', 'vehicle_ty': '', 'minheadway': '', 'maxheadway': '', 'minkph': '', 'maxkph': '', });
lyr_Asema_5.set('fieldImages', {'id': 'TextEdit', 'kunta': 'TextEdit', 'nimi': 'TextEdit', 'kulkumuoto': 'TextEdit', 'avattu': '', });
lyr_kavelybufferi_15min_2022_1.set('fieldLabels', {'asema': 'no label', 'kulkumuoto': 'no label', 'etaisyys': 'no label', 'pinta_ala': 'no label', });
lyr_kavelybufferi_10min_2022_2.set('fieldLabels', {'asema': 'no label', 'kulkumuoto': 'no label', 'etaisyys': 'no label', 'pinta_ala': 'inline label - always visible', });
lyr_kavelybufferi_5min_2022_3.set('fieldLabels', {'asema': 'no label', 'kulkumuoto': 'no label', 'etaisyys': 'no label', 'pinta_ala': 'no label', });
lyr_directions_2022_4.set('fieldLabels', {'full_name': 'no label', 'dir_id': 'no label', 'dir_name': 'no label', 'pattern': 'no label', 'line_id': 'no label', 'line_name': 'no label', 'line_color': 'no label', 'map_id': 'no label', 'map_name': 'no label', 'url': 'no label', 'km': 'no label', 'vehicle_ty': 'no label', 'minheadway': 'no label', 'maxheadway': 'no label', 'minkph': 'no label', 'maxkph': 'no label', });
lyr_Asema_5.set('fieldLabels', {'id': 'hidden field', 'kunta': 'hidden field', 'nimi': 'inline label - visible with data', 'kulkumuoto': 'inline label - visible with data', 'avattu': 'inline label - visible with data', });
lyr_Asema_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});