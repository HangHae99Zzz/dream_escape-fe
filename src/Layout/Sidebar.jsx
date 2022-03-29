import React from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';

import {
    SvgHome,
    SvgRanking,
    SvgDescription,
    SvgUpdate,
    SvgReport,
} from '../Asset/Icon/sidebar/svg_sidebar';

const Sidebar = () => {
    let navigate = useNavigate();
    return (
        <StyledSidebar>
            <button
                type="click"
                onClick={() => navigate('/')}
                className="nav-logo"
            >
                <Logo></Logo>
            </button>
            <Section>
                <ul>
                    <li>
                        <StyledNavLink to="/">
                            <SvgHome />
                            <span>홈</span>
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/ranks">
                            <SvgRanking />
                            <span>랭킹조회</span>
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/desc">
                            <SvgDescription />
                            <span>게임 설명</span>
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/update">
                            <SvgUpdate />
                            <span>업데이트 소식</span>
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledAnchor
                            href="https://forms.gle/71TDYiC8xTJmR81Y6"
                            target={'_blank'}
                            rel="noreferrer"
                        >
                            <SvgReport />
                            <span>오류제보</span>
                        </StyledAnchor>
                    </li>
                </ul>
            </Section>
        </StyledSidebar>
    );
};

export default Sidebar;

const StyledSidebar = styled.nav`
    width: 14.58vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    box-shadow: 5px 0px 30px rgba(104, 101, 255, 0.15);

    button {
        cursor: pointer;
        width: 100%;
        height: 7.3vw;
        background-color: transparent;

        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
            /* position: absolute; */
            font-family: Work Sans;
            font-style: normal;
            font-weight: 800;
            font-size: 32px;
            line-height: 38px;

            text-transform: uppercase;

            color: #5668e8;
        }
    }
`;

const Logo = styled.div`
    background: url('image/logo.png');
    background-size: contain;
    background-repeat: no-repeat;
    width: 80%;
    height: 68px;
`;

const Section = styled.section`
    box-sizing: border-box;
    padding: 0 1.87vw;

    display: flex;
    justify-content: center;
`;

const StyledNavLink = styled(NavLink)`
    cursor: pointer;
    width: 10.8vw;
    height: 2.9vw;

    display: flex;
    align-items: center;

    padding-left: 1vw;
    margin-bottom: 1vw;

    border-radius: 16px;

    span {
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        margin-left: 10px;

        color: #bebebe;
    }

    :hover {
        background: #f1f3ff;
        span {
            color: #394ddb;
        }
    }

    &.active {
        background: #f1f3ff;
        span {
            color: #394ddb;
        }
    }
`;

const StyledAnchor = styled.a`
    cursor: pointer;
    width: 10.8vw;
    height: 2.9vw;

    display: flex;
    align-items: center;

    padding-left: 1vw;
    margin-bottom: 1vw;

    border-radius: 16px;

    span {
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        margin-left: 10px;

        color: #bebebe;
    }

    :hover {
        background: #f1f3ff;
        span {
            color: #394ddb;
        }
    }

    &.active {
        background: #f1f3ff;
        span {
            color: #394ddb;
        }
    }
`;
