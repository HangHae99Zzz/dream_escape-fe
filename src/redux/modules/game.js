import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

import instance from '../../shared/request';

const sessionRoomId = sessionStorage.getItem('sessionRoomId');

// actions

// Action Creators

// initialState
const initialState = {};

//  middleware Actions
const gameStart = () => {
    return function (dispatch, getState) {
        const sessionRoomId = sessionStorage.getItem('sessionRoomId');
        console.log(`방이름: ${sessionRoomId} 시작합니다!`);
        instance.post(`/game/${sessionRoomId}`).catch(err => console.log(err));
    };
};

// 게임 종료하기
const deleteGame = () => {
    console.log('deleteGame 미들웨어 도착');
    return function (dispatch, getState) {
        instance
            .delete(`/game/${sessionRoomId}/ending`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };
};

export default handleActions({}, initialState);

// action creator export
const actionCreator = {
    gameStart,
    deleteGame,
};

export { actionCreator };
