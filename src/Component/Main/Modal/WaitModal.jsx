import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { actionCreator as roomActions } from '../../../redux/modules/room';
import { actionCreator as userActions } from '../../../redux/modules/user';
import { actionCreator as gameActions } from '../../../redux/modules/game';

import { MuteButton } from '../../Element';

const WaitModal = ({ closeModal }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { socket } = useSelector(({ socket }) => socket);
    const { roomInfo, peers, myNickName } = useSelector(({ room }) => room);
    const { isCreator } = useSelector(({ user }) => user);

    const roomUrl = useRef();
    const clipboardBtn = useRef();

    const copyToClipboard = () => {
        const el = roomUrl.current;
        navigator.clipboard.writeText(el.value);
        clipboardBtn.current.innerText = '복사완료';
    };

    const exit = () => {
        socket.close();
        dispatch(userActions.isIn(false));
        dispatch(userActions.isCreator(false));
        dispatch(roomActions.getRoomInfo(null));
        closeModal(false);
        navigate('/');
    };

    const start = () => {
        socket.emit('loading');
    };

    useEffect(() => {
        socket.on('loadingComplete', data => {
            if (isCreator) {
                setTimeout(() => {
                    dispatch(gameActions.gameStart());
                }, 2000);
            }
            navigate('/loading');
        });
    }, []);

    return !roomInfo?.roomId ? (
        <></>
    ) : (
        <ModalWindow>
            <ExitContainer>
                <XIcon
                    src="https://d2ug3aglf1tff7.cloudfront.net/image/x.svg"
                    alt="X"
                    width={'auto'}
                    onClick={() => exit(socket.id)}
                />
            </ExitContainer>
            <div>
                <RoomName>{roomInfo?.teamName}</RoomName>
            </div>
            <Label>현재인원</Label>
            <UserWrapper>
                <UserContainer>
                    <UserImg img={myNickName?.img} />
                    {myNickName?.nickName}
                </UserContainer>
                {peers?.map((peer, i) => (
                    <UserContainer key={i}>
                        <UserImg img={peer?.img} />
                        {peer?.nickName}
                    </UserContainer>
                ))}
            </UserWrapper>
            <Label>게임방</Label>
            <ImgContainer>
                <MuteButton abs> </MuteButton>
                {isCreator ? (
                    <></>
                ) : (
                    <GuideText>곧 게임이 시작됩니다</GuideText>
                )}
            </ImgContainer>
            <div>
                {isCreator ? (
                    <MakeButton onClick={start}>게임시작</MakeButton>
                ) : (
                    <MakeButton disabled>대기중</MakeButton>
                )}
            </div>
            <CopyContaier onClick={copyToClipboard}>
                <img
                    src="https://d2ug3aglf1tff7.cloudfront.net/image/clip.png"
                    alt=""
                />
                <ClipBoard
                    ref={roomUrl}
                    style={{ display: 'hidden' }}
                    defaultValue={`https://zzz-escape.netlify.app/${roomInfo?.roomId}`}
                ></ClipBoard>
                <div ref={clipboardBtn}>링크복사</div>
            </CopyContaier>
            <FooterContainer>
                친구들에게 공유하시면 함께 즐길 수 있어요
            </FooterContainer>
        </ModalWindow>
    );
};

const ModalWindow = styled.div`
    position: fixed;
    z-index: 3;
    width: 37.292vw;
    height: 733px;
    left: 31.354vw;
    top: 10.832999999999998vh;
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
    cursor: pointer;
`;
const RoomName = styled.h3`
    margin-bottom: 47px;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */
    text-align: center;

    color: #5668e8;
`;
const Label = styled.div`
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

    color: #000000;
`;
const UserWrapper = styled.div`
    width: 48%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-bottom: 40px;
`;

const UserContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 12px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
`;
const UserImg = styled.div`
    width: 76px;
    height: 76px;
    border-radius: 50%;
    background: #ecebeb;
    margin-bottom: 12px;
    background: url(${props => props.img});
    background-size: contain;
`;
const ImgContainer = styled.div`
    position: relative;
    width: 16.625vw;
    height: 10.417vw;
    ::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 30px;
        background-image: url('https://d2ug3aglf1tff7.cloudfront.net/image/room.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        filter: brightness(0.3);
    }
`;

const GuideText = styled.div`
    position: absolute;
    color: #56e8c5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
`;

const MakeButton = styled.button`
    width: 180px;
    height: 54px;
    margin: 32px;
    background: ${({ disabled }) => (disabled ? '#9FAAF7' : '#5668e8')};
    border: ${({ disabled }) => (disabled ? '#9FAAF7' : '3px solid #5668e8;')};
    box-sizing: border-box;
    border-radius: 30px;
    font-weight: 900;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    text-align: center;

    color: #ffffff;
    cursor: ${({ disabled }) => (disabled ? '' : 'pointer')};
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
    cursor: pointer;
`;

const ClipBoard = styled.textarea`
    display: none;
`;

const FooterContainer = styled.div`
    margin-bottom: 42px;
    font-size: 14px;
    line-height: 17px;

    color: #9a9a9a;
`;

export default WaitModal;
