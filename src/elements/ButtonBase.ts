import { css } from "styled-components";

const ButtonBase = css`
  cursor: pointer;
  padding: ${({ theme }) => `0 ${theme.spacing.d2}px`};
  height: ${({ theme }) => theme.spacing.d5}px;
  margin: 0;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border-width: 1.5px;
  border-style: solid;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  font-size: ${({ theme }) => theme.typography.button.fontSize}px;
`;

export default ButtonBase;
