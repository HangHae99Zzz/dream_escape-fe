import React from 'react';

import styled from 'styled-components';

const Footer = props => {
    return (
        <FooterContiner>
            <FooterTop>
                <div>
                    <Roll>designer</Roll> kim bo kyung seo hye won{' '}
                </div>
                <div>
                    <Roll>developer</Roll> kim ga eun ryu gang hyeon ban won jae
                    woo hye min choi gyu won
                </div>
            </FooterTop>
            <FooterBottom>
                <div>copyrights (c) the title 2022 All rights are reserved</div>
                <div>
                    회사소개 이용약관 개인정보처리방침 청소년보기정책 고객센터
                </div>
            </FooterBottom>
        </FooterContiner>
    );
};

const FooterContiner = styled.div`
    background-color: #f7f7f7;
    height: 340px;
`;

const FooterTop = styled.div`
    border: 1px solid black;
    height: 50%;
    font-weight: bold;
    font-size: 14px;
    color: #8f8f8f;
`;

const Roll = styled.span`
    color: #666666;
`;

const FooterBottom = styled.div`
    border: 1px solid black;
    height: 50%;
`;

export default Footer;
