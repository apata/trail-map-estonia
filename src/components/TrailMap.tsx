import React, { ReactNode } from "react";
import { MapContainer, ZoomControl } from "react-leaflet";
import SiteInterface from "../models/SiteInterface";
import OSMTileLayer from "./OSMTileLayer";
import Site from "./Site";

interface MapProps {
  sites: SiteInterface[];
  children?: ReactNode;
}

const TrailMap = ({ sites, children }: MapProps) => (
  <MapContainer
    id="map"
    zoom={8}
    center={[58.883333, 25.557222]}
    style={{
      width: "100%",
      height: "100%",
    }}
    zoomControl={false}
  >
    <ZoomControl position="bottomright" />
    <OSMTileLayer />
    {children}
    {sites.map((site, index) => (
      <Site key={site.name + index} {...site} />
    ))}
  </MapContainer>
);

export default TrailMap;
