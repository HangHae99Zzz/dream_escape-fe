import React from 'react';
import styled from 'styled-components';

const ModalBG = props => {
    return <BG onClick={() => props.closeModal(false)}></BG>;
};

const BG = styled.div`
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgb(0 0 0 / 60%);
`;

export default ModalBG;
