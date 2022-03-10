import React from "react";
import styled from "styled-components";
import { Header, Sidebar } from "../components/index";

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
