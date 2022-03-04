import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    let navigate = useNavigate();
    return (
        <StyledSidebar>
            <button
                type="click"
                onClick={() => navigate('/')}
                className="nav-logo"
            >
                <h1>THE TITLE</h1>
            </button>
            <Section>
                <ul>
                    <li onClick={() => navigate('/')}>
                        <img src="/icons/sidebar/ranking.png" alt="" />
                        <span>홈</span>
                    </li>
                    <li onClick={() => navigate('/')}>
                        <img src="/icons/sidebar/ranking.png" alt="" />
                        <span>랭킹조회</span>
                    </li>
                    <li onClick={() => navigate('/')}>
                        <img src="/icons/sidebar/description.png" alt="" />
                        <span>게임 설명</span>
                    </li>
                    <li onClick={() => navigate('/')}>
                        <img src="/icons/sidebar/update.png" alt="" />
                        <span>업데이트 소식</span>
                    </li>
                </ul>
            </Section>
        </StyledSidebar>
    );
};

export default Sidebar;

const StyledSidebar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 14.58vw;
    height: 100vh;

    box-shadow: 5px 0px 30px rgba(104, 101, 255, 0.15);

    .nav-logo {
        width: 100%;
        height: 7.3vw;
        background-color: transparent;

        h1 {
            /* position: absolute; */
            font-family: Work Sans;
            font-style: normal;
            font-weight: 800;
            font-size: 32px;
            line-height: 38px;

            letter-spacing: -0.03em;
            text-transform: uppercase;

            color: #5668e8;
        }
    }
`;

const Section = styled.section`
    box-sizing: border-box;
    padding: 0 1.87vw;

    display: flex;
    justify-content: center;

    li {
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
            font-weight: bold;
            font-size: 18px;
            line-height: 22px;
            letter-spacing: -0.03em;

            color: #bebebe;
        }

        img {
            width: 16.5px;
            height: 16.5px;
            margin-right: 10px;
        }
    }

    li:hover {
        background: #f1f3ff;
        span {
            color: #394ddb;
        }
    }
`;
