import React from "react";
import Pin from "./Pin";
import InfoPopup from "./InfoPopup";
import SiteInterface from "../models/SiteInterface";

const Site = ({
  name,
  site_type,
  latitude,
  longitude,
  desc,
  link,
}: SiteInterface) => (
  <Pin title={name} pinType={site_type} position={[latitude, longitude]}>
    <InfoPopup
      title={name}
      pinType={site_type}
      description={desc}
      sourceURL={link}
    />
  </Pin>
);

export default Site;
