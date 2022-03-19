import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './GlobalStyle';
import Chat from './Component/Element/Chat';
import { Main, Rank, Update, GameRoom, GameDescription } from './Page';
import Loading from './Component/Main/Loading';

function App() {
    return (
        <Router>
            <GlobalStyles />
            <Chat />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/ranks" element={<Rank />} />
                <Route path="/loading" element={<Loading />} />
                <Route path="/game" element={<GameRoom />} />
                <Route path="/desc" element={<GameDescription />} />
                <Route path="/update" element={<Update />} />
            </Routes>
        </Router>
    );
}

export default App;
