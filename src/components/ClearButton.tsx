import React from "react";
import GhostButton from "../elements/GhostButton";
import GridElement from "../elements/GridElement";
import ButtonProps from "../models/ButtonProps";

interface ClearButtonProps extends ButtonProps {
  disabled: boolean;
}

const ClearButton = ({ children, onClick, disabled }: ClearButtonProps) => (
  <GridElement>
    <GhostButton disabled={disabled} onClick={onClick}>
      {children}
    </GhostButton>
  </GridElement>
);

export default ClearButton;
