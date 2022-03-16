import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Main from '../pages/Main';
import GlobalStyles from '../shared/GlobalStyle';
import GameRoom from '../pages/GameRoom';
import Chat from './Chat';
import Loading from '../components/Loading';
import GameEndModal from '../modal/GameEndModal';
import Rank from '../pages/Rank';
import InGameUsers from '../components/InGameUsers';
import { Timer } from '../elements/index';

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
                {/* 테스트용 / 삭제예정 */}
                <Route path="/endingmodal" element={<GameEndModal />} />
                <Route path="/ingameuser" element={<InGameUsers />} />
                <Route path="/timer" element={<Timer />} />
            </Routes>
        </Router>
    );
}

export default App;
