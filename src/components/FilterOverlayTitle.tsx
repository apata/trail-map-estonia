import React from "react";
import styled from "styled-components";
import GridElement from "../elements/GridElement";
import { Heading2 } from "../elements/Typography";

const TitleContainer = styled(GridElement)`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
`;

const FilterOverlayTitle = () => (
  <TitleContainer>
    <Heading2 marginless>Filtrid</Heading2>
  </TitleContainer>
);

export default FilterOverlayTitle;
