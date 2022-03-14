import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

import instance from '../../shared/request';

// actions
const USER_ID = 'USER_ID';
const IS_IN = 'IS_IN';

// Action Creators
const getUserId = createAction(USER_ID, userId => ({
    userId,
}));

const setIsIn = createAction(IS_IN, isIn => ({
    isIn,
}));

// initialState
const initialState = { userId: '', isIn: false };

//  middleware Actions

// 유저 정보 조회하기
const refUser = roomId => {
    return function (dispatch, getState) {
        instance
            .get(`/user/${roomId}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };
};

// 유저 삭제하기
const deleteUser = userId => {
    return function (dispatch, getState) {
        console.log('유저삭제', userId);
        instance
            .post(`/user`, { userId: userId })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };
};

export default handleActions(
    {
        [USER_ID]: (state, action) =>
            produce(state, draft => {
                draft.userId = action.payload.userId;
            }),
        [IS_IN]: (state, action) =>
            produce(state, draft => {
                draft.isIn = action.payload.isIn;
            }),
    },
    initialState
);

// action creator export
const actionCreator = { setIsIn, getUserId, refUser, deleteUser };

export { actionCreator };
