import React, { useState } from "react";
import { SITE_TYPES } from "../utils/siteTypes";
import FilterButton from "./FilterButton";
import GridContainer from "../elements/GridContainer";
import ClearButton from "./ClearButton";
import ToggleFilterOverlayButton from "./ToggleFilterOverlayButton";
import FilterOverlayTitle from "./FilterOverlayTitle";
import FilterOverlayContainer from "./FilterOverlayContainer";

interface FilterOverlayProps {
  selectedSiteTypes: string[];
  toggleSiteType: (siteType: string) => void;
  clearSelectedSiteTypes: () => void;
}

const FilterOverlay = ({
  selectedSiteTypes,
  toggleSiteType,
  clearSelectedSiteTypes,
}: FilterOverlayProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FilterOverlayContainer isOpen={isOpen}>
      <GridContainer>
        <ToggleFilterOverlayButton
          onClick={() => setIsOpen((o) => !o)}
          isOpen={isOpen}
        />
        <FilterOverlayTitle />
        <ClearButton
          onClick={clearSelectedSiteTypes}
          disabled={selectedSiteTypes.length === 0}
        >
          Eemalda kõik filtrid
        </ClearButton>
        {Array.from(SITE_TYPES, ([siteType]) => (
          <FilterButton
            onClick={() => toggleSiteType(siteType)}
            isSelected={selectedSiteTypes.includes(siteType)}
          >
            {siteType}
          </FilterButton>
        ))}
      </GridContainer>
    </FilterOverlayContainer>
  );
};

export default FilterOverlay;
