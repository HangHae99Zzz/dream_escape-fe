import {
    Route,
    Routes,
    unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom';

import { createBrowserHistory } from 'history';

import Main from './pages/Main';

export const history = createBrowserHistory();

function App() {
    return (
        <HistoryRouter history={history}>
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>{' '}
        </HistoryRouter>
    );
}

export default App;
