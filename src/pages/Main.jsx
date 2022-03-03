import React from 'react';
import styled from 'styled-components';

import { Contents } from '../components/index';

const Main = props => {
    return (
        <MainContainer>
            <FlexContainer>
                {/* <Sidebar /> */}
                <Asidebar />
                <ContentsContainer>
                    {/* <Header /> */}
                    <Aheader />
                    <Contents />
                </ContentsContainer>
            </FlexContainer>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
`;

const FlexContainer = styled.div`
    display: flex;
    height: inherit;
`;

const ContentsContainer = styled.div`
    background-color: gray;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Aheader = styled.div`
    background-color: green;
    height: 280px;
    width: 100%;
`;
const Asidebar = styled.div`
    width: 14.583vw;
    height: auto;
    background-color: blue;
`;

export default Main;
