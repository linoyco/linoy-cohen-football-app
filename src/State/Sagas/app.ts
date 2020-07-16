import { take, call, put } from 'redux-saga/effects';
import * as ApiObjects from '../../Api/ApiObjects';

import { FETCH_TEAMS_LIST, SAVE_TEAMS_LIST, FETCH_PLAYERS_LIST, SAVE_PLAYERS_LIST, FETCH_PLAYER_NUMBER, SAVE_PLAYERS_CARD_LIST, SET_ERROR_MESSAGE } from '../Actions/App/types';
import * as Api from '../../Api';
import { IPlayersCardList } from '../Reducers/app';

function* fetchTeams() {
    try {
        yield put({ type: SET_ERROR_MESSAGE, errorMessage: '' });

        const res = yield call(Api.getTeamsRequest);
        yield put({ type: SAVE_TEAMS_LIST, teamsList: res.data });
    }
    catch (error) {
        yield put({ type: SET_ERROR_MESSAGE, errorMessage: error.message });
    }
};

export function* watchFetchTeamsList() {
    while (true) {
        yield take(FETCH_TEAMS_LIST);
        yield call(fetchTeams);
    }
};


function* fetchPlayers(teamID: number) {
    try {
        yield put({ type: SET_ERROR_MESSAGE, errorMessage: '' });

        const res = yield call(Api.getPlayersRequest, teamID);
        yield put({ type: SAVE_PLAYERS_LIST, playersList: res.data });
    }
    catch (error) {
        yield put({ type: SET_ERROR_MESSAGE, errorMessage: error.message });
    }
};

export function* watchFetchPlayersList() {
    while (true) {
        const { teamID } = yield take(FETCH_PLAYERS_LIST);
        yield call(fetchPlayers, teamID);
    }
};


function* fetchPlayersNumber(playersList: ApiObjects.IPlayerDetails[]) {
    try {
        yield put({ type: SET_ERROR_MESSAGE, errorMessage: '' });

        let localPlayersCardList: IPlayersCardList[] = [];
        for (let player of playersList) {
            let localPlayer: IPlayersCardList = {
                fullName: '',
                id: 0,
                imageUrl: '',
                playerNumber: ''
            }
            let searchBy: string = player.name.slice(3);
            const res = yield call(Api.getOnePlayerRequest, searchBy);
            if (res.data.error) {
                localPlayer = {
                    fullName: player.fullName,
                    id: player.id,
                    imageUrl: player.photoURL,
                    playerNumber: 'No number'
                }
            } else {
                localPlayer = {
                    fullName: player.fullName,
                    id: player.id,
                    imageUrl: player.photoURL,
                    playerNumber: res.data[0].player_number
                }
            }
            localPlayersCardList.push(localPlayer);
        }
        yield put({ type: SAVE_PLAYERS_CARD_LIST, playersCardList: localPlayersCardList });
    }
    catch (error) {
        yield put({ type: SET_ERROR_MESSAGE, errorMessage: error.message });
    }
};

export function* watchPlayersNumber() {
    while (true) {
        const { playersList } = yield take(FETCH_PLAYER_NUMBER);
        yield call(fetchPlayersNumber, playersList);
    }
};