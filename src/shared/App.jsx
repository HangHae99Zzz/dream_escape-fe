import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import GlobalStyles from "../shared/GlobalStyle";
import Chat from "./Chat";
import GameEndModal from "../modal/GameEndModal";
import { Main, Rank, Update, GameRoom, GameDescription } from "../pages/index";
import { Loading, EndingCredit, InGameUsers } from "../components/index";
import { Timer } from "../elements/index";

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
        {/* 테스트용 / 삭제예정 */}
        <Route path="/ending" element={<EndingCredit />} />
        <Route path="/endingmodal" element={<GameEndModal />} />
        <Route path="/ingameuser" element={<InGameUsers />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </Router>
  );
}

export default App;
