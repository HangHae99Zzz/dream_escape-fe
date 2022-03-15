import React, { useState } from 'react';
import styled from 'styled-components';

import Users from '../elements/Users';
import { Timer } from '../elements/index';
import { SvgMic, SvgMyMic } from '../icons/etc/svg_etc';

const InGameUsers = () => {
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
                    <p>02/15</p>
                </Score>
                <TimerWrapper>
                    <p>타이머</p>
                    <Timer setGameTime={setGameTime} />
                </TimerWrapper>
            </GameInfo>
            <MyInfo>
                <div>
                    <MyMic>
                        <SvgMyMic />
                        <SvgMic style={{ position: 'absolute' }} />
                    </MyMic>
                    <p>닉네임</p>
                </div>
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
    justify-content: center;
    align-items: center;

    background: rgba(255, 255, 255, 0.25);
    border-radius: 30px;
`;

const MyMic = styled.div`
    width: 76px;
    height: 76px;

    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
`;
