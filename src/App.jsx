import {
    Route,
    Routes,
    unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom';
import Main from './pages/Main';
import GlobalStyles from './components/GlobalStyle';

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

function App() {
    return (
        <HistoryRouter history={history}>
            <GlobalStyles />

            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </HistoryRouter>
    );
}

export default App;
