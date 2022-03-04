import { createAction, handleActions } from "redux-actions";
import axios from "axios";

import instance from "../../shared/request";

// actions

// Action Creators

// initialState

//  middleware Actions

// 걸린 시간 등록하기
const recordTime = (roomId, time) => {
  return function (dispatch, getState, { history }) {
    instance
      .post(`/ranks/${roomId}`, {
        time: "",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
};

// 랭킹 조회하기
const refRank = () => {
  return function (dispatch, getState, { history }) {
    instance
      .get("/ranks")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
};

export default handleActions({}, initialState);

// action creator export
const actionCreator = { recordTime, refRank };

export { actionCreator };
