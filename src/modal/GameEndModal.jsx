import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreator as rankActions } from "../redux/modules/rank";
import { actionCreator as roomActions } from "../redux/modules/room";
import { actionCreator as userActions } from "../redux/modules/user";
import EndingRankList from "../elements/EndingRankList";
import { useNavigate } from "react-router-dom";

function Modal({ setGameEnd, quizType, setIsCredit }) {
  const inputRef = useRef("");
  const dispatch = useDispatch();
  const rank = useSelector((state) => state.rank.gameRank);
  const roomId = useSelector((state) => state.room.roomInfo.roomId);

  const handleComment = () => {
    console.log(inputRef.current.value);
    dispatch(userActions.writeComment(inputRef.current.value));
    setIsCredit(true);
  };

  useEffect(() => {
    // 랭킹 가져오기
    dispatch(rankActions.onGameRank(roomId));
  }, []);

  return (
    <ModalBackground>
      <ModalContainer>
        <TitleCloseBtn>
          <button
            onClick={() => {
              setGameEnd(false);
            }}
          >
            X
          </button>
        </TitleCloseBtn>

        <Title>
          <h1>게임종료</h1>
        </Title>
        <Body>
          <EndingRankList list={rank}></EndingRankList>
        </Body>
        <Input>
          <label>
            <input
              ref={inputRef}
              type="text"
              placeholder="한줄평을 남겨보세요!"
            />
          </label>
        </Input>
        <Footer>
          <button
            type="submit"
            onClick={() => {
              setGameEnd(false);
              handleComment();
            }}
          >
            확인
          </button>
        </Footer>
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
  @import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap");

  display: flex;
  justify-content: flex-end;
  button {
    background-color: transparent;
    border: none;
    font-family: "Comfortaa", sans-serif;
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
  /* background: blue; */
  flex: 50%;
  /* height: 125px; */
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

const RankList = styled.div`
  background: Red;
  width: 350px;
  height: 25px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  h4 {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    letter-spacing: -0.03em;
  }
`;

const Input = styled.form`
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
