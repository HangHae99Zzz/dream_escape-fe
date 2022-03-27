import React from 'react';
import styled, { keyframes } from 'styled-components';

const EndingCredit = () => {
    return (
        <Container>
            <DivContainer>
                <Title>
                    <h1>THE END..</h1>
                    <p>드디어 깼다, 아니 깨어났다</p>
                    <p>
                        그런데 뭔가 이상하다. 아직도 꿈을 꾸는 기분이다. <br />{' '}
                        과연 이 현실이 내 현실이 맞는가
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

const sober = keyframes`
/* 0% {
    backdrop-filter: hue-rotate(30deg)
}85% {
    backdrop-filter:hue-rotate(120deg)
}100% {backdrop-filter: hue-rotate(30deg)} */
0% {
    backdrop-filter: contrast(1)
}30% {
    backdrop-filter: contrast(0.8)
}100% {backdrop-filter: contrast(.1)}
`;

const slideUp = keyframes`
  from {
    transform: translateY(500px);
  }
  to {
    transform: translateY(-200px);
  }
`;

const Container = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: #000000d4;
    color: white;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: hidden;

    animation-duration: 3s;
    /* animation-timing-function: cubic-bezier(0, -0.64, 1, 1.46); */
    animation-name: ${sober};
    animation-fill-mode: forwards;
    /* animation-iteration-count: infinite; */
`;

const DivContainer = styled.div`
    width: 500px;

    animation-duration: 13s;
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
    }
    p {
        font-weight: 600;
        font-size: 18px;
        line-height: 160%;
        /* or 29px */

        text-align: center;
    }
`;

const Credit = styled.div`
    margin-top: 100px;

    text-align: center;

    h1 {
        font-weight: 700;
        font-size: 48px;
        line-height: 58px;
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
    }
`;

const Name = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
