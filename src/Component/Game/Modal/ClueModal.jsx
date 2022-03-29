import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreator as quizActions } from "../../../redux/modules/quiz";
import { SvgXW } from "../../../Asset/Icon/etc/svg_etc";

function Modal({ clueType, setClueModalOpen }) {
  const dispatch = useDispatch();
  const { clue } = useSelector((state) => state?.quiz?.clue);
  const roomId = useSelector((state) => state.room.roomInfo.roomId);

  useEffect(() => dispatch(quizActions.refClue(roomId, clueType)), []);

  return (
    <>
      {clueType === "Bb1" ? (
        <ModalBackground
          onClick={() => {
            setClueModalOpen(false);
          }}
        >
          <ImgContainer>
            <img src="./image/password.png" alt="" />
          </ImgContainer>
        </ModalBackground>
      ) : (
        <ModalBackground>
          <ModalContainer>
            <TitleCloseBtn>
              <button
                onClick={() => {
                  setClueModalOpen(false);
                }}
              >
                <SvgXW />
              </button>
            </TitleCloseBtn>

            <Title>
              <h1>단서</h1>
            </Title>
            <Body>{clue ? <p>{clue.content}</p> : <p>오류</p>}</Body>

            <Footer>
              <button
                onClick={() => {
                  setClueModalOpen(false);
                }}
                id="cancelBtn"
              >
                닫기
              </button>
            </Footer>
          </ModalContainer>
        </ModalBackground>
      )}
    </>
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
  background-color: #5668e8;
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
    color: white;
    cursor: pointer;
  }
  padding-right: 7px;
`;
const Title = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
  h1 {
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    color: #ffffff;
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
    color: #ffffff;
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
    border: 3px solid #ffffff;
    border-radius: 30px;
  }
`;

const ImgContainer = styled.div`
  img {
    width: 500px;
    height: 500px;
  }
  z-index: 2;
`;
