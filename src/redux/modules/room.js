import { createAction, handleActions } from "redux-actions";
import produce from "immer";

import instance from "../../util/request";
import socket from "./socket";
import NotFound from "../../Page/NotFound";

// actions
const GET_ROOM_INFO = "GET_ROOM_INFO";
const GET_ROOM_LIST = "GET_ROOM_LIST";
const GET_PEERS = "GET_PEERS";
const GET_MY_NICK_NAME = "GET_MY_NICK_NAME";

// Action Creators
const getRoomInfo = createAction(GET_ROOM_INFO, (roomInfo) => ({ roomInfo }));

const getRoomList = createAction(GET_ROOM_LIST, (roomList) => ({ roomList }));

const getPeers = createAction(GET_PEERS, (peers) => ({ peers }));

const getMyNickName = createAction(GET_MY_NICK_NAME, (myNickName) => ({
  myNickName,
}));

// initialState
const initialState = {
  roomInfo: null,
  roomList: null,
  peers: [],
  myNickName: null,
};

//  middleware Actions

// 게임시작
const saveSessionRoomId = (roomId) => {
  // session storage에 저장 roomId:'1'
  console.log("세션에 저장합니다!");
  sessionStorage.setItem("sessionRoomId", roomId);
};

// 방 개설하기
const makeRoom = (teamName, socketId) => {
  return function (dispatch, getState) {
    console.log(`방이름: ${teamName} 내 이름: ${socketId}`);
    instance
      .post("/rooms", {
        teamName,
        userId: socketId,
      })
      .then((res) => {
        console.log(`방 만든사람: ${res.data.createdUser}`);
        saveSessionRoomId(res.data.roomId);
        return dispatch(getRoomInfo(res.data));
      })
      .catch((err) => console.log(err));
  };
};

// 방 리스트 조회하기
const refRoomList = (page) => {
  return function (dispatch, getState) {
    instance
      .get(`rooms/pages/${page}`)
      .then((res) => dispatch(getRoomList(res.data)))
      .catch((err) => console.log(err));
  };
};

// 방 조회하기
const refRoom = (roomId) => {
  return function (dispatch, getState) {
    instance
      .get(`/rooms/${roomId}`)
      .then((res) => {
        console.log(res);
        return dispatch(getRoomInfo(res.data));
      })
      .catch((err) => console.log(err));
  };
};

// 방 참여하기
const joinRoom = (roomId, socketId) => {
  return function (dispatch, getState) {
    // roomInfo 업데이트
    dispatch(refRoom(roomId));

    instance
      .post(`/rooms/${roomId}`, {
        userId: socketId,
      })
      .then((res) => {
        // session storage에 저장 roomId:'1'
        saveSessionRoomId(roomId);
      })
      .catch((err) => window.alert("인원가득"));
  };
};

// 방 삭제하기
const deleteRoom = (roomId) => {
  return function (dispatch, getState) {
    instance
      .delete(`/room/${roomId}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
};

// peers 조회하기
const refPeers = (roomId, socketId) => {
  return function (dispatch, getState) {
    instance
      .get(`/rooms/${roomId}`)
      .then((res) => {
        const myNickName = res.data.userList.filter(
          (user) => user.userId === socketId
        );
        dispatch(getMyNickName(myNickName[0].nickName));
        const peers = res.data.userList.filter(
          (user) => user.userId !== socketId
        );
        dispatch(getPeers(peers));
      })
      .catch((err) => console.log(err));
  };
};

export default handleActions(
  {
    [GET_ROOM_INFO]: (state, action) =>
      produce(state, (draft) => {
        draft.roomInfo = action.payload.roomInfo;
      }),
    [GET_ROOM_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.roomList = action.payload.roomList;
      }),
    [GET_PEERS]: (state, action) =>
      produce(state, (draft) => {
        draft.peers = action.payload.peers;
      }),
    [GET_MY_NICK_NAME]: (state, action) =>
      produce(state, (draft) => {
        draft.myNickName = action.payload.myNickName;
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
  refPeers,
};

export { actionCreator };
