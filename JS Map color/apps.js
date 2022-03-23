
  function changeGradient(heatmap,wt) {
    var gradient = [
      'rgba(0, 255, 255, 0)',
      'rgba(0, 255, 255, 1)',
      'rgba(0, 191, 255, 1)',
      'rgba(0, 127, 255, 1)',
      'rgba(0, 63, 255, 1)',
      'rgba(0, 0, 255, 1)',
      'rgba(0, 0, 223, 1)',
      'rgba(0, 0, 191, 1)',
      'rgba(0, 0, 159, 1)',
      'rgba(0, 0, 127, 1)',
      'rgba(63, 0, 91, 1)',
      'rgba(127, 0, 63, 1)',
      'rgba(191, 0, 31, 1)',
      'rgba(255, 0, 0, 1)'
    ]
    heatmap.set('gradient', gradient[wt]);
  }
function initMap() {
    const dwarkaLatLng = { lat: 28.6, lng: 77.00};

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11.5,
      center: dwarkaLatLng,
    //   mapTypeId: "satellite"
    });
    // Create the initial InfoWindow.
    
    // infoWindow.open(map);
    // Configure the click listener.
    // map.addListener("click", (mapsMouseEvent) => {
    //   // Close the current InfoWindow.
    //   infoWindow.close();
    //   // Create a new InfoWindow.
    //   infoWindow = new google.maps.InfoWindow({
    //     position: mapsMouseEvent.latLng,
    //   });
    //   infoWindow.setContent(
    //     JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
    //   );
    //   infoWindow.open(map);
    //   console.log(mapsMouseEvent.latLng.toJSON()
    //   )
    // });

    //0-10
    //11-20
    //21-30
    //31-40
    //41-50
    //51-60
    //61-70
    //71-80
    //81-90
    //91-100
    var heatMapData = [
        {location: new google.maps.LatLng(28.682, 77.047), weight: 1},
        // new google.maps.LatLng(28.782, 77.347),
        // new google.maps.LatLng(28.552, 77.097),
        {location: new google.maps.LatLng(28.632, 77.087), weight: 5},
      
        {location: new google.maps.LatLng(28.602, 77.247), weight: 2},
        {location: new google.maps.LatLng(28.612, 77.087), weight: 2},
        // new google.maps.LatLng(28.582, 77.027),
        {location: new google.maps.LatLng(28.680, 77.061), weight: 7}
      ];
    
    var heatMapDataRed = [
        {location: new google.maps.LatLng(28.512, 77.047), weight: 4},
        {location: new google.maps.LatLng(28.532, 77.047), weight: 4},
        {location: new google.maps.LatLng(28.582, 77.147), weight: 4},
        {location: new google.maps.LatLng(28.539, 77.049), weight: 6},
        // new google.maps.LatLng(28.589, 77.040),
        {location: new google.maps.LatLng(28.612, 77.054), weight: 7},
       
    ];
    var heatmapRed = new google.maps.visualization.HeatmapLayer({
        data: heatMapDataRed
      });
      heatmapRed.setMap(map);      
    
      var heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatMapData
      });
      heatmap.setMap(map);      
    //   changeGradient(heatmap,1);
    var gradient = [
        'rgba(0, 255, 255, 0)',
        'rgba(0, 255, 255, 1)',
        'rgba(255, 0, 0, 1)',
        'rgba(255, 0, 0, 1)',
        'rgba(255, 0, 0, 1)',
        'rgba(255, 0, 0, 1)',
      ]
    heatmap.set('gradient',gradient);
    generateBoundaries(map);
  }

  function generateBoundaries(map){
      const zone1=[
        {lat: 28.607114209489005, lng: 76.86695010359117},
        {lat: 28.593471556301317, lng: 76.85432493093924},
        {lat: 28.588781485248568, lng: 76.84121417472376},
        {lat: 28.580253547307112, lng: 76.84024300759668},
        {lat: 28.56532799198259, lng: 76.84072859116024},
        {lat: 28.556371642527292, lng: 76.84218534185084},
        {lat: 28.553812545572796, lng: 76.8528681802486},
        {lat: 28.547414531064753, lng: 76.8582095994475},
        {lat: 28.541016127856135, lng: 76.86015193370166},
        {lat: 28.536323718494828, lng: 76.8698636049724},
        {lat: 28.5346173360031, lng: 76.87763294198894},
        {lat: 28.528644779679585, lng: 76.88394552831492},
        {lat: 28.52224523660676, lng: 76.88103202693368},
        {lat: 28.513711908218024, lng: 76.87860410911601},
        {lat: 28.507738167492406, lng: 76.884916695442},
        {lat: 28.509444985079053, lng: 76.89074369820442},
        {lat: 28.511578468225526, lng: 76.90288328729282},
        {lat: 28.514565272131456, lng: 76.9106526243094},
        {lat: 28.516271979242884, lng: 76.91842196132599},
        {lat: 28.512005159676413, lng: 76.92813363259668},
        {lat: 28.50859157973783, lng: 76.93638855317681},
        {lat: 28.50603132228964, lng: 76.94804255870166},
        {lat: 28.507738167492406, lng: 76.95581189571824},
        {lat: 28.511578468225526, lng: 76.96309564917127},
        {lat: 28.51669865170492, lng: 76.97183615331492},
        {lat: 28.52352517630148, lng: 76.97669198895026},
        {lat: 28.51925865022306, lng: 76.99417299723758},
        {lat: 28.517551991449906, lng: 77.01019725483425},
        {lat: 28.529498022734458, lng: 77.00534141919891},
        {lat: 28.54528177318139, lng: 76.99562974792818},
        {lat: 28.54528177318139, lng: 77.00874050414366},
        {lat: 28.5879287225773, lng: 76.99271624654698},
      ];
      const boundary1 = new google.maps.Polygon({
        paths: zone1,
        strokeColor: "#FFFF00",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FFFF00",
        fillOpacity: 0.35,
      });
    
      boundary1.setMap(map);
      
  }