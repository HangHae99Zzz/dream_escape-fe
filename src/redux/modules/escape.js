import { createAction, handleActions } from "redux-actions";
import axios from "axios";

import instance from "../../shared/request";

const sessionRoomId = sessionStorage.getItem("sessionRoomId");

// actions
const LOAD_QUIZ = "LOAD_QUIZ";

// Action Creators
const loadQuiz = createAction(LOAD_QUIZ, (question, content, answer) => ({
  question,
  content,
  answer,
}));

// initialState
const initialState = {
  question: "",
  content: "",
  answer: "",
};

//  middleware Actions

// Quiz 조회하기
const refQuiz = (quizType) => {
  const sessionRoomId = sessionStorage.getItem("sessionRoomId");
  console.log("refQuiz 미들웨어에서 받았습니다!", quizType, typeof quizType);
  return function (dispatch, getState) {
    instance
      .get(`/escape/${sessionRoomId}/${quizType}`)
      .then((res) => {
        let _question = res.data.question;
        let _content = res.data.content;
        let _answer = res.data.answer;
        dispatch(loadQuiz(_question, _content, _answer));
        console.log(res);
      })

      .catch((err) => console.log(err));
  };
};

// 힌트 조회하기
const submitAnswer = (quizType) => {
  return function (dispatch, getState) {
    instance
      .post(`/escape/hint/${quizType}`, {})
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
};

// count +1
const submitResult = (roomId) => {
  return function (dispatch, getState) {
    instance
      .post(`/escape/${roomId}`, {})
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
};

export default handleActions(
  {
    [LOAD_QUIZ]: (state = initialState, action = {}) => {
      console.log(action.payload);
      return {
        ...state,
        question: action.payload.question,
        content: action.payload.content,
        answer: action.payload.answer,
      };
    },
  },
  initialState
);

// action creator export
const actionCreator = { refQuiz, submitAnswer, submitResult };

export { actionCreator };
