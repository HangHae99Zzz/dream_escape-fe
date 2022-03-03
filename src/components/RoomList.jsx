import React from 'react';

import styled from 'styled-components';

const RoomList = () => {
    return (
        <RoomLi>
            <RoomWrapper>
                <Room></Room>
                <FooterContainer>
                    <FooterTop>
                        오늘우리가찢는다!!!!!!!!!!!다들...
                        <img
                            src={process.env.PUBLIC_URL + 'icons/peers.svg'}
                            alt="ddd"
                        />
                        4
                    </FooterTop>
                    <FooterBottom>20분째 탈출중</FooterBottom>
                </FooterContainer>
            </RoomWrapper>
        </RoomLi>
    );
};

const RoomLi = styled.div`
    display: flex;
    background-color: aliceblue;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

const RoomWrapper = styled.div`
    border: 1px solid black;
    border: 1px solid black;
    width: 250px;
    height: 300px;
    margin: 1%;
`;

const Room = styled.div`
    background-color: #e3e3e3;
    width: 250px;
    height: 250px;
    border-radius: 30px;
`;

const FooterContainer = styled.div`
    border: 1px solid blue;
`;

const FooterTop = styled.div``;

const FooterBottom = styled.div``;

export default RoomList;
