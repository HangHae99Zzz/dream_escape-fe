import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import axios from 'axios';

import { WaitModal, ModalBG } from '../modal/index';

const RoomList = () => {
    const [rooms, setRooms] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    useEffect(() => {
        axios
            .get('https://banwonjae.shop:8080/user')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const [openWaitModal, setOpenWaitModal] = useState(false);

    return (
        <RoomLi>
            {rooms.map(room => {
                return (
                    <RoomWrapper onClick={() => setOpenWaitModal(true)}>
                        <Room></Room>
                        <FooterContainer>
                            <FooterTop>
                                오늘우리가찢는다!!!!!!!!!!!다들...
                                <IconContainer>
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            'icons/contents/peers.svg'
                                        }
                                        alt="참가자 수: "
                                    />
                                    4
                                </IconContainer>
                            </FooterTop>
                            <FooterBottom>20분째 탈출중</FooterBottom>
                        </FooterContainer>
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
    width: 250px;
    height: 300px;
    margin: 1% 1% 1% 0;
    cursor: pointer;
`;

const Room = styled.div`
    background-color: #e3e3e3;
    width: 250px;
    height: 250px;
    border-radius: 30px;
`;

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 24px;
    margin: 14px 12px;
`;

const FooterTop = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
`;

const IconContainer = styled.div``;

const FooterBottom = styled.div`
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;

    color: #394ddb;
`;

export default RoomList;
