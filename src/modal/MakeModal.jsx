import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreator as roomActions } from '../redux/modules/room';
import styled from 'styled-components';

import { MuteButton } from '../elements/index';
import { WaitModal } from './index';

const MakeModal = ({ closeModal }) => {
    const dispatch = useDispatch();

    const { userId } = useSelector(({ user }) => user);

    const teamNameRef = useRef();

    const [waitModal, SetWaitModal] = useState(false);

    const makeRoom = () => {
        const teamName = teamNameRef.current.value;

        dispatch(roomActions.makeRoom(teamName, userId));

        SetWaitModal(true);
    };

    return (
        <>
            {waitModal ? (
                <WaitModal closeModal={closeModal} />
            ) : (
                <ModalWindow>
                    <ExitContainer>
                        <XIcon
                            src="/icons/contents/x.svg"
                            alt=""
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
                    <ImgContainer></ImgContainer>
                    <div>
                        <MakeButton onClick={() => makeRoom()}>
                            방 개설하기
                        </MakeButton>
                    </div>
                    <CopyContaier>
                        <img src="/icons/contents/clip.png" alt="" />{' '}
                        <div>링크복사</div>
                    </CopyContaier>
                    <FooterContainer>
                        친구들에게 공유하시면 함께 즐길 수 있어요
                    </FooterContainer>
                </ModalWindow>
            )}
        </>
    );
};

const ModalWindow = styled.div`
    position: fixed;
    z-index: 3;
    width: 37.292vw;
    height: 733px;
    left: 31.354vw;
    top: 112px;
    background: #ffffff;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ExitContainer = styled.div`
    position: relative;
    width: 100%;
    height: 60px;
`;
const XIcon = styled.img`
    position: absolute;
    top: 39px;
    right: 42px;
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
    letter-spacing: -0.03em;
    ::placeholder {
        text-align: center;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        /* identical to box height */
        letter-spacing: -0.03em;

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
const ImgContainer = styled.div`
    width: 31.25vw;
    height: 400px;
    background: #e3e3e3;
    border-radius: 30px;
`;
const MakeButton = styled.button`
    width: 180px;
    height: 54px;
    margin: 32px;
    background: #5668e8;
    border: 3px solid #5668e8;
    box-sizing: border-box;
    border-radius: 30px;
    font-weight: 900;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    text-align: center;
    letter-spacing: -0.03em;

    color: #ffffff;
`;
const CopyContaier = styled.div`
    width: 12%;
    display: flex;
    font-size: 17px;
    font-weight: 600;
    color: #5668e8;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
`;
const FooterContainer = styled.div`
    margin-bottom: 42px;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.03em;

    color: #9a9a9a;
`;

export default MakeModal;
