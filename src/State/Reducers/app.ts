import produce from 'immer';

import * as ApiObjects from '../../Api/ApiObjects';
import { appActionType, SAVE_TEAMS_LIST, SAVE_PLAYERS_LIST, SAVE_CURRENT_TEAM, SAVE_PLAYERS_CARD_LIST, SET_ERROR_MESSAGE } from '../Actions/App/types';

export interface IPlayersCardList {
    playerNumber: string;
    fullName: string;
    imageUrl: string;
    id: number;
}

export interface IAppState {
    teamsList: ApiObjects.ITeamsList;
    currentTeam: ApiObjects.ITeamDetails;
    playersList: ApiObjects.IPlayersList;
    playersCardList: IPlayersCardList[];
    errorMessage: string;
}

const initialState: IAppState = {
    teamsList: {
        data: [],
        pagination: {
            hasNextPage: false,
            hasPrevPage: false,
            itemsPerPage: 0,
            page: 0
        }
    },
    currentTeam: {
        address: '',
        badgeURL: '',
        country: '',
        email: '',
        founded: '',
        fullName: '',
        id: 0,
        name: '',
        officialPage: '',
        phone: ''
    },
    playersList: {
        data: [],
        pagination: {
            hasNextPage: false,
            hasPrevPage: false,
            itemsPerPage: 0,
            page: 0
        }
    },
    playersCardList: [],
    errorMessage: ''
}

export function appReducer(state: IAppState = initialState, action: appActionType) {
    return produce(state, draft => {
        switch (action.type) {
            case SAVE_TEAMS_LIST:
                draft.teamsList = action.teamsList;
                break;
            case SAVE_PLAYERS_LIST:
                draft.playersList = action.playersList;
                break;
            case SAVE_CURRENT_TEAM:
                draft.currentTeam = action.currentTeam;
                break;
            case SAVE_PLAYERS_CARD_LIST:
                draft.playersCardList = action.playersCardList;
                break;
            case SET_ERROR_MESSAGE:
                draft.errorMessage = action.errorMessage;
                break;
        }
    });
}