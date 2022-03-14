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
        console.log(`방이름: ${teamName} 내 이름: ${userId}`);
        instance
            .post('/room', {
                teamName,
                userId,
            })
            .then(res => {
                console.log(`방 만든사람: ${res.data.createdUser}`);
                return dispatch(getRoomInfo(res.data));
            })
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
const joinRoom = (roomId, userId, modal) => {
    return function (dispatch, getState) {
        // roomInfo 업데이트
        dispatch(refRoom(roomId));
        // session storage에 저장 roomId:'1'
        sessionStorage.setItem('roomId', roomId);
        console.log('방 참여 APi에 보내는', roomId, userId);

        instance
            .post(`/room/${roomId}`, {
                userId,
            })
            .then(res => {
                // session storage에 저장 roomId:'1'
                sessionStorage.setItem('roomId', roomId);
                modal(true);
            })
            .catch(err => window.alert('인원가득'));
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
const actionCreator = {
    getRoomInfo,
    makeRoom,
    refRoomList,
    refRoom,
    joinRoom,
    deleteRoom,
};

export { actionCreator };
