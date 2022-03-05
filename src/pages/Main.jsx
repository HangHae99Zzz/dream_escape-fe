import React, { useState } from 'react';
import styled from 'styled-components';

import { Contents, Footer } from '../components/index';
import { MakeModal, ModalBG } from '../modal/index';

import Layout from './Layout';

const Main = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Layout>
                <MainContainer>
                    <ContentsContainer>
                        <Contents />
                    </ContentsContainer>
                </MainContainer>
                <Footer />
                <MakeRoomBtn onClick={() => setOpenModal(true)}>
                    방탈출 방 만들기
                </MakeRoomBtn>

                {openModal && (
                    <>
                        <ModalBG closeModal={setOpenModal} />
                        <MakeModal closeModal={setOpenModal} />
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

const MakeRoomBtn = styled.div`
    position: fixed;
    width: 240px;
    height: 62px;

    right: 37.8%;
    bottom: 44px;

    backdrop-filter: blur(30px);

    border: 3px solid #5668e8;
    box-sizing: border-box;
    box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.15);
    border-radius: 30px;
    font-weight: 900;
    font-size: 18px;
    line-height: 53px;
    text-align: center;
    letter-spacing: -0.03em;

    color: #5668e8;

    cursor: pointer;

    :hover {
        background: #ffffff;
    }
`;

export default Main;
