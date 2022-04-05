import React from 'react';
import styled from 'styled-components';

const Mobile = () => {
    return (
        <Bg>
            <RendingPage
                src="https://d2ug3aglf1tff7.cloudfront.net/image/mobile.jpg"
                width={'390px'}
                height={'1933px'}
            ></RendingPage>
        </Bg>
    );
};

export default Mobile;

const Bg = styled.div`
    background-color: #1d1c21;
`;

const RendingPage = styled.img`
    display: block;
    margin: auto;
`;
