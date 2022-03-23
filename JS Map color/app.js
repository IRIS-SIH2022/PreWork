var dataheat = [];
var dataheat1 = [];
var dataheat2 = [];


var data = [
    {
        "lat": 44.0682019, 
        "data_value": {"pm10": "0","pm25": "21"}, 
        "lon": -114.7420408, 
        "aqi": 70.0
    },
    {
        "lat": 44.0682019, 
        "data_value": {"pm10": "0","pm25": "21"}, 
        "lon": -114.7420408, 
        "aqi": 7.0
    },
    {
        "lat": 44.0682019, 
        "data_value": {"pm10": "0","pm25": "21"}, 
        "lon": -114.7430408, 
        "aqi": 120.0
    },
    {
        "lat": 44.0689019, 
        "data_value": {"pm10": "0","pm25": "21"}, 
        "lon": -114.7423408, 
        "aqi": 170.0
    },
    {
        "lat": 44.0681019, 
        "data_value": {"pm10": "0","pm25": "21"}, 
        "lon": -114.7429408, 
        "aqi": 270.0
    },
    ]

function initMap() {

  var map = new google.maps.Map(document.getElementById('map-canvas'), {
  center: new google.maps.LatLng(-25.7479, 28.2293),
  mapTypeId: 'satellite',
  zoom: 6,
  maxZoom: 16,
  minZoom: 6
 });



 // pull data from database using php
  var xml = data;

var markers = xml.documentElement.getElementsByTagName('marker');
Array.prototype.forEach.call(markers, function(markerElem) {

  var  aqi =  parseFloat(markerElem.getAttribute('aqi'));
  var point = new google.maps.LatLng(
      parseFloat(markerElem.getAttribute('lat')),
      parseFloat(markerElem.getAttribute('lng')));


  for (var i=0; i <= markers.length; i++)
  {
    if(aqi < 98)
      {dataheat.push(point);}
    else if( aqi > 98 && aqi < 100)
      {dataheat1.push(point);}
    else if (aqi = 100)
     { dataheat2.push(point);}
    else{
        //nothing
    }

  }


});

   var yellow = [
            'rgba(255, 255, 0, 0)',
            'rgba(255, 255, 0, 1)'
            ];

  var red = [
        'rgba(255, 0, 0, 0)',
        'rgba(255, 0, 0, 1)'
        ];

  var green = [
          'rgba(0, 255, 0, 0)',
          'rgba(0, 255, 0, 1)'
          ];

 var heatmap = new google.maps.visualization.HeatmapLayer({

      data: dataheat,
      map:map,
      radius: 24

});
  var heatmap1 = new google.maps.visualization.HeatmapLayer({

      data: dataheat1,
      map:map,
      radius: 24

});
   var heatmap2 = new google.maps.visualization.HeatmapLayer({

      data: dataheat2,
      map:map,
      radius: 24

});

heatmap.set('gradient', heatmap.get('gradient') ? null : red);
heatmap1.set('gradient', heatmap1.get('gradient') ? null : yellow);
heatmap2.set('gradient', heatmap2.get('gradient') ? null : green);


   });
  }

  function downloadUrl(url, callback) {
  var request = window.ActiveXObject ?
  new ActiveXObject('Microsoft.XMLHTTP') :
  new XMLHttpRequest;

  request.onreadystatechange = function() {
  if (request.readyState == 4) {
  request.onreadystatechange = doNothing;
  callback(request, request.status);
  }
 };

  request.open('GET', url, true);
  request.send(null);
   }