import React from "react";
import styled from "styled-components";

import { SvgMic } from "../icons/etc/svg_etc";

const Users = () => {
  return (
    <Container>
      <UserContainer>
        <User></User>
        <NameBox>
          <SvgMic />
          <p>닉네임</p>
        </NameBox>
      </UserContainer>
    </Container>
  );
};

export default Users;

const Container = styled.div`
  display: flex;
  width: 241px;
  height: 120px;
  /* flex-direction: column; */
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;

  z-index: 2;
`;

const UserContainer = styled.div``;

const User = styled.div`
  width: 65px;
  height: 65px;

  background: #000000;
  border: 3px solid #56e8c5;
  border-radius: 50%;
  box-sizing: border-box;
`;

const NameBox = styled.div`
  display: flex;
`;
