import React from 'react';
import { Avatar, GridListTile } from '@material-ui/core';
import styled from 'styled-components';

import { IPlayersCardList } from '../State/Reducers/app';

const StyledCard: any = styled(GridListTile)`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

const StyledDiv: any = styled.div`
    border: 1px solid black;
    width: 12%;
    border-radius: 10px;
    margin: 1%;
    padding: 2%;
`;

const PlayerCard: React.FunctionComponent<IPlayersCardList> = ({ playerNumber, fullName, imageUrl, id }) => (
    <StyledDiv>
        <StyledCard key={id}>
            <h3>{fullName}</h3>
            <Avatar alt={imageUrl} src={imageUrl} />
            <h5>{playerNumber}</h5>
        </StyledCard>
    </StyledDiv>
);

export default PlayerCard;