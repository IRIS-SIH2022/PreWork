
 function initMap() {
    const dwarkaLatLng = { lat: 28.6, lng: 77.00};

    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11.5,
      center: dwarkaLatLng, // Center the map on Chicago, USA.
    });
    poly = new google.maps.Polyline({
      strokeColor: "#000000",
      strokeOpacity: 1.0,
      strokeWeight: 3,
    });
    poly.setMap(map);
    // Add a listener for the click event
    map.addListener("click", addLatLng);

    var undoButton= document.getElementById("undo");
    undoButton.addEventListener("click",removeLatLng);

    var printButton= document.getElementById("printss");
    printButton.addEventListener("click",printData);

  }
  
  
  // Handles click events on a map, and adds a new point to the Polyline.
  function addLatLng(event) {
    const path = poly.getPath();
  
    // Because path is an MVCArray, we can simply append a new coordinate
    // and it will automatically appear.
    path.push(event.latLng);
    // Add a new marker at the new plotted point on the polyline.
    
  }
  
  function removeLatLng(event) {
    const path = poly.getPath();
  
    // Because path is an MVCArray, we can simply append a new coordinate
    // and it will automatically appear.
    path.pop();
    // Add a new marker at the new plotted point on the polyline.
    }
  
 function printData(event){
    var boundary = []
    const path = poly.getPath();
    path.forEach((da)=>{
        boundary.push( da.toJSON());
    });

    console.log(boundary);
 }