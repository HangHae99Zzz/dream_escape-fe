import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { actionCreator as roomActions } from '../redux/modules/room';

import { WaitModal, ModalBG } from '../modal/index';

const RoomList = () => {
    const dispatch = useDispatch();
    const { roomList } = useSelector(({ room }) => room);
    const { roomInfo } = useSelector(({ room }) => room);
    const [openWaitModal, setOpenWaitModal] = useState(false);

    const enterRoom = roomId => {
        // roomInfo 업데이트
        dispatch(roomActions.refRoom(roomId));
        // modal
        setOpenWaitModal(true);
    };

    useEffect(() => {
        dispatch(roomActions.refRoomList());
        console.log(roomInfo);
    }, [roomInfo]);

    return (
        <RoomLi>
            {roomList &&
                roomList.map((room, i) => {
                    return (
                        <RoomWrapper
                            // onClick={() => setOpenWaitModal(true)}
                            onClick={() => enterRoom(room.roomId)}
                            key={i}
                        >
                            <Left>
                                <Top>
                                    <Title>{room.teamName}</Title>
                                    {room.startAt ? (
                                        <Time>`${room.count}분째 탈출중`</Time>
                                    ) : (
                                        <Wait>대기중</Wait>
                                    )}
                                </Top>
                                <Bottom>
                                    <IconContainer>
                                        현재인원
                                        <MemberIcon
                                            src={
                                                process.env.PUBLIC_URL +
                                                'icons/contents/peers.svg'
                                            }
                                            alt="참가자 수: "
                                        />
                                        {room.currentNum}
                                    </IconContainer>

                                    <MemberContainer>
                                        <Member>닉네임 1</Member>
                                        <Member>닉네임 2</Member>
                                        <Member>닉네임 3</Member>
                                    </MemberContainer>
                                </Bottom>
                            </Left>
                            <Right>
                                <UserImg></UserImg>
                                <Creator>방장</Creator>
                            </Right>
                        </RoomWrapper>
                    );
                })}
            {openWaitModal && (
                <>
                    <ModalBG closeModal={setOpenWaitModal} />
                    <WaitModal closeModal={setOpenWaitModal} />
                </>
            )}
        </RoomLi>
    );
};

const RoomLi = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const RoomWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 48%;
    height: 285px;
    margin-bottom: 40px;
    cursor: pointer;
    background: #ffffff;
    box-sizing: border-box;
    /* main_shadow */
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    padding: 45px;
    :hover {
        outline: 4px solid #5668e8;
    }
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    line-height: 24px;
`;

const Top = styled.div``;

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 7px;
`;

const Time = styled.div`
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;

    color: #5668e8;
`;

const Wait = styled.div`
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height */
    letter-spacing: -0.03em;

    color: #43e3bd;
`;

const Bottom = styled.div``;

const IconContainer = styled.div`
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 8px;
`;

const MemberIcon = styled.img`
    margin: 0 8px;
`;

const MemberContainer = styled.div`
    display: flex;
`;

const Member = styled.div`
    background: #5668e8;
    border-radius: 30px;
    padding: 7px 14px;
    margin-right: 8px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    letter-spacing: -0.03em;
    color: #fff;
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const UserImg = styled.div`
    background-image: url('/images/userImg_ex.png');
    width: 100px;
    /* min-width: 60px; */
    height: 100px;
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    margin-bottom: 8px;
`;

const Creator = styled.div`
    font-weight: 800;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    letter-spacing: -0.03em;

    color: #5668e8;
`;

export default RoomList;
