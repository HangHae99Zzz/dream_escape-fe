import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { actionCreator as roomActions } from '../../../redux/modules/room';
import { actionCreator as userActions } from '../../../redux/modules/user';
import { actionCreator as gameActions } from '../../../redux/modules/game';

import { MuteButton } from '../../Element';

const WaitModal = ({ closeModal }) => {
    const dispatch = useDispatch();
    const { socket } = useSelector(({ socket }) => socket);
    const { roomInfo, peers } = useSelector(({ room }) => room);
    const { isCreator } = useSelector(({ user }) => user);

    const navigate = useNavigate();

    useEffect(() => {
        socket.on('loadingComplete', data => {
            navigate('/loading');
            setTimeout(() => {
                dispatch(gameActions.gameStart());
            }, 2000);
        });
    }, []);

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

    return (
        <ModalWindow>
            <ExitContainer>
                <XIcon
                    src="image/x.svg"
                    alt=""
                    onClick={() => exit(socket.id)}
                />
            </ExitContainer>
            <div>
                <RoomName>{roomInfo?.teamName}</RoomName>
            </div>
            <Label>현재인원</Label>
            <UserWrapper>
                {peers?.map((peer, i) => (
                    <UserContainer key={i}>
                        <UserImg img={peer.img} />
                        {peer.nickName}
                    </UserContainer>
                ))}
            </UserWrapper>
            <Label>게임방</Label>
            <ImgContainer>
                <MuteButton abs={true}> </MuteButton>
            </ImgContainer>
            <div>
                {isCreator ? (
                    <MakeButton onClick={start}>게임시작</MakeButton>
                ) : (
                    <MakeButton disabled>대기중</MakeButton>
                )}
            </div>
            <CopyContaier>
                <img src="image/clip.png" alt="" />
                <div>링크복사</div>
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
    margin-bottom: 47px;
    font-family: Pretendard;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */
    text-align: center;
    letter-spacing: -0.03em;

    color: #5668e8;
`;
const Label = styled.div`
    margin-bottom: 16px;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    letter-spacing: -0.03em;

    color: #000000;
`;
const UserWrapper = styled.div`
    width: 48%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 44px;
`;
const UserContainer = styled.div`
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
    width: 15.625vw;
    height: 10.417vw;
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

export default WaitModal;
