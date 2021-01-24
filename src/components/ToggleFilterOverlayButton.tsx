import React from "react";
import styled from "styled-components";
import GridElement from "../elements/GridElement";
import Arrow from "../elements/Arrow";
import { Heading2 } from "../elements/Typography";

const ToggleFilterOverlayButtonContainer = styled(GridElement)`
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`;

const ToggleButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background-color: inherit;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

const ToggleFilterOverlayButton = (props: {
  onClick: () => void;
  isOpen: boolean;
}) => (
  <ToggleFilterOverlayButtonContainer>
    <ToggleButton onClick={props.onClick}>
      <Heading2 marginless>Filtrid</Heading2>
      <Arrow direction={props.isOpen ? "top" : "bottom"} />
    </ToggleButton>
  </ToggleFilterOverlayButtonContainer>
);

export default ToggleFilterOverlayButton;
