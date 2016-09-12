$(document).ready(function () {
    var map;

    function initialize() {

        var mapProp = {
            center: new google.maps.LatLng(0, 0), 
            zoom: 2,
            styles: [
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "lightness": 37
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "hue": "#454440"
            },
            {
                "saturation": -76
            },
            {
                "lightness": 43
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "lightness": 30
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "hue": "#50a10f"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "hue": "#b8ab97"
            },
            {
                "lightness": 29
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 27
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#c3c3c3"
            },
            {
                "lightness": 13
            }
        ]
    }
            ]
        };
        map = new google.maps.Map(document.getElementById("map_canvas"), mapProp);

        var countryLayer = new google.maps.Data();
        countryLayer.loadGeoJson('https://gist.githubusercontent.com/SamiAljamal/d27ec0e9c17ab88ac92372b31f252251/raw/b398dd324a659b0bed76e02698940eab03dcd762/Countries.json');
        countryLayer.setStyle(function (feature) {
            return {
                fillOpacity: 1,
                strokeColor: 'white',
                strokeWeight: .5
               
            };
        });
        countryLayer.setMap(map);

        var title = document.getElementById('title');
        var div = document.createElement('div');
        div.innerHTML = '<h1> Refuge Crises</h1>';
        title.appendChild(div);
       
    }

    google.maps.event.addDomListener(window, 'load', initialize);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(title);
   

});

