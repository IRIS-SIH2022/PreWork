import { GeoJSON, useMap } from "react-leaflet";
import geoJSONLayer from "../utils/boundaries";
import { useEffect, useState } from "react";
import L from "leaflet";

const MapBoundaries = () => {
  const [data, setData] = useState();
  const map = useMap();

  useEffect(() => {
    setData(geoJSONLayer);
  }, []);

  if (data) {
    // These next 3 lines purely for debuggins:
    const geojsonObject = L.geoJSON(data);
    map.flyToBounds(geojsonObject.getBounds(), {
      animation: true,
      duration: 1,
    });

    return <GeoJSON data={data} />;
  } else {
    return null;
  }
};

export default MapBoundaries;
