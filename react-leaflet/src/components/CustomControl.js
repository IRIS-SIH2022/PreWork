import { createControlComponent } from "@react-leaflet/core";
import { Control, DomUtil } from "leaflet";

Control.CustomControl = Control.extend({
  options: {
    position: "topright",
  },
  onAdd: function (map) {
    var container = DomUtil.create("div", "leaflet-bar clear-map");
    container.innerHTML = `
        <button class="btn btn-primary" onclick="loadData()">Load Data</button>
        <button class="btn btn-primary" onclick="clearMap()">Clear Map</button>
        <button class="btn btn-primary" onclick="filterMap()">Filter Block</button>
        <button class="btn btn-primary" onclick="filterMarker()">Filter Marker</button>
        <button class="btn btn-primary" onclick="toggleGeoman()">Toggle Controls</button>`;
    return container;
  },
  onRemove: function (map) {},
});

export const CustomControl = createControlComponent(
  (props) => new Control.CustomControl(props)
);
