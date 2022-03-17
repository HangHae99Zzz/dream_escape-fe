import React, { useState } from 'react';
import styled from 'styled-components';
import { Contents, Footer } from '../components/index';
import { MakeModal, ModalBG } from '../modal/index';
import { MakeRoomBtn } from '../elements/index';

import Layout from './Layout';

const Main = () => {
    const [openMakeModal, setOpenMakeModal] = useState(false);

    return (
        <>
            <Layout>
                <MainContainer>
                    <ContentsContainer>
                        <Contents />
                    </ContentsContainer>
                </MainContainer>
                <Footer />
                <MakeRoomBtn setOpenMakeModal={setOpenMakeModal} />

                {openMakeModal && (
                    <>
                        <ModalBG closeModal={setOpenMakeModal} />
                        <MakeModal closeModal={setOpenMakeModal} />
                    </>
                )}
            </Layout>
        </>
    );
};

const MainContainer = styled.div`
    width: 100%;
`;

const ContentsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: -1.1099999999999994vw;
    align-items: center;
`;

export default Main;
