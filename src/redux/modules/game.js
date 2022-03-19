import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

import instance from '../../util/request';

// actions
const SET_COUNT = 'SET_COUNT';

// Action Creators
const countUp = createAction(SET_COUNT, count => ({ count }));

// initialState
const initialState = {
    count: 0,
    countLimit: 1,
    // 나중에 타이머 멈추고 클릭 막을것 필요
};

//  middleware Actions
const gameStart = () => {
    return function (dispatch, getState) {
        const sessionRoomId = sessionStorage.getItem('sessionRoomId');
        console.log(`방이름: ${sessionRoomId} 시작합니다!`);
        instance.post(`/game/${sessionRoomId}`).catch(err => console.log(err));
    };
};

// 게임 종료하기
const deleteGame = (roomId, time) => {
    console.log('deleteGame 미들웨어 도착');
    const sessionRoomId = sessionStorage.getItem('sessionRoomId');
    return function (dispatch, getState) {
        instance
            .post(`/game/${sessionRoomId}/ending`, {
                time: time,
            })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };
};

export default handleActions(
    {
        [SET_COUNT]: (state, action) =>
            produce(state, draft => {
                draft.count = action.payload.count;
            }),
    },
    initialState
);

// action creator export
const actionCreator = {
    gameStart,
    deleteGame,
    countUp,
};

export { actionCreator };
