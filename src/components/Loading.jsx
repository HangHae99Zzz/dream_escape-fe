import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

const Loading = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/game');
        }, 2000);
    }, []);

    return (
        <div>
            <Container>
                <div className="loading">
                    <div className="line-box">
                        <div className="line"></div>
                    </div>
                </div>
                <div className="text">
                    <h1>LOADING...</h1>
                </div>
            </Container>
        </div>
    );
};

export default Loading;

const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-image: url('../images/room.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);

    .text {
        margin-top: 0.833vw;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 1.042vw;
        line-height: 1.823vw;
        letter-spacing: 1rem;

        color: #adb7ff;
    }

    .loading {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .loading .line-box {
        display: flex;
        align-items: center;
        padding: 2px;
        width: 40%;
        height: 2vw;
        border: 4px solid #a6b1ff;
        border-radius: 29px;
        box-shadow: inset -1px -1px 1px rgba(86, 104, 232, 0.2),
            inset -2px -2px 4px rgba(2, 0, 78, 0.2),
            inset 1px 1px 2px rgba(210, 203, 255, 0.4),
            inset -4px -4px 6px rgba(21, 0, 149, 0.2),
            inset 2px 2px 6px rgba(255, 250, 206, 0.4);
    }

    .loading .line-box .line {
        height: 1.875vw;
        background: linear-gradient(180deg, #a6b1ff 0%, #1b37ff 100%);
        box-shadow: inset -1px -1px 1px rgba(86, 104, 232, 0.2),
            inset -2px -2px 4px rgba(2, 0, 78, 0.2),
            inset 1px 1px 2px rgba(210, 203, 255, 0.4),
            inset -4px -4px 6px rgba(21, 0, 149, 0.2),
            inset 2px 2px 6px rgba(255, 250, 206, 0.4);
        border-radius: 29px;
        animation: loading 2s forwards cubic-bezier(0, 0, 0, 0);
    }

    @keyframes loading {
        0% {
            width: 0%;
        }
        100% {
            width: 100%;
        }
    }
`;
