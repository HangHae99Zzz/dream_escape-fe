import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import { SvgMic } from "../../Asset/Icon/etc/svg_etc";

const MainUsers = () => {
  const { peers } = useSelector(({ room }) => room);

  return peers.length === 0 ? (
    <></>
  ) : (
    <Container>
      {peers?.map((peer, i) => (
        <UserContainer key={i}>
          <User img={peer.img}></User>
          <NameBox>
            <Name>
              <SvgMic style={{ paddingRight: "3px", position: "absolute" }} />
              <p>{peer.nickName}</p>
            </Name>
          </NameBox>
        </UserContainer>
      ))}
    </Container>
  );
};

export default MainUsers;

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

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  height: 110px;
`;

const User = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  border: 3px solid #56e8c5;

  background: url(${(props) => props.img});
  background-size: contain;
  box-sizing: border-box;
`;

const NameBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

const Name = styled.div`
  display: flex;
  padding-left: 5px;
  p {
    padding-left: 13px;
    font-weight: 800;
    font-size: 14px;
    line-height: 17px;
  }
`;
