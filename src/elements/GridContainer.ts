import styled from "styled-components";

const GridContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 -${({ theme }) => theme.spacing.d0_5}px;
`;

export default GridContainer;
