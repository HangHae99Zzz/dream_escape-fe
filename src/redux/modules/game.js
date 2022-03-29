import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

import instance from '../../util/request';

// actions
const SET_COUNT = 'SET_COUNT';
const SET_CHANCE = 'SET_CHANCE';

// Action Creators
const countUp = createAction(SET_COUNT, count => ({ count }));
const chanceDown = createAction(SET_CHANCE, chance => ({ chance }));

// initialState
const initialState = {
    count: 0,
    countLimit: 5,
    chance: 2,
};

//  middleware Actions
const gameStart = () => {
    return function (dispatch, getState) {
        const sessionRoomId = sessionStorage.getItem('sessionRoomId');
        console.log(`방이름: ${sessionRoomId} 시작합니다!`);
        instance.put(`/games/${sessionRoomId}`).catch(err => console.log(err));
    };
};

// 게임 종료하기
const deleteGame = (pass, time) => {
    const sessionRoomId = sessionStorage.getItem('sessionRoomId');
    return function (dispatch, getState) {
        console.log('게임종료!!!!');
        instance
            .post(`/games/${sessionRoomId}`, {
                pass,
                time,
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
        [SET_CHANCE]: (state, action) =>
            produce(state, draft => {
                draft.chance = action.payload.chance;
            }),
    },
    initialState
);

// action creator export
const actionCreator = {
    gameStart,
    deleteGame,
    countUp,
    chanceDown,
};

export { actionCreator };
