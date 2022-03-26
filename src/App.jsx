import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useGAPageTracking from "./GAPageTracking";

import GlobalStyles from "./GlobalStyle";
import Chat from "./Component/Element/Chat";
import { Main, Rank, Update, GameRoom, Description, NotFound } from "./Page";
import Loading from "./Component/Main/Loading";

function App() {
  useGAPageTracking();
  return (
    <Router>
      <GlobalStyles />
      <Chat />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path=":roomId" element={<Main />} />
        <Route path="/ranks" element={<Rank />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/game" element={<GameRoom />} />
        <Route path="/desc" element={<Description />} />
        <Route path="/update" element={<Update />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
