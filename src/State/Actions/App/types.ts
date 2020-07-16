import * as ApiObjects from '../../../Api/ApiObjects';
import { IPlayersCardList } from '../../Reducers/app';

export const FETCH_TEAMS_LIST = 'FETCH_TEAMS_LIST';
export const SAVE_TEAMS_LIST = 'SAVE_TEAMS_LIST';
export const FETCH_PLAYERS_LIST = 'FETCH_PLAYERS_LIST';
export const SAVE_PLAYERS_LIST = 'SAVE_PLAYERS_LIST';
export const SAVE_CURRENT_TEAM = 'SAVE_CURRENT_TEAM';
export const FETCH_PLAYER_NUMBER = 'FETCH_PLAYER_NUMBER';
export const SAVE_PLAYERS_CARD_LIST = 'SAVE_PLAYERS_CARD_LIST';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

export interface IFetchTeamsList {
    type: typeof FETCH_TEAMS_LIST;
}

export interface ISaveTeamsList {
    type: typeof SAVE_TEAMS_LIST;
    teamsList: ApiObjects.ITeamsList;
}

export interface IFetchPlayersList {
    type: typeof FETCH_PLAYERS_LIST;
    teamID: number;
}

export interface ISavePlayersList {
    type: typeof SAVE_PLAYERS_LIST;
    playersList: ApiObjects.IPlayersList;
}

export interface ISaveCurrentTeam {
    type: typeof SAVE_CURRENT_TEAM;
    currentTeam: ApiObjects.ITeamDetails;
}

export interface IFetchPlayerNumber {
    type: typeof FETCH_PLAYER_NUMBER;
    playersList: ApiObjects.IPlayerDetails[];
}

export interface ISavePlayersCardList {
    type: typeof SAVE_PLAYERS_CARD_LIST;
    playersCardList: IPlayersCardList[];
}

export interface IAppError {
    type: typeof SET_ERROR_MESSAGE;
    errorMessage: string;
}

export type appActionType = IFetchTeamsList
    | ISaveTeamsList
    | IFetchPlayersList
    | ISavePlayersList
    | ISaveCurrentTeam
    | IFetchPlayerNumber
    | ISavePlayersCardList
    | IAppError;
