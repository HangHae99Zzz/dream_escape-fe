import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

import instance from '../../shared/request';

// initialState
const initialState = { isIn: false, isCreator: false, peers: [] };

// actions
const IS_IN = 'IS_IN';
const IS_CREATOR = 'IS_CREATOR';

// Action Creators
const isIn = createAction(IS_IN, isIn => ({
    isIn,
}));

const isCreator = createAction(IS_CREATOR, isCreator => ({
    isCreator,
}));

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
const deleteUser = socketId => {
    return function (dispatch, getState) {
        console.log('유저삭제', socketId);
        instance
            .post(`/user`, { userId: socketId })
            .then(res => {
                // 내가방장
                // isCreator true
                // spring에 내가 방장임을 알리기
                console.log(res);
            })
            .catch(err => console.log(err));
    };
};

// 코멘트달기
const writeComment = contents => {
    return function (dispatch, getState) {
        instance
            .post('/comment', {
                comment: contents,
            })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };
};

export default handleActions(
    {
        [IS_IN]: (state, action) =>
            produce(state, draft => {
                draft.isIn = action.payload.isIn;
            }),
        [IS_CREATOR]: (state, action) =>
            produce(state, draft => {
                draft.isCreator = action.payload.isCreator;
            }),
    },
    initialState
);

// action creator export
const actionCreator = { isCreator, isIn, refUser, deleteUser, writeComment };

export { actionCreator };
