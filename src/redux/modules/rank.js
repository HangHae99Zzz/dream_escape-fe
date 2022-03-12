import { createAction, handleActions } from "redux-actions";
import axios from "axios";

import instance from "../../shared/request";

// actions
const LOAD_RANKS = "LOAD_RANKS";
const LOAD_GAME_RANK = "LOAD_GAME_RANK";

// Action Creators
const loadRanks = createAction(LOAD_RANKS, (ranklist) => ({ ranklist }));
const loadGameRank = createAction(LOAD_GAME_RANK, (gameRank) => ({ gameRank }));

// initialState
const initialState = {
  ranklist: [],
  gameRank: [],
};

//  middleware Actions

// 걸린 시간 등록하기
const recordTime = (roomId, time) => {
  return function (dispatch, getState) {
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
  return function (dispatch, getState) {
    instance
      .get("/ranks")
      .then((res) => {
        let ranklist = res.data;
        dispatch(loadRanks(ranklist));
      })
      .catch((err) => console.log(err));
  };
};

// (게임 종료시) 랭킹 조회하기
const onGameRank = (roomId) => {
  return function (dispatch, getState) {
    instance
      .get(`/rank/${roomId}`)
      .then((res) => {
        console.log(res);
        // dispatch(loadGameRank(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export default handleActions(
  {
    [LOAD_RANKS]: (state = initialState, action = {}) => {
      return {
        ...state,
        ranklist: action.payload.ranklist,
      };
    },
    [LOAD_GAME_RANK]: (state = initialState, action = {}) => {
      console.log(action.payload);
      return {
        ...state,
        gameRank: action.payload.gameRank,
      };
    },
  },
  initialState
);

// action creator export
const actionCreator = { recordTime, refRank };

export { actionCreator };
