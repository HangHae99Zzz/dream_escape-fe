import React, { useState } from 'react';
import styled from 'styled-components';
import { Contents } from '../Component/Main';
import { Footer } from '../Layout';
import { RoomCreateModal } from '../Component/Main/Modal';
import { MakeRoomBtn, ModalBG } from '../Component/Element';

import DefaultLayout from '../Layout/DefaultLayout';

const Main = () => {
    const [openRoomCreateModal, setOpenRoomCreateModal] = useState(false);

    return (
        <>
            <DefaultLayout>
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
            </DefaultLayout>
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
