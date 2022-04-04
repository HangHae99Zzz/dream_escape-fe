import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { actionCreator as userActions } from '../../redux/modules/user';

const MakeRoomBtn = ({ setOpenRoomCreateModal, block }) => {
    const dispatch = useDispatch();
    const create = () => {
        setOpenRoomCreateModal(true);
    };

    return (
        <Btn block={block} onClick={create}>
            방탈출 방 만들기
        </Btn>
    );
};

const Btn = styled.div`
    position: ${props => (props.block ? 'inherit' : 'fixed')};
    width: 240px;
    height: 62px;

    right: 37.8%;
    bottom: 44px;

    backdrop-filter: blur(30px);

    border: 3px solid #5668e8;
    box-sizing: border-box;
    box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.15);
    border-radius: 30px;
    font-weight: 900;
    font-size: 18px;
    line-height: 53px;
    text-align: center;

    color: #5668e8;

    cursor: pointer;
    z-index: 1;

    :hover {
        background: #ffffff;
    }
`;

export default MakeRoomBtn;
