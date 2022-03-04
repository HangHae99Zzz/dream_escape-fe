import React from 'react';
import styled from 'styled-components';

import { Contents, Footer } from '../components/index';

import Layout from './Layout';

const Main = () => {
    return (
        <>
            <Layout>
                <MainContainer>
                    <ContentsContainer>
                        <Contents />
                    </ContentsContainer>
                </MainContainer>
                <Footer />
            </Layout>
        </>
    );
};

const MainContainer = styled.div`
    background-color: gray;
    width: 100%;
`;

const ContentsContainer = styled.div`
    /* background-color: gray; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default Main;
