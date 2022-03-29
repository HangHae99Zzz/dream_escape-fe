import React from "react";
import styled from "styled-components";
import { SvgXW } from "../../../Asset/Icon/etc/svg_etc";

const SurveyModal = ({ setSurveyModalOpen }) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <TitleCloseBtn>
          <button
            onClick={() => {
              setSurveyModalOpen(false);
            }}
          >
            <SvgXW />
          </button>
        </TitleCloseBtn>

        <img src="" alt="" />

        <SurveyData>
          <h1>게임에 잘 참여하고 계신가요</h1>

          <p>
            진행 도중 게임을 그만두고 싶으시거나
            <br />
            불편하신 부분이 있다면 아래 링크를 눌러
            <br />
            의견을 남겨주세요
          </p>

          <a href="https://bit.ly/3uyuAoN">https://bit.ly/3uyuAoN</a>
        </SurveyData>
      </ModalContainer>
    </ModalBackground>
  );
};

export default SurveyModal;

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
  width: 350px;
  height: 450px;
  border-radius: 31px;
  background: rgba(46, 44, 55, 0.9);

  display: flex;
  flex-direction: column;

  padding: 45px;
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

const SurveyData = styled.div`
  h1 {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    text-align: center;
    letter-spacing: -0.03em;

    color: #ffffff;

    margin-bottom: 24px;
  }
  p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 160%;
    /* or 24px */

    letter-spacing: -0.03em;

    color: #bbbbbb;

    margin-bottom: 29px;
  }

  a {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */

    text-align: center;
    letter-spacing: -0.03em;
    text-decoration-line: underline;

    color: #ffffff;
  }
`;
