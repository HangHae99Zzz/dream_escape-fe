import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import ReactGA from 'react-ga';

import GlobalStyles from './GlobalStyle';
import Chat from './Component/Element/Chat';
import { Main, Rank, Update, GameRoom, NotFound, Mobile } from './Page';
import Loading from './Component/Main/Loading';

ReactGA.initialize('UA-216505646-3');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 820px)' });

    const Description = React.lazy(() => import('./Page/Description'));

    return isTabletOrMobile ? (
        <>
            <GlobalStyles />
            <Mobile />
        </>
    ) : (
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
    );
}

export default App;
