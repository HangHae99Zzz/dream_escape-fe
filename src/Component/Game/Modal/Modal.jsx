import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import useSound from 'use-sound';

import { actionCreator as quizActions } from '../../../redux/modules/quiz';
import { SvgX } from '../../../Asset/Icon/etc/svg_etc';
import { WrongSound } from '../../../Asset/Sound/mp3_sound';

import Virus from './Virus';

function Modal({
    setModalOpen,
    quizType,
    setGamePassed,
    setGameEnd,
    setIsFirst,
}) {
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const roomId = useSelector(state => state.room.roomInfo.roomId);
    const modalData = useSelector(state => state.quiz);
    const { socket } = useSelector(({ socket }) => socket);
    const { chance, solved } = useSelector(({ game }) => game);
    const [playWrongSound] = useSound(WrongSound);

    const [hintModal, setHintModal] = useState(false);
    const [virusInputOne, setVirusInputOne] = useState('');
    const [virusInputTwo, setVirusInputTwo] = useState('');

    const handleExitgame = () => {
        console.log('Modal.js에서 handleExitgame 실행');
        setGamePassed(true);
        setGameEnd(true);
        setIsFirst(true);
    };

    const handleVirusAnswer = () => {
        let _temp = virusInputOne + ', ' + virusInputTwo;
        if (virusInputOne === '' || virusInputTwo === '') {
            window.alert('답을 모두 입력해주세요');
        } else if (_temp === modalData.answer) {
            dispatch(quizActions.submitResult(roomId, quizType));
            window.alert('정답입니다!');
            setModalOpen(false);
            socket.emit('count', quizType);
        } else {
            playWrongSound();
            window.alert('오답입니다!');
        }
    };

    const handleAnswer = () => {
        if (inputRef.current.value === modalData.answer) {
            dispatch(quizActions.submitResult(roomId, quizType));
            window.alert('정답입니다!');
            setModalOpen(false);
            socket.emit('count', quizType);
            if (quizType === 'Bb') {
                handleExitgame();
            }
        } else {
            playWrongSound();
            window.alert('오답입니다!');
        }
    };

    const handleChance = () => {
        if (hintModal === true) return;
        if (!chance) {
            window.alert('찬스를 모두 소진했습니다');
            return;
        }
        setHintModal(true);
        // chance 1 내리기
        socket.emit('chance');
    };

    const onKeyDown = e => {
        if (e.key == 'Enter') {
            handleAnswer();
        }
    };

    useEffect(() => {
        dispatch(quizActions.refQuiz(roomId, quizType));
    }, [solved]);

    return (
        <>
            {modalData.pass === 'SUCCESS' ? (
                <ModalBackground
                    onClick={() => {
                        document.exitPointerLock();
                    }}
                >
                    <ModalContainer>
                        <TitleCloseBtn>
                            <button
                                onClick={() => {
                                    setModalOpen(false);
                                }}
                            >
                                <SvgX />
                            </button>
                        </TitleCloseBtn>
                        <SolvedTitle>
                            <h1>이미 해결한 문제입니다.</h1>
                        </SolvedTitle>
                    </ModalContainer>
                </ModalBackground>
            ) : (
                <ModalBackground
                    onClick={() => {
                        document.exitPointerLock();
                    }}
                >
                    <ModalContainer>
                        <TitleCloseBtn>
                            <button
                                onClick={() => {
                                    setModalOpen(false);
                                }}
                            >
                                <SvgX />
                            </button>
                        </TitleCloseBtn>

                        <Title>
                            {modalData ? (
                                <h1>{modalData.question}</h1>
                            ) : (
                                <h1>오류</h1>
                            )}
                        </Title>

                        {quizType === 'Ab' ? (
                            <Body>
                                {!modalData ? (
                                    <></>
                                ) : (
                                    <Virus
                                        modalData={modalData}
                                        setVirusInputOne={setVirusInputOne}
                                        setVirusInputTwo={setVirusInputTwo}
                                    />
                                )}
                            </Body>
                        ) : quizType === 'Bb' ? (
                            <>
                                <Body>
                                    <div>
                                        <img
                                            src="https://d2ug3aglf1tff7.cloudfront.net/image/Bb.png"
                                            alt=""
                                            style={{
                                                width: '394px',
                                                height: '260px',
                                            }}
                                        />
                                    </div>
                                    {/*  힌트 이미지 위에 올라간거 디자이너께 받아야 함
                                    <div className="hint">
                                        {modalData ? (
                                            <p>{modalData.hint}</p>
                                        ) : (
                                            <p>오류</p>
                                        )}
                                    </div> */}
                                </Body>
                                <Input>
                                    <label>
                                        <input
                                            ref={inputRef}
                                            type="text"
                                            placeholder="정답을 입력하세요"
                                            autoFocus
                                            onKeyDown={onKeyDown}
                                        />
                                    </label>
                                </Input>
                            </>
                        ) : quizType === 'Ca' ? (
                            <>
                                <Body>
                                    <div>
                                        <img
                                            src="https://d2ug3aglf1tff7.cloudfront.net/image/Ca.png"
                                            alt=""
                                        />
                                    </div>
                                </Body>
                                <Input>
                                    <label>
                                        <input
                                            ref={inputRef}
                                            type="text"
                                            placeholder="정답을 입력하세요"
                                            autoFocus
                                            onKeyDown={onKeyDown}
                                        />
                                    </label>
                                </Input>
                            </>
                        ) : (
                            <>
                                <Body>
                                    <div>
                                        {modalData ? (
                                            <p>{modalData.content}</p>
                                        ) : (
                                            <p>오류</p>
                                        )}
                                    </div>
                                    <div className="hint">
                                        {modalData ? (
                                            <p>{modalData.hint}</p>
                                        ) : (
                                            <p>오류</p>
                                        )}
                                    </div>
                                </Body>
                                <Input>
                                    <label>
                                        <input
                                            ref={inputRef}
                                            type="text"
                                            placeholder="정답을 입력하세요"
                                            autoFocus
                                            onKeyDown={onKeyDown}
                                        />
                                    </label>
                                </Input>
                            </>
                        )}
                        {quizType === 'Ab' ? (
                            <Footer>
                                <button
                                    type="submit"
                                    onClick={handleVirusAnswer}
                                >
                                    제출하기
                                </button>
                            </Footer>
                        ) : (
                            <Footer>
                                <button type="submit" onClick={handleAnswer}>
                                    제출하기
                                </button>
                            </Footer>
                        )}

                        <Hint>
                            <button onClick={() => handleChance()}>
                                찬스보기
                            </button>
                        </Hint>
                    </ModalContainer>
                    {hintModal ? (
                        <HintModal>
                            {modalData ? (
                                <p>{modalData.chance}</p>
                            ) : (
                                <p>찬스가 없습니다.</p>
                            )}
                        </HintModal>
                    ) : null}
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
    padding-right: 7px;
`;

const SolvedTitle = styled.div`
    margin: auto;
    text-align: center;
    h1 {
        font-weight: 700;
        font-size: 28px;
        line-height: 36px;
        color: #5668e8;
    }
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
    .hint p {
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        text-align: center;

        color: #a6b1ff;
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
        outline: none;
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

        color: #5668e8;
    }
`;

const HintModal = styled.div`
    position: absolute;
    bottom: 8vh;
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
        color: #ffffff;
    }
`;
