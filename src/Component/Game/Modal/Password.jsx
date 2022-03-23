import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function Modal({ setModalOpen, quizType }) {
  const onKeyDown = (e) => {
    if (e.key == "Enter") {
      handleAnswer();
    }
  };

  return (
    <ModalBackground
      onClick={() => {
        setModalOpen(false);
      }}
    >
      <ModalContainer>
        <Body>
          <img src="../../../Asset/image/password" alt="" />
        </Body>
      </ModalContainer>
    </ModalBackground>
  );
}

export default Modal;

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 1;
`;
const ModalContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;

  padding: 25px;
`;

const TitleCloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
  }
`;
const Title = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
  h1 {
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    color: #5668e8;
  }
`;
const Body = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  text-align: center;
  p {
    font-weight: 600;
    font-size: 24px;
    line-height: 160%;
    text-align: center;
  }
`;
const Input = styled.div`
  margin: auto;
  width: 443px;
  height: 60px;

  border-radius: 7px;
  input {
    width: 100%;
    height: 100%;
    background-color: #eaecff;
    border-radius: 7px;

    text-align: center;
  }
`;
const Footer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    box-sizing: border-box;

    width: 150px;
    height: 45px;
    margin: 10px;
    color: white;
    font-size: 20px;
    cursor: pointer;

    background: #5668e8;
    border: 3px solid #5668e8;
    border-radius: 30px;
  }
`;

const Hint = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    background: none;
    cursor: pointer;
    font-weight: 900;
    font-size: 18px;
    line-height: 22px;

    text-align: center;
    letter-spacing: -0.03em;

    color: #5668e8;
  }
`;

const HintModal = styled.div`
  width: 443px;
  height: 82px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 30px;

  z-index: 11;
  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.03em;

    color: #ffffff;
  }
`;
