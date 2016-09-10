$(document).ready(function () {
    var map;

    function initialize() {

        var mapProp = {
            center: new google.maps.LatLng(0, 0), 
            zoom: 2,
            styles: [{ "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }] }]
        };
        map = new google.maps.Map(document.getElementById("map_canvas"), mapProp);

        var countryLayer = new google.maps.Data();
        countryLayer.loadGeoJson('https://gist.githubusercontent.com/SamiAljamal/d27ec0e9c17ab88ac92372b31f252251/raw/b398dd324a659b0bed76e02698940eab03dcd762/Countries.json');
        countryLayer.setMap(map);
    }

    google.maps.event.addDomListener(window, 'load', initialize);


});

