import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Users from '../elements/Users';
import { Timer } from '../elements/index';
import { SvgMic, SvgMyMic } from '../icons/etc/svg_etc';

const InGameUsers = ({ gameEnd }) => {
    const { count, countLimit } = useSelector(({ game }) => game);

    const [gameTime, setGameTime] = useState('');

    return (
        <Container>
            {/* 다른 인원수만큼 props로 넘겨서 map으로 처리 */}
            <OtherUsers>
                <Users></Users>
            </OtherUsers>
            <GameInfo>
                <Score>
                    <p>스코어</p>
                    <p>
                        {count}/{countLimit}
                    </p>
                </Score>
                <TimerWrapper>
                    <p>타이머</p>
                    <Timer setGameTime={setGameTime} gameEnd={gameEnd} />
                </TimerWrapper>
            </GameInfo>
            <MyInfo>
                <MyMic>
                    <SvgMic />
                </MyMic>
                <p>닉네임123</p>
            </MyInfo>
        </Container>
    );
};

export default InGameUsers;

const Container = styled.div`
    color: white;

    /* box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3); */

    width: 100%;
    height: 100vh;
    position: absolute;
    display: flex;
    overflow: hidden;

    z-index: 1;
`;

const OtherUsers = styled.div`
    position: absolute;
    left: 54px;
    top: 54px;

    background: rgba(255, 255, 255, 0.25);
    border-radius: 30px;
`;

const GameInfo = styled.div`
    position: absolute;
    right: 54px;
    top: 54px;
`;

const Score = styled.div`
    background: rgba(255, 255, 255, 0.25);
    width: 244px;
    height: 60px;

    margin-bottom: 10px;
    padding: 20px;

    border: 2px solid #ffffff;
    box-sizing: border-box;
    border-radius: 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TimerWrapper = styled.div`
    width: 244px;
    height: 60px;

    padding: 20px;

    background: rgba(255, 255, 255, 0.25);
    border: 2px solid #ffffff;
    box-sizing: border-box;
    border-radius: 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MyInfo = styled.div`
    position: absolute;
    width: 244px;
    height: 149px;
    right: 58px;
    bottom: 47px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: rgba(255, 255, 255, 0.25);
    border-radius: 30px;

    p {
        padding-top: 8px;

        font-weight: 800;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */

        letter-spacing: -0.03em;
    }
`;

const MyMic = styled.div`
    width: 76px;
    height: 76px;

    border-radius: 50%;
    background-image: url('./images/mymic.png');

    display: flex;
    justify-content: center;
    align-items: center;

    :after {
        content: 'Here is some text..';
        color: #fff;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6);
        opacity: 0;
        transition: all 0.5s;
        -webkit-transition: all 0.5s;
    }
    &:hover:after {
        opacity: 1;
    }
`;
