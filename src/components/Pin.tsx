import React, { ReactNode } from "react";
import { icon } from "leaflet";
import { Marker, MarkerProps } from "react-leaflet";
import getIconPathFromPinType from "./getIconPathFromPinType";

interface PinProps extends Pick<MarkerProps, "position" | "title"> {
  pinType: string;
  children?: ReactNode,
}

const Pin = ({ position, pinType, title, children }: PinProps) => (
  <Marker
    position={position}
    riseOnHover
    title={title}
    icon={icon({ iconUrl: getIconPathFromPinType(pinType) })}
  >
    {children}
  </Marker>
);

export default Pin;