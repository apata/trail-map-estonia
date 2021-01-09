import React from "react";
import { Popup } from "react-leaflet";

interface InfoPopupProps {
  title: string;
  sourceURL: string;
  pinType: string;
  description: string;
}

const INFO_LIMIT = 200;

const InfoPopup = ({
  title,
  sourceURL,
  pinType,
  description,
}: InfoPopupProps) => (
  <Popup autoPanPadding={[100, 100]}>
    <h4 style={{marginTop: 0, marginBottom: 0}}>
      <a rel="noopener noreferrer" target="_blank" href={sourceURL}>
        {title}
      </a>
    </h4>
    <h5 style={{marginTop: 4, marginBottom: 0}}>{pinType}</h5>
    <p style={{marginTop: 8, marginBottom: 0}}>
      {description.length > INFO_LIMIT
        ? description.substring(0, INFO_LIMIT - 3) + "..."
        : description}
    </p>
  </Popup>
);

export default InfoPopup;
