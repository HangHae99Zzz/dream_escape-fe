import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// modules import
import User from './modules/user';
import Room from './modules/room';
import Rank from './modules/rank';
import Escape from './modules/escape';
import Socket from './modules/socket';

const rootReducer = combineReducers({
    user: User,
    room: Room,
    rank: Rank,
    escape: Escape,
    socket: Socket,
});

// middleware
const middlewares = [thunk];

// redux dev-tools
const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
          })
        : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// store
let store = initialStore => createStore(rootReducer, enhancer);

export default store();
