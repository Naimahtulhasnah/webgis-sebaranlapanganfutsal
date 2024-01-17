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
var format_photos_1 = new ol.format.GeoJSON();
var features_photos_1 = format_photos_1.readFeatures(json_photos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_photos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_photos_1.addFeatures(features_photos_1);
var lyr_photos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_photos_1, 
                style: style_photos_1,
                interactive: true,
                title: '<img src="styles/legend/photos_1.png" /> photos'
            });
var format_SHP_JALAN_2 = new ol.format.GeoJSON();
var features_SHP_JALAN_2 = format_SHP_JALAN_2.readFeatures(json_SHP_JALAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHP_JALAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHP_JALAN_2.addFeatures(features_SHP_JALAN_2);
var lyr_SHP_JALAN_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SHP_JALAN_2, 
                style: style_SHP_JALAN_2,
                interactive: true,
                title: '<img src="styles/legend/SHP_JALAN_2.png" /> SHP_JALAN'
            });
var format_ADMINISTRASIKECAMATAN_AR_50K_3 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_3 = format_ADMINISTRASIKECAMATAN_AR_50K_3.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_3.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_3);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_3, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_3,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_photos_1.setVisible(true);lyr_SHP_JALAN_2.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_photos_1,lyr_SHP_JALAN_2,lyr_ADMINISTRASIKECAMATAN_AR_50K_3];
lyr_photos_1.set('fieldAliases', {'PATH': 'PATH', 'REMARKS': 'REMARKS', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'Open&Close': 'Open&Close', 'TarifSiang': 'TarifSiang', 'TarifMalam': 'TarifMalam', 'Banyak Lap': 'Banyak Lap', 'Kondisi': 'Kondisi', 'Toilet': 'Toilet', 'Gambar Lap': 'Gambar Lap', });
lyr_SHP_JALAN_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'Shape_Leng': 'Shape_Leng', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_3.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_photos_1.set('fieldImages', {'PATH': 'TextEdit', 'REMARKS': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'Open&Close': 'TextEdit', 'TarifSiang': 'TextEdit', 'TarifMalam': 'TextEdit', 'Banyak Lap': 'TextEdit', 'Kondisi': 'TextEdit', 'Toilet': 'TextEdit', 'Gambar Lap': 'ExternalResource', });
lyr_SHP_JALAN_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_3.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_photos_1.set('fieldLabels', {'PATH': 'no label', 'REMARKS': 'inline label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', 'Open&Close': 'inline label', 'TarifSiang': 'inline label', 'TarifMalam': 'inline label', 'Banyak Lap': 'inline label', 'Kondisi': 'inline label', 'Toilet': 'inline label', 'Gambar Lap': 'inline label', });
lyr_SHP_JALAN_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'Shape_Leng': 'no label', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_3.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});