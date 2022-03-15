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
    peers: [],
};

//  middleware Actions

// 게임시작
const saveSession = roomId => {
    // session storage에 저장 roomId:'1'
    console.log('세션에 저장합니다!');
    sessionStorage.setItem('sessionRoomId', roomId);
};

// 방 개설하기
const makeRoom = (teamName, socketId) => {
    return function (dispatch, getState) {
        console.log(`방이름: ${teamName} 내 이름: ${socketId}`);
        instance
            .post('/room', {
                teamName,
                userId: socketId,
            })
            .then(res => {
                console.log(`방 만든사람: ${res.data.createdUser}`);
                saveSession(res.data.roomId);
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
            .then(res => {
                saveSession(res.data.roomId);
                return dispatch(getRoomInfo(res.data));
            })
            .catch(err => console.log(err));
    };
};

// 방 참여하기
const joinRoom = (roomId, socketId, modal) => {
    return function (dispatch, getState) {
        // roomInfo 업데이트
        dispatch(refRoom(roomId));

        instance
            .post(`/room/${roomId}`, {
                userId: socketId,
            })
            .then(res => {
                // session storage에 저장 roomId:'1'
                sessionStorage.setItem('sessionRoomId', roomId);
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
