import React, { useState } from 'react';
import styled from 'styled-components';

import { RoomList } from './index';

const Contents = () => {
    const [page, setPage] = useState(1);

    const pagination = page => {
        setPage(page + 1);
    };

    return (
        <>
            <FlexContainer>
                <Banner src="image/banner.png"></Banner>
                <RoomListContainer>
                    <RoomListHeader>
                        <Sub>게임방리스트</Sub>
                        <Selector>
                            <option>최신순 </option>
                        </Selector>
                    </RoomListHeader>
                    <RoomList page={page}></RoomList>
                </RoomListContainer>
            </FlexContainer>
            <MoreBtn onClick={() => pagination(page)}>
                <span>더보기</span>
            </MoreBtn>
        </>
    );
};

const FlexContainer = styled.div`
    width: 85%;
    height: 100%;
    margin-top: 36px;
`;

const Banner = styled.img`
    width: 100%;
    object-fit: contain;
`;

const RoomListContainer = styled.div`
    width: 100%;
`;

const RoomListHeader = styled.div`
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

const Sub = styled.h3`
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height */
    letter-spacing: -0.03em;

    color: #000000;
`;

const Selector = styled.select`
    width: 84px;
    height: 33px;
    padding-left: 15px;
    border: 2px solid #394ddb;
    box-sizing: border-box;
    border-radius: 19px;
    appearance: none;
    background-image: url('image/downArrow.png');
    background-repeat: no-repeat;
    background-position-x: 56px;
    background-position-y: 12px;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.03em;
    color: #394DDB;
}
`;

const MoreBtn = styled.button`
    position: relative;
    width: 121px;
    height: 40px;
    background: #ffffff;
    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.15);
    border-radius: 38px;
    margin: 32px;

    font-size: 20px;
    color: #5668e8;
    cursor: pointer;

    background-image: url('image/emptyDownArrow.svg');
    background-repeat: no-repeat;
    background-position-x: 82px;
    background-position-y: 15px;
    span {
        position: absolute;
        left: 22px;
        top: 10px;
    }
`;

export default Contents;
