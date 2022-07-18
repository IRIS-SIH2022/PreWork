let map = L.map("map");
// lat long and zoom level of the map
map.setView([28.6139, 77.209], 14);

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

// add geoman
map.pm.addControls({
  position: "topleft",
  drawCircle: false,
});

// copy js variable to clipboard
function copyToClipboard(text) {
  text = "let geoJSON = " + text;
  window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

// get geoJSON of geoman
map.on("pm:create", function (e) {
  let geoJSONLayer = e.layer.toGeoJSON();
  console.log(e);
  //   alert(JSON.stringify(geoJSON));
  copyToClipboard(JSON.stringify(geoJSON));
});

// add geoJSON on leaflet
let geoJSONLayer = [
  {
    type: "Feature",
    properties: {
      name: "Police Station 1",
      police_station_id: "1",
      id: "1",
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
      name: "Police Station 2",
      police_station_id: "2",
      id: "2",
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
];
L.geoJSON(geoJSONLayer).addTo(map);

// add custom control to map
L.Control.CustomControl = L.Control.extend({
  options: {
    position: "topleft",
  },
  onAdd: function (map) {
    var container = L.DomUtil.create("div", "leaflet-bar leaflet-control");
    container.innerHTML =
      '<a href="#" class="leaflet-bar-part leaflet-bar-part-single" id="geoman-button">' +
      '<i class="fas fa-map-marked-alt"> && ' +
      "</i>" +
      "</a>";
    return container;
  },
});
L.control.CustomControl = function (options) {
  return new L.Control.CustomControl(options);
};
L.control.CustomControl().addTo(map);
