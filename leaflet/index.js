let map = L.map("map");
// lat long and zoom level of the map
map.setView([28.6139, 77.209], 16);

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
  //   drawCircleMarker: false,
  drawCircle: false,
  drawPolyline: false,
  drawText: false,
  dragMode: false,
  rotateMode: false,
  cutPolygon: false,
});

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
      id: 12334,
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

// filter data to add to map
let filteredData = L.geoJSON(geoJSONLayer, {
  filter: function (feature, layer) {
    return feature.properties.state === "Delhi";
  },
});
// filteredData.addTo(map);

// add circle
markers = [
  L.circleMarker([28.6139, 77.209], {
    radius: 2,
    color: "#FFB461",
  }),
  L.circleMarker([28.6148, 77.211], {
    radius: 3,
    color: "#00B5B9",
  }),
  L.circleMarker([28.615, 77.207], {
    radius: 4,
    color: "#74D173",
  }),
];

let setLoad = false;
// method 2 to add data
function loadData() {
  if (!setLoad) {
    L.geoJSON(geoJSONLayer).addTo(map);
    markers.map((marker) => {
      marker.addTo(map);
    });
    setLoad = true;
  }
}
loadData();

// clear map
function clearMap() {
  map.eachLayer(function (layer) {
    if (layer instanceof L.GeoJSON) map.removeLayer(layer);
  });
  markers.map((marker) => {
    marker.remove();
  });
  setLoad = false;
}

let newLocation = geoJSONLayer.filter((feature) => {
  return feature.properties.block === "Block 2";
})[0];

let center = turf.center(newLocation).geometry.coordinates.reverse();

console.log(center);
// change map view
function changeView() {
  map.flyTo(center, map.getZoom(), {
    animation: true,
    duration: 1,
  });
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
    <button class="btn btn-primary" onclick="changeView()">Change View</button>`;
    return container;
  },
});
L.control.CustomControl = function (options) {
  return new L.Control.CustomControl(options);
};
L.control.CustomControl().addTo(map);
