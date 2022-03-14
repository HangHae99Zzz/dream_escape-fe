import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Main from '../pages/Main';
import GlobalStyles from '../shared/GlobalStyle';
import GameRoom from '../pages/GameRoom';
import Chat from './Chat';
import Loading from '../components/Loading';
import EndingCredit from '../components/EndingCredit';
import GameEndModal from '../modal/GameEndModal';
import Rank from '../pages/Rank';

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
                <Route path="/ending" element={<EndingCredit />} />
                <Route path="/endingmodal" element={<GameEndModal />} />
            </Routes>
        </Router>
    );
}

export default App;
