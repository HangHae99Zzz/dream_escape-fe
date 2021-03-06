import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreator as rankActions } from '../../../redux/modules/rank';
import { actionCreator as userActions } from '../../../redux/modules/user';
import { EndingRankList } from './index';

function GameEndModal({ setGameEnd, quizType, setIsCredit }) {
    const inputRef = useRef('');
    const dispatch = useDispatch();
    const rank = useSelector(state => state.rank.gameRank);
    const roomId = useSelector(state => state.room.roomInfo.roomId);

    const handleComment = () => {
        console.log(inputRef.current.value);
        dispatch(userActions.writeComment(inputRef.current.value));
        setIsCredit(true);
    };

    const onKeyDown = e => {
        if (e.key == 'Enter') {
            handleComment();
        }
    };

    useEffect(() => {
        // 랭킹 가져오기
        setTimeout(() => {
            dispatch(rankActions.onGameRank(roomId));
        }, 1000);
    }, []);

    return (
        <ModalBackground>
            <ModalContainer>
                <Title>
                    <h1>게임종료</h1>
                </Title>
                <Body>
                    <EndingRankList list={rank}></EndingRankList>
                </Body>
                <InputWrapper>
                    <label>
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="한줄평을 남겨보세요!"
                            onKeyDown={onKeyDown}
                        />
                    </label>
                </InputWrapper>
                <Footer>
                    <button
                        onClick={() => {
                            setGameEnd(false);
                            handleComment();
                        }}
                    >
                        확인
                    </button>
                    {/* <a href="https://bit.ly/3uyuAoN">
            <button>설문참여</button>
          </a>
          <p>
            설문에 참여해 주신 분들께 추첨을 통해 기프티콘을 선물로 드립니다.
          </p> */}
                </Footer>
            </ModalContainer>
        </ModalBackground>
    );
}

export default GameEndModal;

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

const Title = styled.div`
    display: inline-block;
    text-align: center;
    margin-top: 10px;
    h1 {
        font-weight: 700;
        font-size: 28px;
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

const InputWrapper = styled.div`
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
        outline: none;
    }
`;

const Footer = styled.div`
    flex: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    p {
        font-weight: 500;
        font-size: 15px;
        line-height: 160%;
        color: #bbbbbb;
    }
`;
