import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  return <StyledSidebar></StyledSidebar>;
};

export default Sidebar;

const StyledSidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  width: 14.58vw;
  height: 100%;
  /* background-color: blue; */
`;

const Section = styled.section`
  padding: 0 1.6rem;
`;
