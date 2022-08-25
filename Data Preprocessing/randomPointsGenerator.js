var map = L.map('map').setView([28.52, 77.135], 14);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

const cant = [[77.085593, 28.577147], [77.115134, 28.610446], [77.127328, 28.605625], [77.132137, 28.607885], [77.15924, 28.601327], [77.16628, 28.594026], [77.175898, 28.577903], [77.151711, 28.564934], [77.131444, 28.552273], [77.127672, 28.566447], [77.118226, 28.574133], [77.098474, 28.579709], [77.085593, 28.577147]]
const other = [[77.135051, 28.555439], [77.18107, 28.570963], [77.184067, 28.551296], [77.202431, 28.544752], [77.179019, 28.520011], [77.166831, 28.49953], [77.119669, 28.494975], [77.099746, 28.511564], [77.06504, 28.518667], [77.07503, 28.541986], [77.111425, 28.534482], [77.132035, 28.5381], [77.135051, 28.555439]]
const northwest = [[76.861123, 28.541276], [76.931047, 28.619736], [76.970305, 28.666491], [76.940705, 28.671313], [76.923888, 28.649784], [76.928398, 28.64571], [76.917451, 28.632523], [76.901427, 28.634228], [76.87909, 28.633375], [76.857238, 28.595863], [76.840729, 28.59032], [76.837815, 28.576249], [76.845099, 28.555352], [76.857238, 28.548101], [76.861123, 28.541276]]

function reverselatlng(polygon) {
  let reversedPolygon = [];
  for (let i = 0; i < polygon.length; i++) {
    const newData = [polygon[i][1], polygon[i][0]];
    reversedPolygon.push(newData);
  }
  return reversedPolygon;
}




function getRandomLatLng(map) {

  let bounds = map.getBounds(),
    southWest = bounds.getSouthWest(),
    northEast = bounds.getNorthEast(),
    lngSpan = northEast.lng - southWest.lng,
    latSpan = northEast.lat - southWest.lat;

  lat = southWest.lat + latSpan * Math.random();
  lng = southWest.lng + lngSpan * Math.random();

  return [lat, lng];
}


function getRandomLatLng2(map) {


  const latC = 28.5669;
  const lngC = 76.869123;
  // while(1){
  const probablity = Math.random();
  let lat, lng;
  latSign = Math.round(Math.random()) * 2 - 1.3;
  lngSign = Math.round(Math.random()) * 2 - 0.5;

  if (probablity > 0.7) {
    //go away
    lat = latC + latSign * 0.012 * Math.random();
    lng = lngC + lngSign * 0.012 * Math.random();
  }
  else {
    //come closer
    lat = latC + latSign * 0.0005 * Math.random();
    lng = lngC + lngSign * 0.0005 * Math.random();
  }
  // if(lat<southWest.lat+ && lng<southWest.lng +){
  // break;
  // }
  // }
  return [lat,lng];
}

function getPoints(polygonData) {
  var polygon = L.polygon(reverselatlng(polygonData)).addTo(map);
  map.fitBounds(polygon.getBounds());
  // let allPoints = [];
  let allPoints = '';

  for (let i = 0; i < 60; i++) {
    allPoints+=getRandomLatLng2(map)+';'
    // allPoints.push(getRandomLatLng2(map));
    // const newMarker = createCustomMarker(allPoints[i][0], allPoints[i][1]);
  }

  console.log(allPoints);

}

getPoints(northwest);

function createCustomMarker(
  lat, lng
) {
  var marker = L.marker([lat, lng]).addTo(map);

}


function getData(data,pos){
  let returnValue = ''
  for (let i=0;i<data.length;i++){
      returnValue+=data[i][pos]+';'
  }
  return returnValue
}
// a = getData(nw1,0)
