import {
    Route,
    Routes,
    unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom';
import Main from '../pages/Main';
import GlobalStyles from '../components/GlobalStyle';
import GameRoom from '../pages/GameRoom';
import Chat from './Chat';

import { createBrowserHistory } from 'history';
import Loading from '../components/Loading';
export const history = createBrowserHistory();

function App() {
    return (
        <HistoryRouter history={history}>
            <GlobalStyles />

            <Routes>
                <Route path="/" element={<Chat />} />
                <Route path="/loading" element={<Loading />} />
                <Route path="/game" element={<GameRoom />} />
            </Routes>
        </HistoryRouter>
    );
}

export default App;
