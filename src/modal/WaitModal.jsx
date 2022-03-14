import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { actionCreator as roomActions } from '../redux/modules/room';
import { actionCreator as userActions } from '../redux/modules/user';

import { MuteButton } from '../elements/index';

const WaitModal = ({ closeModal }) => {
    const dispatch = useDispatch();
    const { socket } = useSelector(({ socket }) => socket);
    const { userId } = useSelector(({ user }) => user);
    const { roomInfo } = useSelector(({ room }) => room);

    const navigate = useNavigate();
    const exit = userId => {
        dispatch(userActions.deleteUser(userId));
        socket.close();
        dispatch(userActions.setIsIn(false));
        dispatch(roomActions.getRoomInfo(null));
        console.log(socket);
        closeModal(false);
        // isfirst false, roominfo null
    };

    return (
        <ModalWindow>
            <ExitContainer>
                <XIcon
                    src="/icons/contents/x.svg"
                    alt=""
                    onClick={() => exit(userId)}
                />
            </ExitContainer>
            <div>
                <RoomName>{roomInfo?.teamName}</RoomName>
            </div>
            <Label>현재인원</Label>
            <UserWrapper>
                {roomInfo?.userList.map((user, i) => (
                    <UserContainer key={i}>
                        <UserImg />
                        {user}
                    </UserContainer>
                ))}
            </UserWrapper>
            <Label>게임방</Label>
            <ImgContainer>
                <MuteButton abs={true}> </MuteButton>
            </ImgContainer>
            <div>
                {userId === roomInfo?.createdUser ? (
                    <MakeButton
                        onClick={() => {
                            navigate('/game');
                        }}
                    >
                        게임시작
                    </MakeButton>
                ) : (
                    <MakeButton disabled>대기중</MakeButton>
                )}
            </div>
            <CopyContaier>
                <img src="/icons/contents/clip.png" alt="" />{' '}
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
  text-align: center;
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
