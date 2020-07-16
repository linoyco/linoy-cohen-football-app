import React from 'react';
import styled from 'styled-components';
import { SportsSoccer } from '@material-ui/icons';

const StyledDiv: any = styled.div`
    display: flex;
    align-items: center;
    align-content: center;

    background-color: #6CCF83;
    color: white;
    width: 100%;
    height: 10%;
    border-radius: 10px;
`;

const StyledTitle: any = styled.h1`
    margin-left: 1%;
    color: black;
`;

const HeaderBar: React.FunctionComponent = () => (
    <StyledDiv>
        <SportsSoccer style={{ width: '50px', height: '40px', color: 'black' }} />
        <StyledTitle>
            Welcome to Foot-Ball Teams!
        </StyledTitle>
    </StyledDiv>
);

export default HeaderBar;
