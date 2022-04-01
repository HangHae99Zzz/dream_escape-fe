import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Users from '../../Element/MainUsers';
import Timer from './Timer';
import Manual from './Manual';

import { SvgMic } from '../../../Asset/Icon/etc/svg_etc';

const GameUsers = ({
    gameEnd,
    setGameEnd,
    gamePassed,
    chance,
    isFirst,
    setIsFirst,
}) => {
    const { count, countLimit } = useSelector(({ game }) => game);
    const { myNickName } = useSelector(({ room }) => room);

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
                <Score>
                    <p>찬스</p>
                    <p>{chance}/2</p>
                </Score>
                <TimerWrapper>
                    <p>타이머</p>
                    <Timer
                        setGameTime={setGameTime}
                        gameEnd={gameEnd}
                        setGameEnd={setGameEnd}
                        gamePassed={gamePassed}
                        isFirst={isFirst}
                        setIsFirst={setIsFirst}
                    />
                </TimerWrapper>
            </GameInfo>
            <ManualWrapper>
                <Manual />
            </ManualWrapper>
            <MyInfo>
                <MyMic myNickName={myNickName}>
                    <SvgMic />
                </MyMic>
                <p>{myNickName?.nickName}</p>
            </MyInfo>
        </Container>
    );
};

export default GameUsers;

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
    top: 88px;

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

const ManualWrapper = styled.div`
    position: absolute;
    left: 50px;
    bottom: 55px;
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

    display: flex;
    justify-content: center;
    align-items: center;
    p {
        padding-top: 8px;

        font-weight: 800;
        font-size: 14px;
        line-height: 17px;
    }
`;

const MyMic = styled.div`
    width: 76px;
    height: 76px;

    border-radius: 50%;
    background-image: url(${props => props.myNickName?.img});
    background-size: contain;

    display: flex;
    justify-content: center;
    align-items: center;
`;
