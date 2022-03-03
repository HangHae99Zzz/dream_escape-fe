import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
    return (
        <StyledSidebar>
            <h1>THE TITLE</h1>
        </StyledSidebar>
    );
};

export default Sidebar;

const StyledSidebar = styled.div`
    z-index: 10;
    width: 14.58vw;
    height: 100vh;
    background-color: blue;
`;
