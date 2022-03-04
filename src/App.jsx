import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import Main from "./pages/Main";
import GlobalStyles from "./components/GlobalStyle";

import { createBrowserHistory } from "history";
import Loading from "./components/Loading";
export const history = createBrowserHistory();

function App() {
  return (
    <HistoryRouter history={history}>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
