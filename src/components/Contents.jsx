import React from 'react';
import styled from 'styled-components';

import { RoomList } from './index';

const Contents = () => {
    return (
        <FlexContainer>
            <Banner></Banner>
            <RoomListContainer>
                <RoomListHeader>
                    <h3 style={{ fontSize: '20px' }}>게임방리스트</h3>
                    <Selector>
                        <option>최신순</option>
                    </Selector>
                </RoomListHeader>
                <RoomList></RoomList>
            </RoomListContainer>
        </FlexContainer>
    );
};

const FlexContainer = styled.div`
    width: 85%;
    height: 100%;
`;

const Banner = styled.div`
    width: 100%;
    height: 368px;
    /* background-color: aliceblue; */
    background-image: url('/images/20220302_010744 1.png');
    background-repeat: no-repeat;
    border-radius: 77px;
    background-size: cover;
`;

const RoomListContainer = styled.div`
    width: 100%;
    height: 464px;

    /* background-color: yellow; */
    overflow: auto;
    ::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`;

const RoomListHeader = styled.div`
    /* background-color: pink; */
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding-top: 14px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-items: flex-end;
    -webkit-box-align: flex-end;
    -ms-flex-align: flex-end;
    height: 80px;
    align-items: center;
`;

const Selector = styled.select`
    width: 84px;
    height: 33px;
    padding-left: 16px;
    border: 2px solid #394ddb;
    box-sizing: border-box;
    border-radius: 19px;
    color: #394ddb;
    appearance: none;
    background-image: url('/icons/DownArrow.png');
    background-repeat: no-repeat;
    background-position-x: 55px;
    background-position-y: 12px;
`;

export default Contents;
