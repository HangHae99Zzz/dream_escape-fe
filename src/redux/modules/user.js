import { createAction, handleActions } from "redux-actions";
import axios from "axios";

import instance from "../../shared/request";

// actions

// Action Creators

// initialState
const initialState = {};

//  middleware Actions

// 유저 정보 조회하기
const refUser = (roomId) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/user/${roomId}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
};

// 유저 삭제하기
const deleteUser = (Id) => {
  return function (dispatch, getState, { history }) {
    instance
      .delete(`/user/${Id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
};

export default handleActions({}, initialState);

// action creator export
const actionCreator = { refUser, deleteUser };

export { actionCreator };
