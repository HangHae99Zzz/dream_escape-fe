import React from 'react';
import styled from 'styled-components';

import ModalBG from './ModalBG';
import { MuteButton } from '../elements/index';

const WaitModal = () => {
    return (
        <ModalBG>
            <ModalWindow>
                <ExitContainer>
                    <XIcon src="/icons/x.svg" alt="" />
                </ExitContainer>
                <div>
                    <RoomName>방구석 대탈출ㅋㅋ</RoomName>
                </div>
                <div>현재인원</div>
                <UserWrapper>
                    <UserContainer>아이들</UserContainer>
                    <UserContainer>아이들</UserContainer>
                    <UserContainer>아이들</UserContainer>
                    <UserContainer>아이들</UserContainer>
                </UserWrapper>
                게임방
                <ImgContainer>
                    <MuteButton> </MuteButton>
                </ImgContainer>
                <div>
                    <MakeButton>게임시작</MakeButton>
                </div>
                <CopyContaier>
                    <img src="/icons/clip.svg" alt="" /> <div>링크복사</div>
                </CopyContaier>
                <FooterContainer>
                    친구들에게 공유하시면 함께 즐길 수 있어요
                </FooterContainer>
            </ModalWindow>
        </ModalBG>
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
const RoomName = styled.h3`
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    /* identical to box height */
    letter-spacing: -0.03em;

    color: #5668e8; ;
`;
const UserWrapper = styled.div`
    width: 48%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;
const UserContainer = styled.div``;
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

export default WaitModal;
