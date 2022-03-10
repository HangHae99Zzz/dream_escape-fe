import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { Main, GameRoom } from "../pages/index";
import GlobalStyle from "./GlobalStyle";
import { Loading } from "../components/index";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

function App() {
  return (
    <HistoryRouter history={history}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/game" element={<GameRoom />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
