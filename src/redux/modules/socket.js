import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// actions
const GET_SOCKET = 'GET_SOCKET';

// Action Creators
const getSocket = createAction(GET_SOCKET, socket => ({ socket }));

// initialState
const initialState = {
    socket: null,
};

export default handleActions(
    {
        [GET_SOCKET]: (state, action) =>
            produce(state, draft => {
                draft.socket = action.payload.socket;
            }),
    },
    initialState
);

const actionCreator = { getSocket };

export { actionCreator };
