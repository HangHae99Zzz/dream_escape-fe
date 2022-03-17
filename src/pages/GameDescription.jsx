import React, { useState } from 'react';

import styled from 'styled-components';

import { Layout } from './index';
import { Footer } from '../components/index';
import { MakeRoomBtn } from '../elements/index';
import { MakeModal, ModalBG } from '../modal/index';

const GameDescription = () => {
    const [openMakeModal, setOpenMakeModal] = useState(false);

    return (
        <Layout>
            <Height>
                <Backgrounds>
                    <DescContainer>
                        <LogoContainer>
                            <Logo1 src="icons/sidebar/logo.png"></Logo1>
                            <Logo2 src="icons/contents/desc_logo.png"></Logo2>
                        </LogoContainer>
                        ‘zzz’ 는 꿈을 꾸는 상태를 표현한 단어이자, 게임
                        프로젝트의 이름입니다
                        <br />
                        <br /> ‘꿈’ 이라는 매체를 이용하여
                        <br /> 상상하고 문제를 풀면서 해결하여
                        <br /> 방탈출을 하는 것이 본 게임을 이어나갈 수 있는
                        방법입니다
                        <br />
                        <br /> 당신은 꿈 속에서 얼마만큼의 역량을 발휘할 수
                        있는지 궁금하지 않으신가요?
                    </DescContainer>
                    <ImgContainer>
                        <Img1 src="images/desc_image1.png" />
                        <ImgContainer2>
                            <Img2 src="images/desc_image2.png" />
                            <Img3 src="images/desc_image3.png" />
                        </ImgContainer2>
                    </ImgContainer>
                    <Bottom>
                        화면뷰는 마우스를 이용하여 이동할 수 있습니다
                        <br /> 이를 이용해 시선을 옮긴 후 화면 가운데 초점에
                        클릭하고 싶은 물건을 두고 클릭하면 해당 물체가 선택되고
                        이에 맞는 문제가 출제됩니다
                        <br />
                        <br /> 설명과 단서를 보고 힌트를 찾으러 가거나 문제를
                        풀어 정답칸에 입력하세요 이 게임은 시간 누적순으로
                        랭킹이 정해지게 됩니다
                        <br />
                        <br />
                        <br />
                        <Catch>
                            지금 바로 ‘ zzz (지지지) ’ 를 시작하세요 !
                        </Catch>
                        <MakeRoomBtn
                            setOpenMakeModal={setOpenMakeModal}
                            block={true}
                        />
                    </Bottom>
                    <Background1></Background1>
                    <Background2></Background2>
                    <Background3></Background3>
                </Backgrounds>
            </Height>
            <Footer />
            {openMakeModal && (
                <>
                    <ModalBG closeModal={setOpenMakeModal} />
                    <MakeModal closeModal={setOpenMakeModal} />
                </>
            )}
        </Layout>
    );
};

const Height = styled.div`
    /* height: 2940px; */
    position: relative;
    overflow: hidden;
`;

const Backgrounds = styled.div`
    /* height: 2940px; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
        background-repeat: no-repeat;
    }
`;
const DescContainer = styled.div`
    width: 510px;
    height: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 28.8px;
    font-weight: 600;
    font-size: 18px;
    color: #4f4f4f;
    letter-spacing: -0.03em;
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

const Img1 = styled.img``;
const ImgContainer2 = styled.div``;
const Img2 = styled.img``;
const Img3 = styled.img``;
const Bottom = styled.div`
    width: 510px;
    height: 715px;
    font-weight: 600;
    font-size: 18px;
    line-height: 28.8px;
    text-align: center;
    color: #4f4f4f;
    letter-spacing: -0.03em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Catch = styled.span`
    font-weight: 600;
    font-size: 18px;
    line-height: 28.8px;
    text-align: center;
    color: #5668e8;
    letter-spacing: -0.03em;
    margin-bottom: 72px;
`;

const Background1 = styled.div`
    position: absolute;
    background: url('images/desc_background1.png');
    width: 100%;
    height: 1074px;
    top: -120px;
    left: 100px;
    z-index: -1;
`;

const Background2 = styled.div`
    position: absolute;
    background: url('images/desc_background2.png');
    width: 100%;
    height: 1074px;
    background-position-x: -250px;
    top: 600px;
    z-index: -1;
`;

const Background3 = styled.div`
    position: absolute;
    background: url('images/desc_background3.png');
    width: 100%;
    background-position-x: 350px;
    height: 1074px;
    top: 1800px;
    z-index: -1;
`;

export default GameDescription;
