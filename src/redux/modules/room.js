import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

import instance from '../../shared/request';

// actions
const GET_ROOM_INFO = 'GET_ROOM_INFO';
const GET_ROOM_LIST = 'GET_ROOM_LIST';

// Action Creators
const getRoomInfo = createAction(GET_ROOM_INFO, roomInfo => ({ roomInfo }));

const getRoomList = createAction(GET_ROOM_LIST, roomList => ({ roomList }));

// initialState
const initialState = {
    roomInfo: null,
    roomList: null,
};

//  middleware Actions

// 방 개설하기
const makeRoom = (teamName, userId) => {
    return function (dispatch, getState) {
        instance
            .post('/room', {
                teamName,
                userId,
            })
            .then(res => dispatch(getRoomInfo(res.data)))
            .catch(err => console.log(err));
    };
};

// 방 리스트 조회하기
const refRoomList = () => {
    return function (dispatch, getState) {
        instance
            .get('/rooms')
            .then(res => dispatch(getRoomList(res.data)))
            .catch(err => console.log(err));
    };
};

// 방 조회하기
const refRoom = roomId => {
    return function (dispatch, getState) {
        instance
            .get(`/room/${roomId}`)
            .then(res => dispatch(getRoomInfo(res.data)))
            .catch(err => console.log(err));
    };
};

// 방 참여하기
const joinRoom = roomId => {
    return function (dispatch, getState) {
        instance
            .post(`/room/${roomId}`, {
                userId: '',
            })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };
};

// 방 삭제하기
const deleteRoom = roomId => {
    return function (dispatch, getState) {
        instance
            .delete(`/room/${roomId}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };
};

export default handleActions(
    {
        [GET_ROOM_INFO]: (state, action) =>
            produce(state, draft => {
                draft.roomInfo = action.payload.roomInfo;
            }),
        [GET_ROOM_LIST]: (state, action) =>
            produce(state, draft => {
                draft.roomList = action.payload.roomList;
            }),
    },
    initialState
);

// action creator export
const actionCreator = { makeRoom, refRoomList, refRoom, joinRoom, deleteRoom };

export { actionCreator };
