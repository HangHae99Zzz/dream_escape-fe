import React from 'react';
import styled from 'styled-components';

import { Contents, Footer } from '../components/index';

import Layout from './Layout';

const Main = () => {
    return (
        <>
            <Layout>
                <MainContainer>
                    <FlexContainer>
                        <ContentsContainer>
                            <Contents />
                        </ContentsContainer>
                    </FlexContainer>
                </MainContainer>
                <Footer />
            </Layout>
        </>
    );
};

const MainContainer = styled.div`
    /* background-color: gray; */
    width: 100%;
    height: 100vh;
`;

const FlexContainer = styled.div`
    display: flex;
    height: inherit;
`;

const ContentsContainer = styled.div`
    /* background-color: gray; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default Main;
