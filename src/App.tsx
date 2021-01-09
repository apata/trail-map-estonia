import React from "react";
import { MapContainer, TileLayer, WMSTileLayer } from "react-leaflet";
// import * as L from "leaflet";
// import "proj4";
// import "proj4leaflet";
import sites from "./sites.json";
import Pin from "./components/Pin";
import InfoPopup from "./components/InfoPopup";

// const crs = new (L as any).Proj.CRS(
//   "EPSG:3301",
//   "+proj=lcc +lat_1=59.33333333333334 +lat_2=58 +lat_0=57.51755393055556 +lon_0=24 +x_0=500000 +y_0=6375000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
//   {
//     resolutions: [2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1, 0.5],
//   }
// );

function App() {
  return (
    // <MapContainer
    //   id="map"
    //   zoom={3}
    //   center={[58.883333, 25.557222]}
    //   crs={crs}
    //   style={{ width: "100%", height: "100vh" }}
    // >
    //   <WMSTileLayer
    //     url="https://kaart.maaamet.ee/wms/fotokaart"
    //     layers="MA-FOTOKAART"
    //     attribution="&copy; Maa-amet"
    //   />
    <MapContainer
      id="map"
      zoom={8}
      center={[58.883333, 25.557222]}
      style={{ width: "100%", height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {sites.map(
        ({ name, site_type, latitude, longitude, desc, link }, index) => (
          <Pin
            key={name + index}
            title={name}
            pinType={site_type}
            position={[latitude, longitude]}
          >
            <InfoPopup
              title={name}
              pinType={site_type}
              description={desc}
              sourceURL={link}
            ></InfoPopup>
          </Pin>
        )
      )}
    </MapContainer>
  );
}

export default App;
