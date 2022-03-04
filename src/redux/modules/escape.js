import { createAction, handleActions } from "redux-actions";
import axios from "axios";

import instance from "../../shared/request";

// actions

// Action Creators

// initialState

//  middleware Actions

// 문제(1) 조회하기
const refQuiz = (roomId, quizId) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/escape/${roomId}/${quizId}`, {})
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
};

// 문제(1) 정답 제출하기
const submitAnswer = (roomId, quizId) => {
  return function (dispatch, getState, { history }) {
    instance
      .post(`/escape/${roomId}/${quizId}`, {})
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
};

// 미니게임(1) 결과 제출하기
const submitResult = (roomId, gameId) => {
  return function (dispatch, getState, { history }) {
    instance
      .post(`/escape/${roomId}/${gameId}`, {})
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
};

export default handleActions({}, initialState);

// action creator export
const actionCreator = { refQuiz, submitAnswer, submitResult };

export { actionCreator };
