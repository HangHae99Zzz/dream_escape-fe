import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { SvgFind, SvgSearch, SvgSettings } from '../icons/header/svg_header';

const Header = () => {
    let [isToggleOn, setIsToggleOn] = useState(false);

    React.useEffect(() => {
        // console.log(isToggleOn);
        // change the theme of the website
    }, [isToggleOn]);

    return (
        <StyledHeader>
            <a href="/" className="logo"></a>
            <div className="head-menu">
                <div className="right-nav">
                    <ToggleBtn>
                        <input
                            type="checkbox"
                            className="checkbox"
                            id="checkbox"
                            onChange={e => setIsToggleOn(!isToggleOn)}
                        />
                        <label htmlFor="checkbox" className="label">
                            <div className="ball">
                                {isToggleOn ? (
                                    <span>DARK MODE</span>
                                ) : (
                                    <span>LIGHT MODE</span>
                                )}
                            </div>
                        </label>
                    </ToggleBtn>
                </div>
                <div className="left-nav">
                    <SearchInput>
                        <label>
                            <input
                                type="text"
                                placeholder="방 이름을 검색해보세요!"
                            />
                        </label>
                    </SearchInput>
                    <SettingBtn></SettingBtn>
                    <UserProfile></UserProfile>
                </div>
            </div>
        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled.header`
    z-index: 10;
    width: 100%;
    height: 7.3vw;
    display: flex;

    .logo {
        width: 14.58vw;
    }

    .head-menu {
        box-sizing: border-box;
        width: calc(100% - 14.58vw);
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding-left: 4.89vw;
        padding-right: 4.89vw;
    }

    .right-nav {
        flex: 1 1 0;
    }

    .left-nav {
        display: flex;
        flex: 1 1 0;
        justify-content: space-evenly;
        align-items: center;
    }
`;

const ToggleBtn = styled.div`
    box-sizing: border-box;

    .checkbox {
        opacity: 0;
        position: absolute;
    }

    .checkbox:checked + .label {
        background-color: #1d1c20;

        box-shadow: inset 0px 2px 10px #5668e8;
        border-radius: 32px;
    }

    .label {
        background-color: #fff;
        display: flex;
        border-radius: 50px;
        height: 2.7vw;
        width: 18.95vw;
        align-items: center;
        justify-content: space-between;
        position: relative;

        box-shadow: inset 0px 2px 10px rgba(104, 101, 255, 0.35);
        border-radius: 32px;

        span {
            color: #394ddb;
        }
    }

    .ball {
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        width: 8.9vw;
        height: 2.08vw;
        left: 10px;

        background-color: #fff;
        box-shadow: inset 0px -3px 10px rgba(104, 101, 255, 0.35);
        border-radius: 39px;

        transition: transform 0.2s linear;

        color: #394ddb;
        span {
            font-weight: 800;
        }
    }

    .checkbox:checked + .label .ball {
        transform: translateX(9vw);

        background: #1d1c20;
        box-shadow: inset 0px -3px 10px rgba(86, 104, 232, 0.95);

        color: #5668e8;
    }
`;

const SearchInput = styled.div`
    box-sizing: border-box;
    width: 23.9vw;
    height: 2.65vw;

    label {
        position: relative;
    }

    label:before {
        content: '';
        position: absolute;
        left: 10px;
        top: 0;
        bottom: 0;
        width: 30px;
        background: url('../icons/header/search.svg') center / contain no-repeat;
    }

    input {
        width: 90%;
        height: 90%;
        border: 2px solid #5668e8;
        outline: none;
        border-radius: 25px;
        padding-left: 40px;

        ::placeholder {
            font-size: 16px;
        }
    }
`;

const SettingBtn = styled.div`
    cursor: pointer;
    width: 1.2vw;
    height: 1.2vw;
    background: url('../icons/header/settings.svg') center / contain no-repeat;
`;

const UserProfile = styled.div`
    width: 3.38vw;
    height: 3.38vw;
    background-color: #e3e3e3;
    border-radius: 50%;
`;
