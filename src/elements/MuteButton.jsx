import React from 'react';
import styled from 'styled-components';

const MuteButton = ({ abs }) => {
    return (
        <Button abs={abs}>
            <Label>ON</Label>
            <MicIcon src="/icons/mic.svg" alt="" />
        </Button>
    );
};

const Button = styled.div`
    display: flex;
    align-items: center;
    position: ${props => props.abs && 'absolute'};
    bottom: ${props => props.abs && '17px'};
    left: ${props => props.abs && '24px'};
`;
const Label = styled.div`
    font-weight: bold;
`;
const MicIcon = styled.img`
    width: 14px;
    margin-left: 8px;
`;

export default MuteButton;
