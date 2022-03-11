import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

import instance from '../../shared/request';

// actions
const USER_ID = 'USER_ID';

// Action Creators
const getUserId = createAction(USER_ID, userId => ({
    userId,
}));

// initialState
const initialState = { userId: '' };

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
        console.log(userId);
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
    },
    initialState
);

// action creator export
const actionCreator = { getUserId, refUser, deleteUser };

export { actionCreator };
