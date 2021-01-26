import React, { ReactNode, useEffect, useRef } from "react";
import { MapContainer, ZoomControl } from "react-leaflet";
import SiteInterface from "../models/SiteInterface";
import OSMTileLayer from "./OSMTileLayer";
import Site from "./Site";

interface MapProps {
  sites: SiteInterface[];
  children?: ReactNode;
}

const TrailMap = ({ sites, children }: MapProps) => {
  const mapContainer = useRef<HTMLElement>();
  useEffect(() => {
    const resizeToWindowSize = () => {
      mapContainer.current!.style.height =
        document.documentElement.clientHeight + "px";
    };
    window.addEventListener("resize", resizeToWindowSize);
    window.addEventListener("orientationchange", resizeToWindowSize);
    return () => {
      window.removeEventListener("resize", resizeToWindowSize);
      window.removeEventListener("orientationchange", resizeToWindowSize);
    };
  }, []);

  return (
    <MapContainer
      id="map"
      zoom={8}
      center={[58.883333, 25.557222]}
      style={{
        width: "100%",
        height: window.innerHeight,
      }}
      zoomControl={false}
      whenCreated={() => {
        mapContainer.current = document.getElementById("map") || undefined;
      }}
    >
      <ZoomControl position="bottomright" />
      <OSMTileLayer />
      {children}
      {sites.map((site, index) => (
        <Site key={site.name + index} {...site} />
      ))}
    </MapContainer>
  );
};

export default TrailMap;
