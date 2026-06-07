ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([2711532.807015, 8419952.719006, 2810623.060984, 8486262.037664]);
var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Flyingsquirrelobservations19902024byEspoosubdistricts_1 = new ol.format.GeoJSON();
var features_Flyingsquirrelobservations19902024byEspoosubdistricts_1 = format_Flyingsquirrelobservations19902024byEspoosubdistricts_1.readFeatures(json_Flyingsquirrelobservations19902024byEspoosubdistricts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Flyingsquirrelobservations19902024byEspoosubdistricts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Flyingsquirrelobservations19902024byEspoosubdistricts_1.addFeatures(features_Flyingsquirrelobservations19902024byEspoosubdistricts_1);
var lyr_Flyingsquirrelobservations19902024byEspoosubdistricts_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Flyingsquirrelobservations19902024byEspoosubdistricts_1, 
                style: style_Flyingsquirrelobservations19902024byEspoosubdistricts_1,
                popuplayertitle: 'Flying squirrel observations 1990-2024 by Espoo sub-districts',
                interactive: true,
    title: 'Flying squirrel observations 1990-2024 by Espoo sub-districts<br />\
    <img src="styles/legend/Flyingsquirrelobservations19902024byEspoosubdistricts_1_0.png" /> No observations<br />\
    <img src="styles/legend/Flyingsquirrelobservations19902024byEspoosubdistricts_1_1.png" /> 1 - 13<br />\
    <img src="styles/legend/Flyingsquirrelobservations19902024byEspoosubdistricts_1_2.png" /> 14 - 35<br />\
    <img src="styles/legend/Flyingsquirrelobservations19902024byEspoosubdistricts_1_3.png" /> 36 - 75<br />\
    <img src="styles/legend/Flyingsquirrelobservations19902024byEspoosubdistricts_1_4.png" /> 76 - 146<br />\
    <img src="styles/legend/Flyingsquirrelobservations19902024byEspoosubdistricts_1_5.png" /> 147 - 315<br />' });

lyr_Positron_0.setVisible(true);lyr_Flyingsquirrelobservations19902024byEspoosubdistricts_1.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Flyingsquirrelobservations19902024byEspoosubdistricts_1];
lyr_Flyingsquirrelobservations19902024byEspoosubdistricts_1.set('fieldAliases', {'Tunnus': 'Tunnus', 'Pinta-ala_': 'Pinta-ala_', 'nimi_ruots': 'nimi_ruots', 'nimi_suome': 'nimi_suome', 'NUMPOINTS': 'NUMPOINTS', });
lyr_Flyingsquirrelobservations19902024byEspoosubdistricts_1.set('fieldImages', {'Tunnus': 'TextEdit', 'Pinta-ala_': 'TextEdit', 'nimi_ruots': 'TextEdit', 'nimi_suome': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_Flyingsquirrelobservations19902024byEspoosubdistricts_1.set('fieldLabels', {'Tunnus': 'hidden field', 'Pinta-ala_': 'hidden field', 'nimi_ruots': 'hidden field', 'nimi_suome': 'inline label - visible with data', 'NUMPOINTS': 'inline label - always visible', });
lyr_Flyingsquirrelobservations19902024byEspoosubdistricts_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});