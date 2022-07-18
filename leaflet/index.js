let map = L.map("map");
// lat long and zoom level of the map
map.setView([22.629799, 80.212343], 5);

// dark map
let CartoDB_DarkMatter = L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 20,
  }
);

// add the layer to the map
CartoDB_DarkMatter.addTo(map);

// add geoman controls
map.pm.addControls({
  position: "topleft",
  drawCircleMarker: false,
  drawCircle: false,
  drawPolyline: false,
  drawText: false,
  dragMode: false,
  rotateMode: false,
  cutPolygon: false,
});
map.pm.removeControls();

// get geoJSON of geoman
map.on("pm:create", function (e) {
  let id = 12334; // generate uuid for the polygon
  let geoJSONLayer = e.layer.toGeoJSON();
  geoJSONLayer.properties.id = id;

  window.prompt(
    "Copy to clipboard: Ctrl+C, Enter",
    JSON.stringify(geoJSONLayer)
  );
});

// listen edit event
map.on("pm:edit", function (e) {
  let geoJSONLayer = e.layer.toGeoJSON();
  window.prompt(
    "Copy to clipboard: Ctrl+C, Enter",
    JSON.stringify(geoJSONLayer)
  );
});

// add geoJSON on leaflet
let geoJSONLayer = [
  {
    type: "Feature",
    properties: {
      id: "1",
      state: "Delhi",
      distict: "North Delhi",
      block: "Block 1",
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [77.206421, 28.627088],
          [77.218437, 28.61985],
          [77.212601, 28.61706],
          [77.212086, 28.610425],
          [77.208481, 28.612385],
          [77.205391, 28.610877],
          [77.201529, 28.611103],
          [77.201786, 28.617437],
          [77.199554, 28.617663],
          [77.199812, 28.623695],
          [77.206421, 28.627088],
        ],
      ],
    },
  },
  {
    type: "Feature",
    properties: {
      id: "2",
      state: "Uttar Pradesh",
      distict: "Ghaziabad",
      block: "Block 2",
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [77.206421, 28.627088],
          [77.19861, 28.631762],
          [77.201872, 28.635908],
          [77.20582, 28.633646],
          [77.216463, 28.633043],
          [77.217836, 28.63048],
          [77.212697, 28.623308],
          [77.206421, 28.627088],
        ],
      ],
    },
  },
  {
    type: "Feature",
    properties: {
      id: "3",
      state: "Delhi",
      distict: "CP",
      block: "Block 3",
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [77.218437, 28.61985],
          [77.227964, 28.615024],
          [77.227492, 28.611414],
          [77.217965, 28.60689],
          [77.212086, 28.610425],
          [77.212601, 28.61706],
          [77.218437, 28.61985],
        ],
      ],
    },
  },
  {
    type: "Feature",
    properties: {
      id: "4",
      state: "Uttar Pradesh",
      distict: "Dadri",
      block: "Block 4",
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [77.217836, 28.63048],
          [77.222407, 28.631165],
          [77.22657, 28.628753],
          [77.223372, 28.626378],
          [77.225282, 28.622816],
          [77.218437, 28.61985],
          [77.212753, 28.623274],
          [77.217836, 28.63048],
        ],
      ],
    },
  },
];

// create layer group
// let allDisticts = L.geoJSON(geoJSONLayer);
// let layerGroup = L.layerGroup().addTo(map);
// layerGroup.addLayer(allDisticts);
// remove layer group
// map.removeLayer(layerGroup);

// TODO - better way to group polygons in context of zones

// add circle

let markerData = [
  {
    lat: 28.6139,
    lng: 77.209,
    crime: "Murder",
    time: "",
    intensity: "",
  },
  {
    lat: 28.6148,
    lng: 77.211,
    crime: "Murder",
    time: "",
    intensity: "",
  },
  {
    lat: 28.615,
    lng: 77.207,
    crime: "Assault",
    time: "",
    intensity: "",
  },
  {
    lat: 28.629799,
    lng: 77.212343,
    crime: "Assault",
    time: "",
    intensity: "",
  },
  {
    lat: 28.625,
    lng: 77.2,
    crime: "Murder",
    time: "",
    intensity: "",
  },
  {
    lat: 28.614,
    lng: 77.203,
    crime: "Assault",
    time: "",
    intensity: "",
  },
];
let markers = markerData.map((marker) =>
  createCustomMarker(marker.lat, marker.lng, marker.crime, marker.time)
);

oldTime = new Date();

let setLoad = false;

// clear map
function clearMap() {
  /// clear polygons
  map.eachLayer(function (layer) {
    if (layer instanceof L.GeoJSON) map.removeLayer(layer);
  });
  // clear markers
  markers.map((marker) => {
    marker.remove();
  });
  setLoad = false;
}

// change map view
function changeView(bounds) {
  map.flyToBounds(bounds, {
    animation: true,
    duration: 1,
  });
}

// method 2 to add data

function loadBoundaries() {
  return L.geoJSON(geoJSONLayer).addTo(map);
}

function loadMarkers() {
  // add markers
  markers.map((marker) => {
    marker.addTo(map);
  });
}
function loadData() {
  if (!setLoad) {
    clearMap();
    // add boundaries
    let boundaries = loadBoundaries();
    loadMarkers();
    setLoad = true;
    changeView(boundaries.getBounds());
  }
}
loadData();

function filterMap() {
  clearMap();
  // filter data to add to map - polygon
  let filteredData = L.geoJSON(geoJSONLayer, {
    filter: function (feature, layer) {
      return feature.properties.block === "Block 1";
    },
  });
  // add polygon to map
  filteredData.addTo(map);

  changeView(filteredData.getBounds());

  filteredData = filteredData.toGeoJSON().features[0];

  // find points inside polygon
  let points = markers.filter((marker) => {
    return turf.booleanPointInPolygon(
      Object.values(marker.getLatLng()).reverse(),
      filteredData
    );
  });

  // add markers to map
  points.map((marker) => {
    marker.addTo(map);
  });
}

function filterMarker() {
  clearMap();
  let boundaries = loadBoundaries();
  let filteredData = markers.filter(
    (marker) => marker.options.crime == "Assault"
  );
  filteredData.map((marker) => {
    marker.addTo(map);
  });
  changeView(boundaries.getBounds());
}

function toggleGeoman() {
  map.pm.toggleControls();
}
//===========================================================================================

// add custom control to map
L.Control.CustomControl = L.Control.extend({
  options: {
    position: "topright",
  },
  onAdd: function (map) {
    var container = L.DomUtil.create("div", "leaflet-bar clear-map");
    container.innerHTML = `
    <button class="btn btn-primary" onclick="loadData()">Load Data</button>
    <button class="btn btn-primary" onclick="clearMap()">Clear Map</button>
    <button class="btn btn-primary" onclick="filterMap()">Filter Block</button>
    <button class="btn btn-primary" onclick="filterMarker()">Filter Marker</button>
    <button class="btn btn-primary" onclick="toggleGeoman()">Toggle Controls</button>`;
    return container;
  },
});
L.control.CustomControl = function (options) {
  return new L.Control.CustomControl(options);
};
L.control.CustomControl().addTo(map);

function createCustomMarker(lat, lng, crime, time) {
  const crimeColors = { Murder: "#c30b82", Assault: "#74D173" };
  const icon = L.divIcon({
    className: "custom-div-icon",
    html: `<div  class='custom-pin'  style="height:${8}px; width:${8}px; background-color:${
      crimeColors[crime]
    };box-shadow: 0px 0px 3px 2px ${crimeColors[crime]};"></div>`,
  });

  // const newMarker = L.circleMarker([lat, lng], {
  //   radius: 4,
  //   color: "#74D173",
  // })

  const newMarker = L.marker([lat, lng], {
    icon,
    crime,
  }).bindPopup("Some info");

  return newMarker;
}
