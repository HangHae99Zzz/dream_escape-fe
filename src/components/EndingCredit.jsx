import React from "react";
import styled, { keyframes } from "styled-components";

const EndingCredit = () => {
  return (
    <Container>
      <DivContainer>
        <Title>
          <h1>THE END..</h1>
          <p>드디어 깼다, 아니 깨어났다</p>
          <p>
            그런데 뭔가 이상하다. 아직도 꿈을 꾸는 기분이다. <br /> 과연 이
            현실이 내 현실이 맞는가
            <br /> 방금 내가 깬 꿈은 꿈이 맞는가
          </p>
        </Title>
        <Credit>
          <h1>Credit</h1>
          <TEXT>
            <p>Designer</p>
            <Name>
              <p>SEO HYE WON</p>
              <p>KIM BO KYUNG</p>
            </Name>
          </TEXT>
          <TEXT>
            <p>DEVELOPER</p>
            <Name>
              <p>KIM GA EUN</p>
              <p>RYU GANG HYUN</p>
              <p>BAN WON JAE</p>
              <p>WOO HYE MIN</p>
              <p>CHOI KYU WON</p>
            </Name>
          </TEXT>
          <TEXT>
            <p>SUPPORTED BY</p>
            <Name>
              <p>HANGHAE99</p>
            </Name>
          </TEXT>
        </Credit>
      </DivContainer>
    </Container>
  );
};

export default EndingCredit;

const slideUp = keyframes`
  from {
    transform: translateY(500px);
  }
  to {
    transform: translateY(-100px);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;
`;

const DivContainer = styled.div`
  width: 500px;

  animation-duration: 10s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

const Title = styled.div`
  margin-top: 165px;
  text-align: center;
  h1 {
    margin-bottom: 72px;

    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    /* identical to box height */

    letter-spacing: -0.03em;
  }
  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 160%;
    /* or 29px */

    text-align: center;
    letter-spacing: -0.03em;
  }
`;

const Credit = styled.div`
  margin-top: 100px;

  text-align: center;

  h1 {
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    /* identical to box height */

    letter-spacing: -0.03em;
  }
`;

const TEXT = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 72px;

  p {
    text-align: right;
    font-weight: 600;
    font-size: 18px;
    line-height: 160%;
    /* or 29px */

    text-align: center;
    letter-spacing: -0.03em;
  }
`;

const Name = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
