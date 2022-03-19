import React from 'react';
import styled from 'styled-components';
import { Header, Sidebar } from '../Component/index';

const DefaultLayout = ({ children }) => {
    return (
        <>
            <Sidebar />
            <Header />
            <div>
                <Wrapper>{children}</Wrapper>
            </div>
        </>
    );
};
export default DefaultLayout;

const Wrapper = styled.div`
    padding-left: 14.58vw;
`;
