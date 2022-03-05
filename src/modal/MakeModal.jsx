import React, { useState } from 'react';
import styled from 'styled-components';

import { MuteButton } from '../elements/index';
import { WaitModal } from './index';

const MakeModal = ({ closeModal }) => {
    const [waitModal, SetWaitModal] = useState(false);

    return (
        <>
            {waitModal ? (
                <WaitModal closeModal={closeModal} />
            ) : (
                <ModalWindow>
                    <ExitContainer>
                        <XIcon
                            src="/icons/x.svg"
                            alt=""
                            onClick={() => closeModal(false)}
                        />
                    </ExitContainer>
                    <div>
                        <NameInput placeholder="방 이름을 입력하세요"></NameInput>
                    </div>
                    <MicContiner>
                        <div>보이스채팅 마이크</div>
                        <MuteButton> </MuteButton>
                    </MicContiner>
                    <ImgContainer></ImgContainer>
                    <div>
                        <MakeButton onClick={() => SetWaitModal(true)}>
                            방 개설하기
                        </MakeButton>
                    </div>
                    <CopyContaier>
                        <img src="/icons/clip.svg" alt="" /> <div>링크복사</div>
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
    width: 716px;
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
    width: 443px;
    height: 60px;
    left: 738px;
    top: 196px;

    border: 3px solid #5668e8;
    box-sizing: border-box;
    border-radius: 7px;
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
    width: 600px;
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
