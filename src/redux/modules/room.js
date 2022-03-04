import { createAction, handleActions } from "redux-actions";
import axios from "axios";

import instance from "../../shared/request";
// actions

// Action Creators

// initialState

//  middleware Actions

// 방 개설하기
const makeRoom = () => {
  return function (dispatch, getState, { history }) {
    instance
      .post("/room", {
        teamName: "",
        userId: "",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
};

// 방 리스트 조회하기
const refRoomList = () => {
  return function (dispatch, getState, { history }) {
    instance
      .get("/rooms")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
};

// 방 조회하기
const refRoom = (roomId) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/room/${roomId}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
};

// 방 참여하기
const joinRoom = (roomId) => {
  return function (dispatch, getState, { history }) {
    instance
      .post(`/room/${roomId}`, {
        userId: "",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
};

// 방 삭제하기
const deleteRoom = (roomId) => {
  return function (dispatch, getState, { history }) {
    instance
      .delete(`/room/${roomId}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
};

export default handleActions({}, initialState);

// action creator export
const actionCreator = { makeRoom, refRoomList, refRoom, joinRoom, deleteRoom };

export { actionCreator };
