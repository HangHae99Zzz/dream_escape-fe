import React from 'react';
import styled from 'styled-components';

const MuteButton = () => {
    return (
        <Button>
            <Label>ON</Label>
            <MicIcon src="/icons/mic.svg" alt="" />
        </Button>
    );
};

const Button = styled.div`
    display: flex;
    align-items: center;
`;
const Label = styled.div`
    font-weight: bold;
`;
const MicIcon = styled.img`
    width: 14px;
    margin-left: 8px;
`;

export default MuteButton;
