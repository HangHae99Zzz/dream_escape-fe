import React from 'react';
import styled from 'styled-components';

import { SvgBlueMic } from '../../Asset/Icon/etc/svg_etc';

const MuteButton = ({ abs }) => {
    return (
        <Button abs={abs}>
            <Label>ON</Label>
            <SvgBlueMic alt="mic" width={'14px'} />
        </Button>
    );
};

const Button = styled.div`
    display: flex;
    align-items: center;
    position: ${props => (props.abs ? 'absolute' : 'relative')};
    bottom: ${props => props.abs && '17px'};
    left: ${props => props.abs && '24px'};
    z-index: 1;
`;
const Label = styled.div`
    font-weight: bold;
    color: white;
`;
const MicIcon = styled.img`
    margin-left: 8px;
`;

export default MuteButton;
