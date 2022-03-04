import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Header />
      <div>
        <Wrapper>{children}</Wrapper>
      </div>
    </>
  );
};
export default Layout;

const Wrapper = styled.div`
  padding-left: 14.58vw;
`;
