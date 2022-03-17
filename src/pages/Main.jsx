import React, { useState } from 'react';
import styled from 'styled-components';
import { Contents, Footer } from '../components/index';
import { RoomCreateModal } from '../modal/index';
import { MakeRoomBtn, ModalBG } from '../elements/index';

import Layout from './Layout';

const Main = () => {
    const [openRoomCreateModal, setOpenRoomCreateModal] = useState(false);

    return (
        <>
            <Layout>
                <MainContainer>
                    <ContentsContainer>
                        <Contents />
                    </ContentsContainer>
                </MainContainer>
                <Footer />
                <MakeRoomBtn setOpenRoomCreateModal={setOpenRoomCreateModal} />

                {openRoomCreateModal && (
                    <>
                        <ModalBG closeModal={setOpenRoomCreateModal} />
                        <RoomCreateModal closeModal={setOpenRoomCreateModal} />
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
