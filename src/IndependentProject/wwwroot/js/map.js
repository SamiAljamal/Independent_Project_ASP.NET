$(document).ready(function () {
    var map;

    function initialize() {

        var mapProp = {
            center: new google.maps.LatLng(20.593684, 78.96288), //India Lat and Lon
            zoom: 2,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map_canvas"), mapProp);
    }

    google.maps.event.addDomListener(window, 'load', initialize);

});