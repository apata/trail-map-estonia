import React from "react";
import Button from "../elements/Button";
import GridElement from "../elements/GridElement";
import ButtonProps from "../models/ButtonProps";

interface FilterButtonProps extends ButtonProps {
  isSelected: boolean;
}

const FilterButton = ({ children, onClick, isSelected }: FilterButtonProps) => (
  <GridElement>
    <Button onClick={onClick} active={isSelected} btnType="secondary">
      {children}
    </Button>
  </GridElement>
);

export default FilterButton;
