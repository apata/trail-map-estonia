import styled from "styled-components";
import ButtonBase from "./ButtonBase";

const GhostButton = styled.button`
  ${ButtonBase}
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.primary.main};
  border-color: ${({ theme }) => theme.palette.primary.main};

  &:disabled {
    color: ${({ theme }) => theme.palette.grey[400]};
    border-color: ${({ theme }) => theme.palette.grey[400]};
  }
`;

export default GhostButton;
