import * as AppActions from './types';
import * as ApiObjects from '../../../Api/ApiObjects';

export function fetchTeamsList(): AppActions.IFetchTeamsList {
    return {
        type: AppActions.FETCH_TEAMS_LIST
    }
}

export function fetchPlayersList(teamID: number): AppActions.IFetchPlayersList {
    return {
        type: AppActions.FETCH_PLAYERS_LIST,
        teamID: teamID
    }
}

export function saveCurrentTeam(currentTeam: ApiObjects.ITeamDetails): AppActions.ISaveCurrentTeam {
    return {
        type: AppActions.SAVE_CURRENT_TEAM,
        currentTeam: currentTeam
    }
}

export function fetchPlayerNumber(playerList: ApiObjects.IPlayerDetails[]): AppActions.IFetchPlayerNumber {
    return {
        type: AppActions.FETCH_PLAYER_NUMBER,
        playersList: playerList
    }
}