import { MapContainer, TileLayer } from "react-leaflet";
import Geoman from "./Geoman";
import MapBoundaries from "./Boundary";
import { CustomControl } from "./CustomControl";

const Map = () => {
  const position = [22.629799, 80.212343];
  const zoomLv = 5;

  return (
    <MapContainer center={position} zoom={zoomLv} scrollWheelZoom={true}>
      {/* add custom control to map */}
      <CustomControl />
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        maxZoom={20}
      />
      <Geoman />
      <MapBoundaries />
    </MapContainer>
  );
};

export default Map;
