import { createAction, handleActions } from 'redux-actions';

import instance from '../../util/request';

// actions
const LOAD_QUIZ = 'LOAD_QUIZ';
const LOAD_CLUE = 'LOAD_CLUE';

// Action Creators
const loadQuiz = createAction(
    LOAD_QUIZ,
    (question, content, answer, chance, hint, pass) => ({
        question,
        content,
        answer,
        chance,
        hint,
        pass,
    })
);

const loadClue = createAction(LOAD_CLUE, clue => ({
    clue,
}));

// initialState
const initialState = {
    question: '',
    content: '',
    answer: '',
    chance: '',
    hint: '',
    pass: '',
    clue: [],
};

//  middleware Actions

// Quiz 조회하기
const refQuiz = (roomId, quizType) => {
    console.log('refQuiz 미들웨어에서 받았습니다!', quizType, typeof quizType);
    return function (dispatch, getState) {
        instance
            .get(`/rooms/${roomId}/quizzes/${quizType}`)
            .then(res => {
                let _question = res.data.question;
                let _content = res.data.content;
                let _answer = res.data.answer;
                let _chance = res.data.chance;
                let _hint = res.data.hint;
                let _pass = res.data.pass;
                dispatch(
                    loadQuiz(
                        _question,
                        _content,
                        _answer,
                        _chance,
                        _hint,
                        _pass
                    )
                );
                console.log(res);
            })

            .catch(err => console.log(err));
    };
};

// Clue 조회하기
const refClue = (roomId, clueType) => {
    console.log('refClue 미들웨어에서 받았습니다!', roomId);
    return function (dispatch, getState) {
        instance
            .get(`/rooms/${roomId}/clues/${clueType}`)
            .then(res => {
                console.log(res);
                let _temp = res.data;
                dispatch(loadClue(_temp));
            })
            .catch(err => console.log(err));
    };
};

// count +1
const submitResult = (roomId, quizType) => {
    console.log('submitResult', roomId, quizType);
    return function (dispatch, getState) {
        instance
            .put(`/rooms/${roomId}/quizzes/${quizType}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
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
                chance: action.payload.chance,
                hint: action.payload.hint,
                pass: action.payload.pass,
            };
        },

        [LOAD_CLUE]: (state, action = {}) => {
            console.log(action.payload);
            return {
                ...state,
                clue: action.payload,
            };
        },
    },
    initialState
);

// action creator export
const actionCreator = { refQuiz, refClue, submitResult };

export { actionCreator };
