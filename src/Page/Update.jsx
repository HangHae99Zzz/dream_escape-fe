import React from 'react';
import styled from 'styled-components';
import { DefaultLayout } from '../Layout';
// import { SvgUpdate } from '../Asset/Icon/etc/svg_etc';

const Update = () => {
    return (
        <>
            <DefaultLayout>
                <Container>
                    <Title></Title>
                    <Title>
                        <h4>업데이트 소식</h4>
                        {/* <SvgUpdate /> */}
                    </Title>
                    <Contents>
                        <p>아직 업데이트 소식이 없습니다.</p>
                    </Contents>
                </Container>
            </DefaultLayout>
        </>
    );
};

export default Update;
const Container = styled.div`
    padding-left: 94px;
`;

const Title = styled.div`
    display: flex;
    padding-bottom: 32px;

    h4 {
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;

        padding-right: 16px;
    }
`;
const Contents = styled.div`
    width: 90%;
    height: 14.844vw;
    background: #f1f3ff;
    border-radius: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-weight: 300;
        font-size: 22px;
        line-height: 43px;
        color: #c6c6c6;
    }
`;
