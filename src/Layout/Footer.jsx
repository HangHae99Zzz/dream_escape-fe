import React from 'react';
import styled from 'styled-components';

const Footer = props => {
    return (
        <FooterContiner>
            <PaddingLeft>
                <FooterTop>
                    <div>
                        <Roll style={{ margin: '0 10px 0 0' }}>designer</Roll>{' '}
                        kim bo kyung seo hye won{' '}
                    </div>
                    <div>
                        <Roll>developer</Roll> kim ga eun ryu gang hyeon ban won
                        jae woo hye min choi kyu won
                    </div>
                </FooterTop>
                <FooterBottom>
                    <CopyRight>
                        copyrights (c) the title 2022{' '}
                        <AllRights>All rights are reserved</AllRights>
                    </CopyRight>
                    <FlexContainer>
                        <Rigth>
                            <div>회사소개</div>
                            <div>이용약관</div>
                            <div>개인정보처리방침</div>
                            <div>청소년보기정책</div>
                            <div>고객센터</div>
                        </Rigth>
                        <LogoContainer>
                            <a
                                href="https://github.com/HangHae99Zzz"
                                rel="noreferrer"
                                target={'_blank'}
                            >
                                <GitHub
                                    src="/image/GitHub_Logo.png"
                                    alt="GitHub"
                                    width={'72px'}
                                ></GitHub>
                            </a>
                            <Hanghae></Hanghae>
                        </LogoContainer>
                    </FlexContainer>
                </FooterBottom>
            </PaddingLeft>
        </FooterContiner>
    );
};

const FooterContiner = styled.div`
    background-color: #f7f7f7;
    font-size: 14px;
`;

const PaddingLeft = styled.div`
    padding-left: 7%;
`;

const FooterTop = styled.div`
    font-weight: bold;
    font-size: 14px;
    color: #8f8f8f;
    padding: 100px 0 100px;
    line-height: 22px;
    text-transform: uppercase;
`;

const Roll = styled.span`
    color: #666666;
    padding-right: 12px;
`;

const FooterBottom = styled.div``;

const CopyRight = styled.span`
    font-weight: bold;
    color: #dddddd;
`;

const AllRights = styled.span`
    font-weight: bold;
    margin-left: 16px;
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 14px 0px 50px;
    align-items: center;
`;

const Rigth = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
    color: #b5b5b5;
    div {
        font-weight: bold;
    }
`;

const LogoContainer = styled.div`
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const GitHub = styled.img`
    /* webkit에서 에러 */
    /* height: fit-content; */
    cursor: pointer;
`;

const Hanghae = styled.div`
    width: 72px;
    height: 54px;
    padding-right: 51px;
    background-image: url('/image/hanghae.png');
    background-repeat: no-repeat;
`;

export default Footer;
