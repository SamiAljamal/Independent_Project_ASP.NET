﻿$(document).ready(function () {
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

        var infoWindow = new google.maps.InfoWindow({
            content: ""
        });


        map = new google.maps.Map(document.getElementById("map-canvas"), mapProp);

        var countryLayer = new google.maps.Data();
        countryLayer.loadGeoJson('https://gist.githubusercontent.com/SamiAljamal/d3d7e1851bb973dfcd97d18b35a54daa/raw/c51eb1cf5845008b73c779b9c3ad44ccdc0d715e/SyrianRefugees.Json');
        countryLayer.setStyle(function (feature) {
            return {
                fillColor: getColor(feature.getProperty('refugees')),
                fillOpacity: 1,
                strokeColor: 'white',
                strokeWeight: .5,
                zIndex : 1
               
            };
        });

        countryLayer.addListener('mouseover', function (e) {
            countryLayer.overrideStyle(e.feature, {
                strokeColor: 'white',
                strokeWeight: 2,
                zIndex: 2
            });
        });

        countryLayer.addListener('mouseout', function (e) {
            countryLayer.revertStyle();
        });

        countryLayer.addListener('click', function (e) {
            console.log(e);
            infoWindow.setContent('<div style="line-height:1.00;overflow:hidden;white-space:nowrap;">' +
              e.feature.getProperty('name') + '<br> Syrian Refugees: ' +
               e.feature.getProperty('refugees') + '</div>');

            var anchor = new google.maps.MVCObject();
            anchor.set("position", e.latLng);
            infoWindow.open(map, anchor);
        });

   
        countryLayer.setMap(map);

        function getColor(refugees) {
            var colors = [
              '#969696',
              '#bdd7e7',
              '#6baed6',
              '#3182bd',
              '#08519c',
            ];

            return refugees >= 250000 ? colors[4] :
              refugees > 50000 ? colors[3] :
              refugees > 1000 ? colors[2] :
              refugees > 1 ? colors[1] :
              colors[0];
        }



        var title = document.getElementById('title');
        var div = document.createElement('div');
        div.innerHTML = '<h1> Refugee Crises</h1>';
        title.appendChild(div);

        map.controls[google.maps.ControlPosition.TOP_CENTER].push(title);
  
    }
   

   

    google.maps.event.addDomListener(window, 'load', initialize);
   
   

});

