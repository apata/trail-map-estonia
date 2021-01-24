import styled from "styled-components";
import Overlay from "../elements/Overlay";
import gridParentStyle from "../elements/gridParentStyle";

const FilterOverlayContainer = styled(Overlay)<{ isOpen: boolean }>`
  width: 100%;
  padding: 4px ${({ theme }) => theme.spacing.d1}px;
  background: #fff;
  box-shadow: ${({ theme }) =>
    `0 0 ${theme.spacing.d0_5}px ${theme.spacing.d0_5}px ${theme.palette.grey[400]}66`};
  height: ${({ theme, isOpen }) => (isOpen ? "100%" : theme.spacing.d5 + "px")};
  display: flex;
  flex-flow: column nowrap;

  @media (min-width: 768px) {
    height: auto;
  }

  ${gridParentStyle};
  overflow-y: hidden;
`;

export default FilterOverlayContainer;
