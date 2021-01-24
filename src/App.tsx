import React, { useCallback, useState } from "react";
import sites from "./sites.json";
import TrailMap from "./components/TrailMap";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import FilterOverlay from "./components/FilterOverlay";
import GlobalStyle from "./style/GlobalStyle";
import ResetStyle from "./style/ResetStyle";

const App = () => {
  // empty list means no filters: all are selected
  const [selectedSiteTypes, setSelectedSiteTypes] = useState<string[]>([]);

  const toggleSiteType = useCallback(
    (siteType: string) =>
      setSelectedSiteTypes((currentSiteTypes) =>
        currentSiteTypes.includes(siteType)
          ? currentSiteTypes.filter((s) => s !== siteType)
          : [...currentSiteTypes, siteType]
      ),
    []
  );

  const clearSelectedSiteTypes = useCallback(
    () => setSelectedSiteTypes([]),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <ResetStyle />
      <GlobalStyle />
      <TrailMap
        sites={
          selectedSiteTypes.length
            ? sites.filter((s) => selectedSiteTypes.includes(s.site_type))
            : sites
        }
      >
        <FilterOverlay
          toggleSiteType={toggleSiteType}
          clearSelectedSiteTypes={clearSelectedSiteTypes}
          selectedSiteTypes={selectedSiteTypes}
        />
      </TrailMap>
    </ThemeProvider>
  );
};

export default App;
