import React from 'react';
import styled from 'styled-components';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, GridList } from '@material-ui/core';

import * as ApiObjects from '../Api/ApiObjects';
import PlayerCard from '../Components/PlayerCard';
import { fetchPlayerNumber } from '../State/Actions/App';
import { IPlayersCardList } from '../State/Reducers/app';

const StyledDiv: any = styled.div`
    width: 100%;
    height: 90%;
    overflow: auto;
`;

const OneTeamDetails: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();

    const localPlayersList: ApiObjects.IPlayerDetails[] = useSelector((state: any) => state.app.playersList.data);
    const currentTeam: ApiObjects.ITeamDetails = useSelector((state: any) => state.app.currentTeam);
    const localPlayersCardList: IPlayersCardList[] = useSelector((state: any) => state.app.playersCardList);

    React.useEffect(() => {
        if (localPlayersList.length > 0)
            dispatch(fetchPlayerNumber(localPlayersList));
    }, [localPlayersList]);

    const mapListToCards = () => {
        if (localPlayersCardList.length === 0) return <div></div>;
        return localPlayersCardList.map(player =>
            <PlayerCard
                key={player.id}
                imageUrl={player.imageUrl}
                fullName={player.fullName}
                playerNumber={player.playerNumber}
                id={player.id}
            />
        );
    }

    return (
        <StyledDiv>
            <h1><Avatar alt={currentTeam.fullName} src={currentTeam.badgeURL} />{currentTeam.name} </h1>
            <h4>Founded at: {currentTeam.founded}</h4>
            <h4>Address: {currentTeam.address}</h4>
            <a href={currentTeam.officialPage} target="_blank">Website Page</a>
            <h2>Ower squad:</h2>
            <div style={{ width: '90%', marginTop: '1%' }}>
                <GridList cellHeight={'auto'} >
                    {mapListToCards()}
                </GridList>
            </div>
        </StyledDiv>
    );
}

export default OneTeamDetails;
