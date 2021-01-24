import styled from "styled-components";
import ButtonBase from "./ButtonBase";

type ButtonType = "primary" | "secondary";

interface ButtonStyleProps {
  active: boolean;
  btnType: ButtonType;
}

const Button = styled.button<ButtonStyleProps>`
  ${ButtonBase}
  background-color: ${({ theme, btnType, active }) =>
    active ? theme.palette[btnType].main : theme.palette.grey[100]};
  color: ${({ theme, btnType, active }) =>
    active ? theme.palette[btnType].contrastText : theme.palette.text.primary};
  border-color: ${({ theme, btnType, active }) =>
    active ? theme.palette[btnType].main : theme.palette.grey[100]};
`;

export default Button;
