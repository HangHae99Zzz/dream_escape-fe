import {
    Route,
    Routes,
    unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom';

import Main from '../pages/Main';
import GlobalStyles from '../shared/GlobalStyle';
import GameRoom from '../pages/GameRoom';
import Chat from './Chat';

import { createBrowserHistory } from 'history';
import Loading from '../components/Loading';
export const history = createBrowserHistory();

function App() {
    return (
        <HistoryRouter history={history}>
            <GlobalStyles />
            <Chat />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/loading" element={<Loading />} />
                <Route path="/game" element={<GameRoom />} />
            </Routes>
        </HistoryRouter>
    );
}

export default App;
