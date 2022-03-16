import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThreeRoom } from '../components/index';
import { actionCreator as roomActions } from '../redux/modules/room';
import Modal from '../modal/Modal';

const GameRoom = () => {
    // const dispatch = useDispatch();

    // // useEffect(() => {
    // //     const sessionRoomId = sessionStorage.getItem('sessionRoomId');
    // //     dispatch(roomActions.refRoom(sessionRoomId));
    // // }, []);
    return (
        <div>
            <ThreeRoom />
        </div>
    );
};

export default GameRoom;
