import React, { useState } from 'react';

import styled from 'styled-components';

import { DefaultLayout, Footer } from '../Layout';
import { RoomCreateModal } from '../Component/Main/Modal';
import { MakeRoomBtn, ModalBG } from '../Component/Element';

const Description = () => {
    const [openRoomCreateModal, setOpenRoomCreateModal] = useState(false);

    return (
        <>
            <DefaultLayout>
                <Height>
                    <Backgrounds>
                        <DescContainer>
                            <LogoContainer>
                                <Logo1 src="https://d2ug3aglf1tff7.cloudfront.net/image/logo.png"></Logo1>
                                <Logo2 src="https://d2ug3aglf1tff7.cloudfront.net/image/desc_logo.png"></Logo2>
                            </LogoContainer>
                            <Desc>
                                ‘zzz’ 는 꿈을 꾸는 상태를 표현한 단어이자, 게임
                                프로젝트의 이름입니다
                            </Desc>
                            <Desc>
                                ‘꿈’ 이라는 매체를 이용하여
                                <br /> 상상하고 문제를 풀면서 해결하여
                                <br /> 방탈출을 하는 것이 본 게임을 이어나갈 수
                                있는 방법입니다
                            </Desc>
                            <Desc>
                                {' '}
                                당신은 꿈 속에서 얼마만큼의 역량을 발휘할 수
                                있는지 궁금하지 않으신가요?
                            </Desc>
                        </DescContainer>
                        <ImgContainer>
                            <img
                                src="https://d2ug3aglf1tff7.cloudfront.net/image/desc_image1.png"
                                alt="image1.png"
                                width={'auto'}
                            />
                            <div>
                                <img
                                    src="https://d2ug3aglf1tff7.cloudfront.net/image/desc_image2.png"
                                    alt="image2.png"
                                    width={'auto'}
                                />
                                <img
                                    src="https://d2ug3aglf1tff7.cloudfront.net/image/desc_image3.png"
                                    alt="image2.png"
                                    width={'auto'}
                                />
                            </div>
                        </ImgContainer>
                        <Bottom>
                            <Desc>
                                키보드 WASD키를 이용하여 이동할 수 있습니다.
                                <br /> 화면 가운데 초점에 클릭하고 싶은 물건을
                                두고 클릭하면 문제가 출제됩니다.
                                <br /> 문제를 맞추기 위해 1인칭 시점에서
                                빠져나와 마우스를 쓰려면 ESC 키를 눌러야 합니다.
                                <br /> 다시 1인칭 시점으로 돌아가려면 ESC를
                                눌러야 합니다.
                            </Desc>
                            <Desc>
                                설명과 단서를 보고 힌트를 찾으러 가거나 문제를
                                풀어 정답칸에 입력하세요.
                                <br /> 이 게임은 시간 누적순으로 랭킹이 정해지게
                                됩니다.
                            </Desc>
                            <Catch>
                                지금 바로 ‘ zzz (지지지) ’ 를 시작하세요 !
                            </Catch>
                            <MakeRoomBtn
                                setOpenRoomCreateModal={setOpenRoomCreateModal}
                                block={true}
                            />
                        </Bottom>
                        <Background1></Background1>
                        <Background2></Background2>
                        <Background3></Background3>
                    </Backgrounds>
                </Height>
                {openRoomCreateModal && (
                    <>
                        <ModalBG closeModal={setOpenRoomCreateModal} />
                        <RoomCreateModal closeModal={setOpenRoomCreateModal} />
                    </>
                )}
            </DefaultLayout>
            <Footer />
        </>
    );
};

const Height = styled.div`
    position: relative;
    overflow: hidden;
`;

const Backgrounds = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
        background-repeat: no-repeat;
    }
`;

const DescContainer = styled.div`
    width: 560px;
    height: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Desc = styled.div`
    text-align: center;
    line-height: 28.8px;
    font-weight: 600;
    font-size: 18px;
    color: #4f4f4f;
    margin-bottom: 2em;
`;

const LogoContainer = styled.div`
    margin-bottom: 60px;
`;
const Logo1 = styled.img`
    margin-left: 22px;
`;
const Logo2 = styled.img`
    margin-bottom: -24px;
`;

const ImgContainer = styled.div`
    margin-bottom: 80px;
`;

const Bottom = styled.div`
    width: 600px;
    height: 715px;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
        margin-bottom: 3em;
    }
`;

const Catch = styled.span`
    font-weight: 600;
    font-size: 18px;
    line-height: 28.8px;
    text-align: center;
    color: #5668e8;
    margin-bottom: 72px;
`;

const Background1 = styled.div`
    position: absolute;
    background: url('https://d2ug3aglf1tff7.cloudfront.net/image/desc_background1.png');
    background-size: cover;
    width: 100%;
    height: 1074px;
    top: -120px;
    left: 100px;
    z-index: -1;
`;

const Background2 = styled.div`
    position: absolute;
    background: url('https://d2ug3aglf1tff7.cloudfront.net/image/desc_background2.png');
    background-size: cover;
    width: 100%;
    height: 1074px;
    background-position-x: -250px;
    top: 600px;
    z-index: -1;
`;

const Background3 = styled.div`
    position: absolute;
    background: url('https://d2ug3aglf1tff7.cloudfront.net/image/desc_background3.png');
    background-size: cover;
    width: 100%;
    background-position-x: 350px;
    height: 1074px;
    top: 1800px;
    z-index: -1;
`;

export default Description;
