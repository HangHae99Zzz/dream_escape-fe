import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { actionCreator as roomActions } from '../../../redux/modules/room';
import { actionCreator as userActions } from '../../../redux/modules/user';

import { MuteButton } from '../../Element';
import { WaitModal } from './index';

const RoomCreateModal = ({ closeModal }) => {
    const dispatch = useDispatch();

    const { socket } = useSelector(({ socket }) => socket);

    const teamNameRef = useRef();

    const [waitModal, SetWaitModal] = useState(false);

    const makeRoom = () => {
        const teamName = teamNameRef.current.value;

        if (!teamName) return alert('팀 이름을 입력해주세요');
        if (teamName.length > 15) return alert('15자 이내로 작성해주세요');
        dispatch(userActions.isCreator(true));
        dispatch(roomActions.makeRoom(teamName, socket.id));
        SetWaitModal(true);
    };

    return (
        <>
            {waitModal ? (
                <WaitModal closeModal={closeModal} />
            ) : (
                <ModalWindow>
                    <FlexContainer>
                        <ExitContainer>
                            <XIcon
                                src="image/x.svg"
                                alt="X"
                                width={'auto'}
                                onClick={() => closeModal(false)}
                            />
                        </ExitContainer>
                        <div>
                            <NameInput
                                ref={teamNameRef}
                                placeholder="팀 이름을 입력하세요"
                            ></NameInput>
                        </div>
                        <MicContiner>
                            <div>보이스채팅 마이크</div>
                            <MuteButton> </MuteButton>
                        </MicContiner>
                    </FlexContainer>
                    <FlexContainer>
                        <div>
                            <MakeButton onClick={() => makeRoom()}>
                                방 개설하기
                            </MakeButton>
                        </div>
                        <FooterContainer></FooterContainer>
                    </FlexContainer>
                </ModalWindow>
            )}
        </>
    );
};

const ModalWindow = styled.div`
    position: fixed;
    z-index: 3;
    width: 37.292vw;
    height: 400px;
    left: 31.354vw;
    top: 112px;
    background: #ffffff;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const ExitContainer = styled.div`
    position: relative;
    width: 100%;
    height: 60px;
    margin-bottom: 40px;
`;
const XIcon = styled.img`
    position: absolute;
    top: 39px;
    right: 39px;
`;
const NameInput = styled.input`
    width: 23.073vw;
    height: 60px;
    left: 738px;
    top: 196px;

    border: 3px solid #5668e8;
    box-sizing: border-box;
    border-radius: 7px;
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    ::placeholder {
        text-align: center;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;

        color: #a4afff;
    }
`;
const MicContiner = styled.div`
    width: 48%;
    display: flex;
    height: 64px;
    align-items: center;
    justify-content: space-evenly;
`;

const MakeButton = styled.button`
    width: 180px;
    height: 54px;
    margin: 30px;
    background: #5668e8;
    border: 3px solid #5668e8;
    box-sizing: border-box;
    border-radius: 30px;
    font-weight: 900;
    font-size: 18px;
    line-height: 22px;
    text-align: center;

    color: #ffffff;
`;

const FooterContainer = styled.div`
    margin-bottom: 42px;
    font-size: 14px;
    line-height: 17px;

    color: #9a9a9a;
`;

export default RoomCreateModal;
