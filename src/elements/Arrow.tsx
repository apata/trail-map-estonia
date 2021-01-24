import React from "react";
import styled from "styled-components";

type Direction = "top" | "right" | "bottom" | "left";

interface ArrowProps {
  direction: Direction;
}

const getDegreesFromDirection = (direction: Direction) => {
  switch (direction) {
    case "top":
      return 0;
    case "right":
      return 90;
    case "bottom":
      return 180;
    case "left":
      return 270;
  }
};

const ArrowContainer = styled.div`
  width: 24px;
  height: 24px;
`;

const ArrowSVG = ({ direction }: { direction: Direction }) => (
  <svg viewBox="0 0 24 24">
    <path
      d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
      transform={`rotate(${180 + getDegreesFromDirection(direction)})`}
      transform-origin="center center"
    />
  </svg>
);

const Arrow = ({ direction }: ArrowProps) => (
  <ArrowContainer>
    <ArrowSVG direction={direction} />
  </ArrowContainer>
);

export default Arrow;
