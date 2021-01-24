import React from "react";
import { Popup } from "react-leaflet";
import { createGlobalStyle, useTheme } from "styled-components";
import { Heading3, Heading4, Paragraph } from "../elements/Typography";

interface InfoPopupProps {
  title: string;
  sourceURL: string;
  pinType: string;
  description: string;
}

const INFO_LIMIT = 200;
const POPUP_CLASS = "popup--full-width";

const InfoPopupGlobalStyle = createGlobalStyle`
  .leaflet-popup-content p {
    margin: ${({ theme }) => theme.spacing.d1}px 0 0;
  }

  .${POPUP_CLASS} {
    width: 304px;
  }
`;

const InfoPopup = ({
  title,
  sourceURL,
  pinType,
  description,
}: InfoPopupProps) => {
  const theme = useTheme();
  return (
    <Popup
      autoPanPadding={[
        theme.spacing.d1,
        theme.spacing.d5 * 3 + theme.spacing.d1 * 4 + theme.spacing.d1,
      ]}
      className={POPUP_CLASS}
    >
      <InfoPopupGlobalStyle />
      <a rel="noopener noreferrer" target="_blank" href={sourceURL}>
        <Heading3>{title}</Heading3>
      </a>
      <Heading4>{pinType}</Heading4>
      <Paragraph>
        {description.length > INFO_LIMIT
          ? description.substring(0, INFO_LIMIT - 3) + "..."
          : description}
      </Paragraph>
    </Popup>
  );
};

export default InfoPopup;
